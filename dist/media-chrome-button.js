var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
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
var _mediaController, _clickListener, _keyupListener, _keydownListener;
import { MediaStateReceiverAttributes } from "./constants.js";
import { getOrInsertCSSRule } from "./utils/element-utils.js";
import { globalThis, document } from "./utils/server-safe-globals.js";
const template = document.createElement("template");
template.innerHTML = `
<style>
  :host {
    font: var(--media-font,
      var(--media-font-weight, bold)
      var(--media-font-size, 14px) /
      var(--media-text-content-height, var(--media-control-height, 24px))
      var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
    color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
    background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
    padding: var(--media-control-padding, 10px);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    box-sizing: border-box;
    transition: background .15s linear;
    pointer-events: auto;
    cursor: pointer;
  }

  ${""}
  :host(:focus-visible) {
    box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
    outline: 0;
  }
  ${""}
  :host(:where(:focus)) {
    box-shadow: none;
    outline: 0;
  }

  :host(:hover) {
    background: var(--media-control-hover-background, rgba(50 50 70 / .7));
  }

  svg, img, ::slotted(svg), ::slotted(img) {
    width: var(--media-button-icon-width);
    height: var(--media-button-icon-height, var(--media-control-height, 24px));
    transform: var(--media-button-icon-transform);
    transition: var(--media-button-icon-transition);
    fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
    vertical-align: middle;
    max-width: 100%;
    max-height: 100%;
    min-width: 100%;
  }
</style>
`;
class MediaChromeButton extends globalThis.HTMLElement {
  constructor(options = {}) {
    super();
    __privateAdd(this, _mediaController, void 0);
    __publicField(this, "preventClick", false);
    __privateAdd(this, _clickListener, (e) => {
      if (!this.preventClick) {
        this.handleClick(e);
      }
    });
    __privateAdd(this, _keyupListener, (e) => {
      const { key } = e;
      if (!this.keysUsed.includes(key)) {
        this.removeEventListener("keyup", __privateGet(this, _keyupListener));
        return;
      }
      if (!this.preventClick) {
        this.handleClick(e);
      }
    });
    __privateAdd(this, _keydownListener, (e) => {
      const { metaKey, altKey, key } = e;
      if (metaKey || altKey || !this.keysUsed.includes(key)) {
        this.removeEventListener("keyup", __privateGet(this, _keyupListener));
        return;
      }
      this.addEventListener("keyup", __privateGet(this, _keyupListener), { once: true });
    });
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
      const buttonHTML = template.content.cloneNode(true);
      this.nativeEl = buttonHTML;
      let slotTemplate = options.slotTemplate;
      if (!slotTemplate) {
        slotTemplate = document.createElement("template");
        slotTemplate.innerHTML = `<slot>${options.defaultContent || ""}</slot>`;
      }
      this.nativeEl.appendChild(slotTemplate.content.cloneNode(true));
      this.shadowRoot.appendChild(buttonHTML);
    }
    const { style } = getOrInsertCSSRule(this.shadowRoot, ":host");
    style.setProperty("display", `var(--media-control-display, var(--${this.localName}-display, inline-flex))`);
  }
  static get observedAttributes() {
    return ["disabled", MediaStateReceiverAttributes.MEDIA_CONTROLLER];
  }
  enable() {
    this.addEventListener("click", __privateGet(this, _clickListener));
    this.addEventListener("keydown", __privateGet(this, _keydownListener));
    this.tabIndex = 0;
  }
  disable() {
    this.removeEventListener("click", __privateGet(this, _clickListener));
    this.removeEventListener("keydown", __privateGet(this, _keydownListener));
    this.removeEventListener("keyup", __privateGet(this, _keyupListener));
    this.tabIndex = -1;
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    var _a, _b, _c, _d, _e;
    if (attrName === MediaStateReceiverAttributes.MEDIA_CONTROLLER) {
      if (oldValue) {
        (_b = (_a = __privateGet(this, _mediaController)) == null ? void 0 : _a.unassociateElement) == null ? void 0 : _b.call(_a, this);
        __privateSet(this, _mediaController, null);
      }
      if (newValue) {
        __privateSet(this, _mediaController, (_c = this.getRootNode()) == null ? void 0 : _c.getElementById(newValue));
        (_e = (_d = __privateGet(this, _mediaController)) == null ? void 0 : _d.associateElement) == null ? void 0 : _e.call(_d, this);
      }
    } else if (attrName === "disabled" && newValue !== oldValue) {
      if (newValue == null) {
        this.enable();
      } else {
        this.disable();
      }
    }
  }
  connectedCallback() {
    var _a, _b, _c;
    if (!this.hasAttribute("disabled")) {
      this.enable();
    }
    this.setAttribute("role", "button");
    const mediaControllerId = this.getAttribute(
      MediaStateReceiverAttributes.MEDIA_CONTROLLER
    );
    if (mediaControllerId) {
      __privateSet(this, _mediaController, (_a = this.getRootNode()) == null ? void 0 : _a.getElementById(mediaControllerId));
      (_c = (_b = __privateGet(this, _mediaController)) == null ? void 0 : _b.associateElement) == null ? void 0 : _c.call(_b, this);
    }
  }
  disconnectedCallback() {
    var _a, _b;
    this.disable();
    (_b = (_a = __privateGet(this, _mediaController)) == null ? void 0 : _a.unassociateElement) == null ? void 0 : _b.call(_a, this);
    __privateSet(this, _mediaController, null);
  }
  get keysUsed() {
    return ["Enter", " "];
  }
  handleClick(e) {
  }
}
_mediaController = new WeakMap();
_clickListener = new WeakMap();
_keyupListener = new WeakMap();
_keydownListener = new WeakMap();
if (!globalThis.customElements.get("media-chrome-button")) {
  globalThis.customElements.define("media-chrome-button", MediaChromeButton);
}
var media_chrome_button_default = MediaChromeButton;
export {
  MediaChromeButton,
  media_chrome_button_default as default
};
