var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
var _hotKeys, _fullscreenElement, _keyUpHandler, keyUpHandler_fn, _keyDownHandler, keyDownHandler_fn;
import { MediaContainer } from "./media-container.js";
import { globalThis } from "./utils/server-safe-globals.js";
import { AttributeTokenList } from "./utils/attribute-token-list.js";
import { constToCamel, delay } from "./utils/utils.js";
import { stringifyTextTrackList, toggleSubsCaps } from "./utils/captions.js";
import {
  MediaUIEvents,
  MediaUIAttributes,
  MediaStateReceiverAttributes,
  AttributeToStateChangeEventMap,
  MediaUIProps
} from "./constants.js";
import { MediaUIRequestHandlers, MediaUIStates, volumeSupportPromise } from "./controller.js";
import { setBooleanAttr, setNumericAttr, setStringAttr } from "./utils/element-utils.js";
const ButtonPressedKeys = ["ArrowLeft", "ArrowRight", "Enter", " ", "f", "m", "k", "c"];
const DEFAULT_SEEK_OFFSET = 10;
const DEFAULT_TIME = 0;
const Attributes = {
  DEFAULT_SUBTITLES: "defaultsubtitles",
  DEFAULT_STREAM_TYPE: "defaultstreamtype",
  FULLSCREEN_ELEMENT: "fullscreenelement",
  HOTKEYS: "hotkeys",
  KEYS_USED: "keysused",
  LIVE_EDGE_OFFSET: "liveedgeoffset",
  NO_AUTO_SEEK_TO_LIVE: "noautoseektolive",
  NO_HOTKEYS: "nohotkeys"
};
class MediaController extends MediaContainer {
  constructor() {
    super();
    __privateAdd(this, _keyUpHandler);
    __privateAdd(this, _keyDownHandler);
    __privateAdd(this, _hotKeys, new AttributeTokenList(this, Attributes.HOTKEYS));
    __privateAdd(this, _fullscreenElement, void 0);
    if (MediaUIStates.MEDIA_VOLUME_UNAVAILABLE.get(this) === void 0) {
      volumeSupportPromise.then(() => {
        this.propagateMediaState(
          MediaUIAttributes.MEDIA_VOLUME_UNAVAILABLE,
          MediaUIStates.MEDIA_VOLUME_UNAVAILABLE.get(this)
        );
      });
    }
    this.mediaStateReceivers = [];
    this.associatedElementSubscriptions = /* @__PURE__ */ new Map();
    this.associateElement(this);
    Object.keys(MediaUIRequestHandlers).forEach((key) => {
      const handlerName = `_handle${constToCamel(key, true)}`;
      this[handlerName] = (e) => {
        e.stopPropagation();
        if (!this.media) {
          console.warn("MediaController: No media available.");
          return;
        }
        MediaUIRequestHandlers[key](this.media, e, this);
      };
      this.addEventListener(MediaUIEvents[key], this[handlerName]);
    });
    this._mediaStatePropagators = {};
    Object.keys(MediaUIStates).forEach((key) => {
      this._mediaStatePropagators[key] = (e) => {
        this.propagateMediaState(MediaUIProps[key], MediaUIStates[key].get(this, e));
      };
    });
    this.enableHotkeys();
  }
  static get observedAttributes() {
    return super.observedAttributes.concat(
      Attributes.NO_HOTKEYS,
      Attributes.HOTKEYS,
      Attributes.DEFAULT_STREAM_TYPE,
      Attributes.DEFAULT_SUBTITLES
    );
  }
  get fullscreenElement() {
    var _a;
    return (_a = __privateGet(this, _fullscreenElement)) != null ? _a : this;
  }
  set fullscreenElement(element) {
    if (this.hasAttribute(Attributes.FULLSCREEN_ELEMENT)) {
      this.removeAttribute(Attributes.FULLSCREEN_ELEMENT);
    }
    __privateSet(this, _fullscreenElement, element);
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    var _a;
    if (attrName === Attributes.NO_HOTKEYS) {
      if (newValue !== oldValue && newValue === "") {
        if (this.hasAttribute(Attributes.HOTKEYS)) {
          console.warn("Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled.");
        }
        this.disableHotkeys();
      } else if (newValue !== oldValue && newValue === null) {
        this.enableHotkeys();
      }
    } else if (attrName === Attributes.HOTKEYS) {
      __privateGet(this, _hotKeys).value = newValue;
    } else if (attrName === Attributes.DEFAULT_SUBTITLES && newValue !== oldValue && newValue === "") {
      toggleSubsCaps(this, true);
    } else if (attrName === Attributes.DEFAULT_STREAM_TYPE) {
      this.propagateMediaState(MediaUIProps.MEDIA_STREAM_TYPE);
    } else if (attrName === Attributes.FULLSCREEN_ELEMENT) {
      const el = newValue ? (_a = this.getRootNode()) == null ? void 0 : _a.getElementById(newValue) : void 0;
      __privateSet(this, _fullscreenElement, el);
    }
    super.attributeChangedCallback(attrName, oldValue, newValue);
  }
  mediaSetCallback(media) {
    super.mediaSetCallback(media);
    if (!media.hasAttribute("tabindex")) {
      media.tabIndex = -1;
    }
    Object.keys(MediaUIStates).forEach((key) => {
      const {
        mediaEvents,
        rootEvents,
        trackListEvents
      } = MediaUIStates[key];
      const handler = this._mediaStatePropagators[key];
      mediaEvents == null ? void 0 : mediaEvents.forEach((eventName) => {
        media.addEventListener(eventName, handler);
        handler();
      });
      rootEvents == null ? void 0 : rootEvents.forEach((eventName) => {
        this.getRootNode().addEventListener(eventName, handler);
        handler();
      });
      trackListEvents == null ? void 0 : trackListEvents.forEach((eventName) => {
        var _a;
        (_a = media.textTracks) == null ? void 0 : _a.addEventListener(eventName, handler);
        handler();
      });
    });
    if (!this.hasAttribute("novolumepref")) {
      try {
        const volPref = globalThis.localStorage.getItem("media-chrome-pref-volume");
        if (volPref !== null)
          media.volume = volPref;
      } catch (e) {
        console.debug("Error getting volume pref", e);
      }
    }
  }
  mediaUnsetCallback(media) {
    super.mediaUnsetCallback(media);
    Object.keys(MediaUIStates).forEach((key) => {
      const {
        mediaEvents,
        rootEvents,
        trackListEvents
      } = MediaUIStates[key];
      const handler = this._mediaStatePropagators[key];
      mediaEvents == null ? void 0 : mediaEvents.forEach((eventName) => {
        media.removeEventListener(eventName, handler);
      });
      rootEvents == null ? void 0 : rootEvents.forEach((eventName) => {
        this.getRootNode().removeEventListener(eventName, handler);
      });
      trackListEvents == null ? void 0 : trackListEvents.forEach((eventName) => {
        var _a;
        (_a = media.textTracks) == null ? void 0 : _a.removeEventListener(eventName, handler);
      });
    });
    this.propagateMediaState(MediaUIProps.MEDIA_PAUSED, true);
  }
  propagateMediaState(stateName, state) {
    const attrName = stateName.toLowerCase();
    const previousState = this.getAttribute(attrName);
    propagateMediaState(this.mediaStateReceivers, stateName, state);
    if (previousState === this.getAttribute(attrName))
      return;
    const evt = new globalThis.CustomEvent(
      AttributeToStateChangeEventMap[attrName],
      { composed: true, bubbles: true, detail: state }
    );
    this.dispatchEvent(evt);
  }
  associateElement(element) {
    if (!element)
      return;
    const { associatedElementSubscriptions } = this;
    if (associatedElementSubscriptions.has(element))
      return;
    const registerMediaStateReceiver = this.registerMediaStateReceiver.bind(this);
    const unregisterMediaStateReceiver = this.unregisterMediaStateReceiver.bind(this);
    const unsubscribe = monitorForMediaStateReceivers(
      element,
      registerMediaStateReceiver,
      unregisterMediaStateReceiver
    );
    Object.keys(MediaUIEvents).forEach((key) => {
      element.addEventListener(
        MediaUIEvents[key],
        this[`_handle${constToCamel(key, true)}`]
      );
    });
    associatedElementSubscriptions.set(element, unsubscribe);
  }
  unassociateElement(element) {
    if (!element)
      return;
    const { associatedElementSubscriptions } = this;
    if (!associatedElementSubscriptions.has(element))
      return;
    const unsubscribe = associatedElementSubscriptions.get(element);
    unsubscribe();
    associatedElementSubscriptions.delete(element);
    Object.keys(MediaUIEvents).forEach((key) => {
      element.removeEventListener(
        MediaUIEvents[key],
        this[`_handle${constToCamel(key, true)}`]
      );
    });
  }
  registerMediaStateReceiver(el) {
    if (!el)
      return;
    const els = this.mediaStateReceivers;
    const index = els.indexOf(el);
    if (index > -1)
      return;
    els.push(el);
    Object.keys(MediaUIStates).forEach((stateConstName) => {
      const stateDetails = MediaUIStates[stateConstName];
      propagateMediaState(
        [el],
        MediaUIProps[stateConstName],
        stateDetails.get(this)
      );
    });
  }
  unregisterMediaStateReceiver(el) {
    const els = this.mediaStateReceivers;
    const index = els.indexOf(el);
    if (index < 0)
      return;
    els.splice(index, 1);
  }
  enableHotkeys() {
    this.addEventListener("keydown", __privateMethod(this, _keyDownHandler, keyDownHandler_fn));
  }
  disableHotkeys() {
    this.removeEventListener("keydown", __privateMethod(this, _keyDownHandler, keyDownHandler_fn));
    this.removeEventListener("keyup", __privateMethod(this, _keyUpHandler, keyUpHandler_fn));
  }
  get hotkeys() {
    return __privateGet(this, _hotKeys);
  }
  keyboardShortcutHandler(e) {
    var _a, _b, _c, _d;
    const keysUsed = ((_d = (_c = (_a = e.target.getAttribute(Attributes.KEYS_USED)) == null ? void 0 : _a.split(" ")) != null ? _c : (_b = e.target) == null ? void 0 : _b.keysUsed) != null ? _d : []).map((key) => key === "Space" ? " " : key).filter(Boolean);
    if (keysUsed.includes(e.key)) {
      return;
    }
    let eventName, currentTimeStr, currentTime, detail, evt;
    const seekOffset = DEFAULT_SEEK_OFFSET;
    if (__privateGet(this, _hotKeys).contains(`no${e.key.toLowerCase()}`))
      return;
    if (e.key === " " && __privateGet(this, _hotKeys).contains(`nospace`))
      return;
    switch (e.key) {
      case " ":
      case "k":
        eventName = this.getAttribute(MediaUIAttributes.MEDIA_PAUSED) != null ? MediaUIEvents.MEDIA_PLAY_REQUEST : MediaUIEvents.MEDIA_PAUSE_REQUEST;
        this.dispatchEvent(
          new globalThis.CustomEvent(eventName, { composed: true, bubbles: true })
        );
        break;
      case "m":
        eventName = this.getAttribute(MediaUIAttributes.MEDIA_VOLUME_LEVEL) === "off" ? MediaUIEvents.MEDIA_UNMUTE_REQUEST : MediaUIEvents.MEDIA_MUTE_REQUEST;
        this.dispatchEvent(
          new globalThis.CustomEvent(eventName, { composed: true, bubbles: true })
        );
        break;
      case "f":
        eventName = this.getAttribute(MediaUIAttributes.MEDIA_IS_FULLSCREEN) != null ? MediaUIEvents.MEDIA_EXIT_FULLSCREEN_REQUEST : MediaUIEvents.MEDIA_ENTER_FULLSCREEN_REQUEST;
        this.dispatchEvent(
          new globalThis.CustomEvent(eventName, { composed: true, bubbles: true })
        );
        break;
      case "c":
        toggleSubsCaps(this);
        break;
      case "ArrowLeft":
        currentTimeStr = this.getAttribute(
          MediaUIAttributes.MEDIA_CURRENT_TIME
        );
        currentTime = currentTimeStr && !Number.isNaN(+currentTimeStr) ? +currentTimeStr : DEFAULT_TIME;
        detail = Math.max(currentTime - seekOffset, 0);
        evt = new globalThis.CustomEvent(MediaUIEvents.MEDIA_SEEK_REQUEST, {
          composed: true,
          bubbles: true,
          detail
        });
        this.dispatchEvent(evt);
        break;
      case "ArrowRight":
        currentTimeStr = this.getAttribute(
          MediaUIAttributes.MEDIA_CURRENT_TIME
        );
        currentTime = currentTimeStr && !Number.isNaN(+currentTimeStr) ? +currentTimeStr : DEFAULT_TIME;
        detail = Math.max(currentTime + seekOffset, 0);
        evt = new globalThis.CustomEvent(MediaUIEvents.MEDIA_SEEK_REQUEST, {
          composed: true,
          bubbles: true,
          detail
        });
        this.dispatchEvent(evt);
        break;
      default:
        break;
    }
  }
}
_hotKeys = new WeakMap();
_fullscreenElement = new WeakMap();
_keyUpHandler = new WeakSet();
keyUpHandler_fn = function(e) {
  const { key } = e;
  if (!ButtonPressedKeys.includes(key)) {
    this.removeEventListener("keyup", __privateMethod(this, _keyUpHandler, keyUpHandler_fn));
    return;
  }
  this.keyboardShortcutHandler(e);
};
_keyDownHandler = new WeakSet();
keyDownHandler_fn = function(e) {
  const { metaKey, altKey, key } = e;
  if (metaKey || altKey || !ButtonPressedKeys.includes(key)) {
    this.removeEventListener("keyup", __privateMethod(this, _keyUpHandler, keyUpHandler_fn));
    return;
  }
  if ([" ", "ArrowLeft", "ArrowRight"].includes(key) && !(__privateGet(this, _hotKeys).contains(`no${key.toLowerCase()}`) || key === " " && __privateGet(this, _hotKeys).contains("nospace"))) {
    e.preventDefault();
  }
  this.addEventListener("keyup", __privateMethod(this, _keyUpHandler, keyUpHandler_fn), { once: true });
};
const MEDIA_UI_ATTRIBUTE_NAMES = Object.values(MediaUIAttributes);
const MEDIA_UI_PROP_NAMES = Object.values(MediaUIProps);
const getMediaUIAttributesFrom = (child) => {
  var _a, _b, _c, _d;
  let { observedAttributes } = child.constructor;
  if (!observedAttributes && ((_a = child.nodeName) == null ? void 0 : _a.includes("-"))) {
    globalThis.customElements.upgrade(child);
    ({ observedAttributes } = child.constructor);
  }
  const mediaChromeAttributesList = (_d = (_c = (_b = child == null ? void 0 : child.getAttribute) == null ? void 0 : _b.call(child, MediaStateReceiverAttributes.MEDIA_CHROME_ATTRIBUTES)) == null ? void 0 : _c.split) == null ? void 0 : _d.call(_c, /\s+/);
  if (!Array.isArray(observedAttributes || mediaChromeAttributesList))
    return [];
  return (observedAttributes || mediaChromeAttributesList).filter(
    (attrName) => MEDIA_UI_ATTRIBUTE_NAMES.includes(attrName)
  );
};
const hasMediaUIProps = (mediaStateReceiverCandidate) => {
  var _a, _b;
  if (((_a = mediaStateReceiverCandidate.nodeName) == null ? void 0 : _a.includes("-")) && !!globalThis.customElements.get((_b = mediaStateReceiverCandidate.nodeName) == null ? void 0 : _b.toLowerCase()) && !(mediaStateReceiverCandidate instanceof globalThis.customElements.get(mediaStateReceiverCandidate.nodeName.toLowerCase()))) {
    globalThis.customElements.upgrade(mediaStateReceiverCandidate);
  }
  return MEDIA_UI_PROP_NAMES.some((propName) => propName in mediaStateReceiverCandidate);
};
const isMediaStateReceiver = (child) => {
  return hasMediaUIProps(child) || !!getMediaUIAttributesFrom(child).length;
};
const serializeTuple = (tuple) => {
  var _a;
  return (_a = tuple == null ? void 0 : tuple.join) == null ? void 0 : _a.call(tuple, ":");
};
const CustomAttrSerializer = {
  [MediaUIAttributes.MEDIA_SUBTITLES_LIST]: stringifyTextTrackList,
  [MediaUIAttributes.MEDIA_SUBTITLES_SHOWING]: stringifyTextTrackList,
  [MediaUIAttributes.MEDIA_SEEKABLE]: serializeTuple,
  [MediaUIAttributes.MEDIA_BUFFERED]: (tuples) => tuples == null ? void 0 : tuples.map(serializeTuple).join(" "),
  [MediaUIAttributes.MEDIA_PREVIEW_COORDS]: (coords) => coords == null ? void 0 : coords.join(" ")
};
const setAttr = async (child, attrName, attrValue) => {
  var _a, _b;
  if (!child.isConnected) {
    await delay(0);
  }
  if (typeof attrValue === "boolean" || attrValue == null) {
    return setBooleanAttr(child, attrName, attrValue);
  }
  if (typeof attrValue === "number") {
    return setNumericAttr(child, attrName, attrValue);
  }
  if (typeof attrValue === "string") {
    return setStringAttr(child, attrName, attrValue);
  }
  if (Array.isArray(attrValue) && !attrValue.length) {
    return child.removeAttribute(attrName);
  }
  const val = (_b = (_a = CustomAttrSerializer[attrName]) == null ? void 0 : _a.call(CustomAttrSerializer, attrValue)) != null ? _b : attrValue;
  return child.setAttribute(attrName, val);
};
const isMediaSlotElementDescendant = (el) => {
  var _a;
  return !!((_a = el.closest) == null ? void 0 : _a.call(el, '*[slot="media"]'));
};
const traverseForMediaStateReceivers = (rootNode, mediaStateReceiverCallback) => {
  if (isMediaSlotElementDescendant(rootNode)) {
    return;
  }
  const traverseForMediaStateReceiversSync = (rootNode2, mediaStateReceiverCallback2) => {
    var _a, _b;
    if (isMediaStateReceiver(rootNode2)) {
      mediaStateReceiverCallback2(rootNode2);
    }
    const { children = [] } = rootNode2 != null ? rootNode2 : {};
    const shadowChildren = (_b = (_a = rootNode2 == null ? void 0 : rootNode2.shadowRoot) == null ? void 0 : _a.children) != null ? _b : [];
    const allChildren = [...children, ...shadowChildren];
    allChildren.forEach(
      (child) => traverseForMediaStateReceivers(child, mediaStateReceiverCallback2)
    );
  };
  const name = rootNode == null ? void 0 : rootNode.nodeName.toLowerCase();
  if (name.includes("-") && !isMediaStateReceiver(rootNode)) {
    globalThis.customElements.whenDefined(name).then(() => {
      traverseForMediaStateReceiversSync(rootNode, mediaStateReceiverCallback);
    });
    return;
  }
  traverseForMediaStateReceiversSync(rootNode, mediaStateReceiverCallback);
};
const propagateMediaState = (els, stateName, val) => {
  els.forEach((el) => {
    if (stateName in el) {
      el[stateName] = val;
      return;
    }
    const relevantAttrs = getMediaUIAttributesFrom(el);
    const attrName = stateName.toLowerCase();
    if (!relevantAttrs.includes(attrName))
      return;
    setAttr(el, attrName, val);
  });
};
const monitorForMediaStateReceivers = (rootNode, registerMediaStateReceiver, unregisterMediaStateReceiver) => {
  traverseForMediaStateReceivers(rootNode, registerMediaStateReceiver);
  const registerMediaStateReceiverHandler = (evt) => {
    var _a;
    const el = (_a = evt == null ? void 0 : evt.composedPath()[0]) != null ? _a : evt.target;
    registerMediaStateReceiver(el);
  };
  const unregisterMediaStateReceiverHandler = (evt) => {
    var _a;
    const el = (_a = evt == null ? void 0 : evt.composedPath()[0]) != null ? _a : evt.target;
    unregisterMediaStateReceiver(el);
  };
  rootNode.addEventListener(
    MediaUIEvents.REGISTER_MEDIA_STATE_RECEIVER,
    registerMediaStateReceiverHandler
  );
  rootNode.addEventListener(
    MediaUIEvents.UNREGISTER_MEDIA_STATE_RECEIVER,
    unregisterMediaStateReceiverHandler
  );
  const mutationCallback = (mutationsList) => {
    mutationsList.forEach((mutationRecord) => {
      const {
        addedNodes = [],
        removedNodes = [],
        type,
        target,
        attributeName
      } = mutationRecord;
      if (type === "childList") {
        Array.prototype.forEach.call(
          addedNodes,
          (node) => traverseForMediaStateReceivers(node, registerMediaStateReceiver)
        );
        Array.prototype.forEach.call(
          removedNodes,
          (node) => traverseForMediaStateReceivers(node, unregisterMediaStateReceiver)
        );
      } else if (type === "attributes" && attributeName === MediaStateReceiverAttributes.MEDIA_CHROME_ATTRIBUTES) {
        if (isMediaStateReceiver(target)) {
          registerMediaStateReceiver(target);
        } else {
          unregisterMediaStateReceiver(target);
        }
      }
    });
  };
  let prevSlotted = [];
  const slotChangeHandler = (event) => {
    const slotEl = event.target;
    if (slotEl.name === "media")
      return;
    prevSlotted.forEach(
      (node) => traverseForMediaStateReceivers(node, unregisterMediaStateReceiver)
    );
    prevSlotted = [...slotEl.assignedElements({ flatten: true })];
    prevSlotted.forEach(
      (node) => traverseForMediaStateReceivers(node, registerMediaStateReceiver)
    );
  };
  rootNode.addEventListener("slotchange", slotChangeHandler);
  const observer = new MutationObserver(mutationCallback);
  observer.observe(rootNode, {
    childList: true,
    attributes: true,
    subtree: true
  });
  const unsubscribe = () => {
    traverseForMediaStateReceivers(rootNode, unregisterMediaStateReceiver);
    rootNode.removeEventListener("slotchange", slotChangeHandler);
    observer.disconnect();
    rootNode.removeEventListener(
      MediaUIEvents.REGISTER_MEDIA_STATE_RECEIVER,
      registerMediaStateReceiverHandler
    );
    rootNode.removeEventListener(
      MediaUIEvents.UNREGISTER_MEDIA_STATE_RECEIVER,
      unregisterMediaStateReceiverHandler
    );
  };
  return unsubscribe;
};
if (!globalThis.customElements.get("media-controller")) {
  globalThis.customElements.define("media-controller", MediaController);
}
var media_controller_default = MediaController;
export {
  Attributes,
  media_controller_default as default
};
