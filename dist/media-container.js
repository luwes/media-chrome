import { globalThis, document } from "./utils/server-safe-globals.js";
import {
  MediaUIEvents,
  MediaUIAttributes,
  MediaStateChangeEvents
} from "./constants.js";
import { nouns } from "./labels/labels.js";
import "./media-gesture-receiver.js";
const Attributes = {
  AUDIO: "audio",
  AUTOHIDE: "autohide",
  BREAKPOINTS: "breakpoints",
  GESTURES_DISABLED: "gesturesdisabled",
  KEYBOARD_CONTROL: "keyboardcontrol",
  NO_AUTOHIDE: "noautohide",
  USER_INACTIVE: "userinactive"
};
const template = document.createElement("template");
template.innerHTML = `
  <style>
    ${""}
    :host([${MediaUIAttributes.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
      outline: none;
    }

    :host {
      box-sizing: border-box;
      position: relative;
      display: inline-block;
      line-height: 0;
      background-color: var(--media-background-color, #000);
    }

    :host(:not([${Attributes.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: flex;
      flex-flow: column nowrap;
      align-items: start;
      pointer-events: none;
      background: none;
    }

    slot[name=media] {
      display: var(--media-slot-display, contents);
    }

    ${""}
    :host([${Attributes.AUDIO}]) slot[name=media] {
      display: var(--media-slot-display, none);
    }

    ${""}
    :host([${Attributes.AUDIO}]) [part~=layer][part~=gesture-layer] {
      height: 0;
      display: block;
    }

    ${""}
    :host(:not([${Attributes.AUDIO}])[${Attributes.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
    :host(:not([${Attributes.AUDIO}])[${Attributes.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
      display: none;
    }

    ${""}
    ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator)) {
      pointer-events: auto;
    }

    :host(:not([${Attributes.AUDIO}])) *[part~=layer][part~=centered-layer] {
      align-items: center;
      justify-content: center;
    }

    :host(:not([${Attributes.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
    :host(:not([${Attributes.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
      align-self: stretch;
      flex-grow: 1;
    }

    slot[name=middle-chrome] {
      display: inline;
      flex-grow: 1;
      pointer-events: none;
      background: none;
    }

    ${""}
    ::slotted([slot=media]),
    ::slotted([slot=poster]) {
      width: 100%;
      height: 100%;
    }

    ${""}
    :host(:not([${Attributes.AUDIO}])) .spacer {
      flex-grow: 1;
    }

    ${""}
    :host(:-webkit-full-screen) {
      ${""}
      width: 100% !important;
      height: 100% !important;
    }

    ${""}
    ::slotted(:not([slot=media]):not([${Attributes.NO_AUTOHIDE}])) {
      opacity: 1;
      transition: opacity 0.25s;
    }

    ${""}
    :host([${Attributes.USER_INACTIVE}]:not([${MediaUIAttributes.MEDIA_PAUSED}]):not([${MediaUIAttributes.MEDIA_IS_CASTING}]):not([${Attributes.AUDIO}])) ::slotted(:not([slot=media]):not([${Attributes.NO_AUTOHIDE}])) {
      opacity: 0;
      transition: opacity 1s;
    }

    ::slotted(media-control-bar)  {
      align-self: stretch;
    }

    :host([${MediaUIAttributes.MEDIA_HAS_PLAYED}]) ::slotted([slot=poster]) {
      display: none;
    }
  </style>

  <slot name="media" part="layer media-layer"></slot>
  <slot name="poster" part="layer poster-layer"></slot>
  <slot name="gestures-chrome" part="layer gesture-layer">
    <media-gesture-receiver slot="gestures-chrome"></media-gesture-receiver>
  </slot>
  <span part="layer vertical-layer">
    <slot name="top-chrome" part="top chrome"></slot>
    <slot name="middle-chrome" part="middle chrome"></slot>
    <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
    ${""}
    <slot part="bottom chrome"></slot>
  </span>
`;
const MEDIA_UI_ATTRIBUTE_NAMES = Object.values(MediaUIAttributes);
const defaultBreakpoints = "sm:384 md:576 lg:768 xl:960";
const resizeCallback = (entries) => {
  var _a;
  for (const entry of entries) {
    const container = entry.target;
    if (!container.isConnected)
      continue;
    const breakpoints = (_a = container.getAttribute(Attributes.BREAKPOINTS)) != null ? _a : defaultBreakpoints;
    const ranges = createBreakpointMap(breakpoints);
    const activeBreakpoints = getBreakpoints(ranges, entry.contentRect);
    let changed = false;
    Object.keys(ranges).forEach((name) => {
      if (activeBreakpoints.includes(name)) {
        if (!container.hasAttribute(`breakpoint${name}`)) {
          container.setAttribute(`breakpoint${name}`, "");
          changed = true;
        }
        return;
      }
      if (container.hasAttribute(`breakpoint${name}`)) {
        container.removeAttribute(`breakpoint${name}`);
        changed = true;
      }
    });
    if (changed) {
      const evt = new CustomEvent(MediaStateChangeEvents.BREAKPOINTS_CHANGE, {
        detail: activeBreakpoints
      });
      container.dispatchEvent(evt);
    }
  }
};
function createBreakpointMap(breakpoints) {
  const pairs = breakpoints.split(/\s+/);
  return Object.fromEntries(pairs.map((pair) => pair.split(":")));
}
function getBreakpoints(breakpoints, rect) {
  return Object.keys(breakpoints).filter((name) => {
    return rect.width >= breakpoints[name];
  });
}
class MediaContainer extends globalThis.HTMLElement {
  constructor() {
    super();
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    const mutationCallback = (mutationsList) => {
      const media = this.media;
      for (let mutation of mutationsList) {
        if (mutation.type === "childList") {
          mutation.removedNodes.forEach((node) => {
            if (node.slot == "media" && mutation.target == this) {
              let previousSibling = mutation.previousSibling && mutation.previousSibling.previousElementSibling;
              if (!previousSibling || !media) {
                this.mediaUnsetCallback(node);
              } else {
                let wasFirst = previousSibling.slot !== "media";
                while ((previousSibling = previousSibling.previousSibling) !== null) {
                  if (previousSibling.slot == "media")
                    wasFirst = false;
                }
                if (wasFirst)
                  this.mediaUnsetCallback(node);
              }
            }
          });
          if (media) {
            mutation.addedNodes.forEach((node) => {
              if (node == media) {
                this.handleMediaUpdated(media).then(
                  (media2) => this.mediaSetCallback(media2)
                );
              }
            });
          }
        }
      }
    };
    const mutationObserver = new MutationObserver(mutationCallback);
    mutationObserver.observe(this, { childList: true, subtree: true });
    let pendingResizeCb = false;
    const deferResizeCallback = (entries) => {
      if (pendingResizeCb)
        return;
      globalThis.queueMicrotask(() => {
        resizeCallback(entries);
        pendingResizeCb = false;
      });
      pendingResizeCb = true;
    };
    const resizeObserver = new ResizeObserver(deferResizeCallback);
    this.resizeObserver = resizeObserver;
    resizeObserver.observe(this);
    let currentMedia = this.media;
    let chainedSlot = this.querySelector(":scope > slot[slot=media]");
    if (chainedSlot) {
      chainedSlot.addEventListener("slotchange", () => {
        const slotEls = chainedSlot.assignedElements({ flatten: true });
        if (!slotEls.length) {
          this.mediaUnsetCallback(currentMedia);
          return;
        }
        if (this.media) {
          currentMedia = this.media;
          this.handleMediaUpdated(this.media).then(
            (media) => this.mediaSetCallback(media)
          );
        }
      });
    }
  }
  static get observedAttributes() {
    return [Attributes.AUTOHIDE, Attributes.GESTURES_DISABLED].concat(
      MEDIA_UI_ATTRIBUTE_NAMES
    );
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName.toLowerCase() == Attributes.AUTOHIDE) {
      this.autohide = newValue;
    }
  }
  get media() {
    let media = this.querySelector(":scope > [slot=media]");
    if ((media == null ? void 0 : media.nodeName) == "SLOT")
      media = media.assignedElements({ flatten: true })[0];
    return media;
  }
  mediaSetCallback(media) {
    this._mediaClickPlayToggle = () => {
      const eventName = media.paused ? MediaUIEvents.MEDIA_PLAY_REQUEST : MediaUIEvents.MEDIA_PAUSE_REQUEST;
      this.dispatchEvent(
        new globalThis.CustomEvent(eventName, { composed: true, bubbles: true })
      );
    };
  }
  handleMediaUpdated(media) {
    const resolveMediaPromise = (media2) => {
      return Promise.resolve(media2);
    };
    const rejectMediaPromise = (media2) => {
      console.error(
        '<media-chrome>: Media element set with slot="media" does not appear to be compatible.',
        media2
      );
      return Promise.reject(media2);
    };
    if (!media) {
      return rejectMediaPromise(media);
    }
    const mediaName = media.nodeName.toLowerCase();
    if (mediaName.includes("-")) {
      return globalThis.customElements.whenDefined(mediaName).then(() => {
        return resolveMediaPromise(media);
      });
    }
    return resolveMediaPromise(media);
  }
  mediaUnsetCallback(node) {
  }
  connectedCallback() {
    var _a;
    const isAudioChrome = this.getAttribute(Attributes.AUDIO) != null;
    const label = isAudioChrome ? nouns.AUDIO_PLAYER() : nouns.VIDEO_PLAYER();
    this.setAttribute("role", "region");
    this.setAttribute("aria-label", label);
    if (this.media) {
      this.handleMediaUpdated(this.media).then(
        (media) => this.mediaSetCallback(media)
      );
    }
    this.setAttribute(Attributes.USER_INACTIVE, "");
    const setInactive = () => {
      if (this.autohide < 0)
        return;
      if (this.hasAttribute(Attributes.USER_INACTIVE))
        return;
      this.setAttribute(Attributes.USER_INACTIVE, "");
      const evt = new globalThis.CustomEvent(
        MediaStateChangeEvents.USER_INACTIVE,
        { composed: true, bubbles: true, detail: true }
      );
      this.dispatchEvent(evt);
    };
    const setActive = () => {
      if (!this.hasAttribute(Attributes.USER_INACTIVE))
        return;
      this.removeAttribute(Attributes.USER_INACTIVE);
      const evt = new globalThis.CustomEvent(
        MediaStateChangeEvents.USER_INACTIVE,
        { composed: true, bubbles: true, detail: false }
      );
      this.dispatchEvent(evt);
    };
    const scheduleInactive = () => {
      setActive();
      globalThis.clearTimeout(this._inactiveTimeout);
      if (this.autohide < 0)
        return;
      this._inactiveTimeout = globalThis.setTimeout(() => {
        setInactive();
      }, this.autohide * 1e3);
    };
    this.addEventListener("keyup", () => {
      scheduleInactive();
    });
    this.addEventListener("pointerup", (e) => {
      if (e.pointerType === "touch") {
        if ([this, this.media].includes(e.target) && !this.hasAttribute(Attributes.USER_INACTIVE)) {
          setInactive();
        } else {
          scheduleInactive();
        }
      } else if (e.composedPath().some(
        (el) => {
          var _a2;
          return ["media-play-button", "media-fullscreen-button"].includes(
            (_a2 = el == null ? void 0 : el.nodeName) == null ? void 0 : _a2.toLowerCase()
          );
        }
      )) {
        scheduleInactive();
      }
    });
    this.addEventListener("pointermove", (e) => {
      if (e.pointerType !== "mouse")
        return;
      setActive();
      globalThis.clearTimeout(this._inactiveTimeout);
      if ([this, this.media].includes(e.target)) {
        scheduleInactive();
      }
    });
    this.addEventListener("mouseleave", () => {
      setInactive();
    });
    this.addEventListener("keyup", () => {
      this.setAttribute(Attributes.KEYBOARD_CONTROL, "");
    });
    (_a = globalThis.window) == null ? void 0 : _a.addEventListener("mouseup", () => {
      this.removeAttribute(Attributes.KEYBOARD_CONTROL);
    });
  }
  set autohide(seconds) {
    seconds = Number(seconds);
    this._autohide = isNaN(seconds) ? 0 : seconds;
  }
  get autohide() {
    return this._autohide === void 0 ? 2 : this._autohide;
  }
}
var media_container_default = MediaContainer;
export {
  Attributes,
  MediaContainer,
  media_container_default as default
};
