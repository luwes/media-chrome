var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var media_chrome_listitem_exports = {};
__export(media_chrome_listitem_exports, {
  Attributes: () => Attributes,
  default: () => media_chrome_listitem_default
});
module.exports = __toCommonJS(media_chrome_listitem_exports);
var import_constants = require("../constants.js");
var import_server_safe_globals = require("../utils/server-safe-globals.js");
const template = import_server_safe_globals.document.createElement("template");
template.innerHTML = `
<style>
  :host {
    display: list-item;
    line-height: 1em;
    padding: 0.5em;
    margin: 0em;
    cursor: pointer;
  }

  ::slotted:not(:focus-visible) {
    outline: none;
  }
</style>
<li>
  <slot></slot>
</li>
`;
const Attributes = {
  VALUE: "value"
};
class MediaChromeListitem extends import_server_safe_globals.globalThis.HTMLElement {
  static get observedAttributes() {
    return [
      "disabled",
      "aria-selected",
      Attributes.VALUE,
      import_constants.MediaStateReceiverAttributes.MEDIA_CONTROLLER
    ];
  }
  constructor() {
    super();
    if (!this.shadowRoot) {
      const shadow = this.attachShadow({ mode: "open" });
      const listitemHTML = template.content.cloneNode(true);
      this.nativeEl = listitemHTML;
      shadow.appendChild(listitemHTML);
    }
  }
  set value(value) {
    this.setAttribute(Attributes.VALUE, value);
  }
  get value() {
    return this.getAttribute(Attributes.VALUE);
  }
  enable() {
    if (!this.hasAttribute("tabindex")) {
      this.setAttribute("tabindex", -1);
    }
    if (!this.hasAttribute("aria-selected")) {
      this.setAttribute("aria-selected", "false");
    }
  }
  disable() {
    this.removeAttribute("tabindex");
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    var _a, _b;
    if (attrName === import_constants.MediaStateReceiverAttributes.MEDIA_CONTROLLER) {
      if (oldValue) {
        const mediaControllerEl = import_server_safe_globals.document.getElementById(oldValue);
        (_a = mediaControllerEl == null ? void 0 : mediaControllerEl.unassociateElement) == null ? void 0 : _a.call(mediaControllerEl, this);
      }
      if (newValue) {
        const mediaControllerEl = import_server_safe_globals.document.getElementById(newValue);
        (_b = mediaControllerEl == null ? void 0 : mediaControllerEl.associateElement) == null ? void 0 : _b.call(mediaControllerEl, this);
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
    var _a;
    if (!this.hasAttribute("disabled")) {
      this.enable();
    }
    this.setAttribute("role", "option");
    const mediaControllerId = this.getAttribute(
      import_constants.MediaStateReceiverAttributes.MEDIA_CONTROLLER
    );
    if (mediaControllerId) {
      const mediaControllerEl = import_server_safe_globals.document.getElementById(mediaControllerId);
      (_a = mediaControllerEl == null ? void 0 : mediaControllerEl.associateElement) == null ? void 0 : _a.call(mediaControllerEl, this);
    }
  }
  disconnectedCallback() {
    var _a;
    this.disable();
    const mediaControllerId = this.getAttribute(
      import_constants.MediaStateReceiverAttributes.MEDIA_CONTROLLER
    );
    if (mediaControllerId) {
      const mediaControllerEl = import_server_safe_globals.document.getElementById(mediaControllerId);
      (_a = mediaControllerEl == null ? void 0 : mediaControllerEl.unassociateElement) == null ? void 0 : _a.call(mediaControllerEl, this);
    }
  }
  handleClick() {
  }
}
if (!import_server_safe_globals.globalThis.customElements.get("media-chrome-listitem")) {
  import_server_safe_globals.globalThis.customElements.define("media-chrome-listitem", MediaChromeListitem);
}
var media_chrome_listitem_default = MediaChromeListitem;
