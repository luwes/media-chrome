var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
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
var media_captions_listbox_exports = {};
__export(media_captions_listbox_exports, {
  default: () => media_captions_listbox_default
});
module.exports = __toCommonJS(media_captions_listbox_exports);
var import_media_chrome_listbox = __toESM(require("./media-chrome-listbox.js"), 1);
var import_media_chrome_listitem = require("./media-chrome-listitem.js");
var import_server_safe_globals = require("../utils/server-safe-globals.js");
var import_constants = require("../constants.js");
var import_captions = require("../utils/captions.js");
var import_captions2 = require("../utils/captions.js");
var _subs, _offOption, _captionsIndicator, _perTypeUpdate, perTypeUpdate_fn, _renderTracks, renderTracks_fn, _render, render_fn, _onChange, onChange_fn;
const captionsIndicatorInlineStyle = `
  fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
  height: var(--media-captions-indicator-height, 1em);
  vertical-align: var(--media-captions-indicator-vertical-align, bottom);
  margin-inline-start: 1ch;
`;
const ccIcon = `
<svg style="${captionsIndicatorInlineStyle}" aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`;
const slotTemplate = import_server_safe_globals.document.createElement("template");
slotTemplate.innerHTML = `
  <style>
    media-chrome-listitem {
      white-space: var(--media-captions-listbox-white-space, nowrap);
    }
  </style>
  <slot hidden name="captions-indicator">${ccIcon}</slot>
`;
const compareTracks = (a, b) => {
  return a.label === b.label && a.language === b.language;
};
class MediaCaptionsListbox extends import_media_chrome_listbox.default {
  constructor() {
    super({ slotTemplate });
    __privateAdd(this, _perTypeUpdate);
    __privateAdd(this, _renderTracks);
    __privateAdd(this, _render);
    __privateAdd(this, _onChange);
    __privateAdd(this, _subs, []);
    __privateAdd(this, _offOption, void 0);
    __privateAdd(this, _captionsIndicator, void 0);
    const offOption = import_server_safe_globals.document.createElement("media-chrome-listitem");
    offOption.part.add("listitem");
    offOption.value = "off";
    offOption.textContent = "Off";
    __privateSet(this, _offOption, offOption);
    const captionsIndicatorSlot = this.shadowRoot.querySelector('[name="captions-indicator"]');
    __privateSet(this, _captionsIndicator, captionsIndicatorSlot.firstElementChild);
    captionsIndicatorSlot.addEventListener("slotchange", () => {
      let els = captionsIndicatorSlot.assignedElements();
      if (els.length === 1 && els[0].nodeName.toLowerCase() === "slot") {
        const assignedElements = els[0].assignedElements();
        if (assignedElements.length === 0) {
          __privateSet(this, _captionsIndicator, els[0].firstElementChild);
        } else if (assignedElements.length === 1) {
          __privateSet(this, _captionsIndicator, assignedElements[0]);
        }
      }
      if (!__privateGet(this, _captionsIndicator)) {
        __privateSet(this, _captionsIndicator, captionsIndicatorSlot.firstElementChild);
      }
      __privateSet(this, _captionsIndicator, __privateGet(this, _captionsIndicator).cloneNode(true));
      __privateGet(this, _captionsIndicator).removeAttribute("slot");
      __privateGet(this, _captionsIndicator).setAttribute("style", captionsIndicatorInlineStyle);
    });
  }
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      "aria-multiselectable",
      import_constants.MediaUIAttributes.MEDIA_SUBTITLES_LIST,
      import_constants.MediaUIAttributes.MEDIA_SUBTITLES_SHOWING
    ];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === import_constants.MediaUIAttributes.MEDIA_SUBTITLES_LIST && oldValue !== newValue) {
      __privateSet(this, _subs, __privateMethod(this, _perTypeUpdate, perTypeUpdate_fn).call(this, newValue, __privateGet(this, _subs)));
      __privateMethod(this, _render, render_fn).call(this);
    } else if (attrName === import_constants.MediaUIAttributes.MEDIA_SUBTITLES_SHOWING && oldValue !== newValue) {
      const selectedTrack = (0, import_captions.parseTextTracksStr)(newValue != null ? newValue : "")[0];
      __privateGet(this, _subs).forEach((track) => {
        track.selected = track.language === selectedTrack.language && track.label === selectedTrack.label;
      });
      __privateMethod(this, _render, render_fn).call(this);
    } else if (attrName === "aria-multiselectable") {
      this.removeAttribute("aria-multiselectable");
      console.warn("Captions List doesn't currently support multiple selections. You can enable multiple items via the media.textTrack API.");
    }
    super.attributeChangedCallback(attrName, oldValue, newValue);
  }
  connectedCallback() {
    __privateMethod(this, _render, render_fn).call(this);
    this.addEventListener("change", __privateMethod(this, _onChange, onChange_fn));
    super.connectedCallback();
  }
  disconnectedCallback() {
    this.removeEventListener("change", __privateMethod(this, _onChange, onChange_fn));
    super.disconnectedCallback();
  }
}
_subs = new WeakMap();
_offOption = new WeakMap();
_captionsIndicator = new WeakMap();
_perTypeUpdate = new WeakSet();
perTypeUpdate_fn = function(newValue, oldItems) {
  const newItems = newValue ? (0, import_captions.parseTextTracksStr)(newValue != null ? newValue : "") : [];
  const removedTracks = [];
  const newTracks = [];
  oldItems.forEach((track) => {
    if (!newItems.some((newTrack) => compareTracks(newTrack, track))) {
      removedTracks.push(track);
    }
  });
  newItems.forEach((track) => {
    if (!oldItems.some((newTrack) => compareTracks(newTrack, track))) {
      newTracks.push(track);
    }
  });
  removedTracks.forEach((track) => track.el.remove());
  return oldItems.filter((track) => !removedTracks.includes(track)).concat(newTracks);
};
_renderTracks = new WeakSet();
renderTracks_fn = function(tracks) {
  const container = this.shadowRoot.querySelector("ul slot");
  tracks.forEach((track) => {
    var _a;
    let option = track.el;
    let alreadyInDom = true;
    const type = (_a = track.kind) != null ? _a : "subs";
    if (!option) {
      option = import_server_safe_globals.document.createElement("media-chrome-listitem");
      alreadyInDom = false;
      option.part.add("listitem");
      option.value = (0, import_captions.formatTextTrackObj)(track);
      const label = import_server_safe_globals.document.createElement("span");
      label.textContent = track.label;
      option.append(label);
      if (type === "captions") {
        option.append(__privateGet(this, _captionsIndicator).cloneNode(true));
      }
    }
    if (track.selected) {
      option.setAttribute("aria-selected", "true");
    } else {
      option.setAttribute("aria-selected", "false");
    }
    if (!alreadyInDom) {
      container.append(option);
      track.el = option;
    }
  });
};
_render = new WeakSet();
render_fn = function() {
  const container = this.shadowRoot.querySelector("ul slot");
  if (!container.contains(__privateGet(this, _offOption))) {
    container.append(__privateGet(this, _offOption));
  }
  if (!this.hasAttribute(import_constants.MediaUIAttributes.MEDIA_SUBTITLES_SHOWING)) {
    __privateGet(this, _offOption).setAttribute("aria-selected", "true");
    __privateGet(this, _offOption).setAttribute("tabindex", "0");
  } else {
    __privateGet(this, _offOption).setAttribute("aria-selected", "false");
    __privateGet(this, _offOption).setAttribute("tabindex", "-1");
  }
  __privateMethod(this, _renderTracks, renderTracks_fn).call(this, __privateGet(this, _subs));
};
_onChange = new WeakSet();
onChange_fn = function() {
  var _a;
  const selectedOption = (_a = this.selectedOptions[0]) == null ? void 0 : _a.value;
  (0, import_captions2.toggleSubsCaps)(this, false);
  if (!selectedOption)
    return;
  const event = new import_server_safe_globals.globalThis.CustomEvent(
    import_constants.MediaUIEvents.MEDIA_SHOW_SUBTITLES_REQUEST,
    {
      composed: true,
      bubbles: true,
      detail: selectedOption
    }
  );
  this.dispatchEvent(event);
};
if (!import_server_safe_globals.globalThis.customElements.get("media-captions-listbox")) {
  import_server_safe_globals.globalThis.customElements.define("media-captions-listbox", MediaCaptionsListbox);
}
var media_captions_listbox_default = MediaCaptionsListbox;
