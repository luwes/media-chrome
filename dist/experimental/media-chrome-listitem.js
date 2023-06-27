import { MediaStateReceiverAttributes } from "../constants.js";
import { globalThis, document } from "../utils/server-safe-globals.js";
const template = document.createElement("template");
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
class MediaChromeListitem extends globalThis.HTMLElement {
  static get observedAttributes() {
    return [
      "disabled",
      "aria-selected",
      Attributes.VALUE,
      MediaStateReceiverAttributes.MEDIA_CONTROLLER
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
    if (attrName === MediaStateReceiverAttributes.MEDIA_CONTROLLER) {
      if (oldValue) {
        const mediaControllerEl = document.getElementById(oldValue);
        (_a = mediaControllerEl == null ? void 0 : mediaControllerEl.unassociateElement) == null ? void 0 : _a.call(mediaControllerEl, this);
      }
      if (newValue) {
        const mediaControllerEl = document.getElementById(newValue);
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
      MediaStateReceiverAttributes.MEDIA_CONTROLLER
    );
    if (mediaControllerId) {
      const mediaControllerEl = document.getElementById(mediaControllerId);
      (_a = mediaControllerEl == null ? void 0 : mediaControllerEl.associateElement) == null ? void 0 : _a.call(mediaControllerEl, this);
    }
  }
  disconnectedCallback() {
    var _a;
    this.disable();
    const mediaControllerId = this.getAttribute(
      MediaStateReceiverAttributes.MEDIA_CONTROLLER
    );
    if (mediaControllerId) {
      const mediaControllerEl = document.getElementById(mediaControllerId);
      (_a = mediaControllerEl == null ? void 0 : mediaControllerEl.unassociateElement) == null ? void 0 : _a.call(mediaControllerEl, this);
    }
  }
  handleClick() {
  }
}
if (!globalThis.customElements.get("media-chrome-listitem")) {
  globalThis.customElements.define("media-chrome-listitem", MediaChromeListitem);
}
var media_chrome_listitem_default = MediaChromeListitem;
export {
  Attributes,
  media_chrome_listitem_default as default
};
