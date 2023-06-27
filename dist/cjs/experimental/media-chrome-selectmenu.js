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
var media_chrome_selectmenu_exports = {};
__export(media_chrome_selectmenu_exports, {
  default: () => media_chrome_selectmenu_default
});
module.exports = __toCommonJS(media_chrome_selectmenu_exports);
var import_media_chrome_button = require("../media-chrome-button.js");
var import_media_chrome_listbox = require("./media-chrome-listbox.js");
var import_server_safe_globals = require("../utils/server-safe-globals.js");
var import_element_utils = require("../utils/element-utils.js");
var import_constants = require("../constants.js");
var _handleClick, _handleChange, _enabledState, _button, _buttonSlot, _listbox, _listboxSlot, _expanded, _keyupListener, _keydownListener, _documentClickHandler, _handleClick_, handleClick__fn, _handleChange_, handleChange__fn, _toggle, toggle_fn, _updateMenuPosition, updateMenuPosition_fn, _toggleExpanded, toggleExpanded_fn;
const template = import_server_safe_globals.document.createElement("template");
template.innerHTML = `
  <style>
  :host {
    display: inline-flex;
    position: relative;
    flex-shrink: .5;
  }

  [name="listbox"]::slotted(*),
  [part=listbox] {
    position: absolute;
    left: 0;
    bottom: 100%;
    max-height: 300px;
    overflow: hidden auto;
  }
  </style>

  <slot name="button">
    <media-chrome-button aria-haspopup="listbox" part="button">
      <slot name="button-content"></slot>
    </media-chrome-button>
  </slot>
  <slot name="listbox" hidden>
    <media-chrome-listbox id="listbox" part="listbox">
      <slot></slot>
    </media-chrome-listbox>
  </slot>
`;
class MediaChromeSelectMenu extends import_server_safe_globals.globalThis.HTMLElement {
  constructor() {
    var _a;
    super();
    __privateAdd(this, _handleClick_);
    __privateAdd(this, _handleChange_);
    __privateAdd(this, _toggle);
    __privateAdd(this, _updateMenuPosition);
    __privateAdd(this, _toggleExpanded);
    __privateAdd(this, _handleClick, void 0);
    __privateAdd(this, _handleChange, void 0);
    __privateAdd(this, _enabledState, true);
    __privateAdd(this, _button, void 0);
    __privateAdd(this, _buttonSlot, void 0);
    __privateAdd(this, _listbox, void 0);
    __privateAdd(this, _listboxSlot, void 0);
    __privateAdd(this, _expanded, false);
    __privateAdd(this, _keyupListener, (e) => {
      const { key } = e;
      if (!this.keysUsed.includes(key)) {
        this.removeEventListener("keyup", __privateGet(this, _keyupListener));
        return;
      }
      const isButton = e.composedPath().includes(__privateGet(this, _button));
      if (isButton && (key === "Enter" || key === " ")) {
        __privateGet(this, _handleClick).call(this);
      } else if (key === "Escape" && !__privateGet(this, _listboxSlot).hidden) {
        __privateMethod(this, _toggle, toggle_fn).call(this);
      }
    });
    __privateAdd(this, _keydownListener, (e) => {
      const { metaKey, altKey, key } = e;
      if (metaKey || altKey || !this.keysUsed.includes(key)) {
        this.removeEventListener("keyup", __privateGet(this, _keyupListener));
        return;
      }
      e.preventDefault();
      this.addEventListener("keyup", __privateGet(this, _keyupListener), { once: true });
    });
    __privateAdd(this, _documentClickHandler, (e) => {
      if (e.composedPath().includes(this))
        return;
      if (!__privateGet(this, _listboxSlot).hidden) {
        __privateMethod(this, _toggle, toggle_fn).call(this);
      }
    });
    if (!this.shadowRoot) {
      const shadow = this.attachShadow({ mode: "open" });
      const buttonHTML = template.content.cloneNode(true);
      this.nativeEl = buttonHTML;
      shadow.appendChild(buttonHTML);
    }
    const { style } = (0, import_element_utils.getOrInsertCSSRule)(this.shadowRoot, ":host");
    style.setProperty("display", `var(--media-control-display, var(--${this.localName}-display, inline-flex))`);
    __privateSet(this, _handleClick, __privateMethod(this, _handleClick_, handleClick__fn).bind(this));
    __privateSet(this, _handleChange, __privateMethod(this, _handleChange_, handleChange__fn).bind(this));
    (_a = this.init) == null ? void 0 : _a.call(this);
    __privateSet(this, _button, this.shadowRoot.querySelector("[part=button]"));
    __privateSet(this, _listbox, this.shadowRoot.querySelector("[part=listbox]"));
    __privateSet(this, _buttonSlot, this.shadowRoot.querySelector("slot[name=button]"));
    __privateGet(this, _buttonSlot).addEventListener("slotchange", () => {
      const newButton = __privateGet(this, _buttonSlot).assignedElements()[0];
      if (!newButton)
        return;
      this.disable();
      __privateSet(this, _button, newButton);
      __privateGet(this, _button).preventClick = true;
      if (__privateGet(this, _button).hasAttribute("disabled")) {
        __privateSet(this, _enabledState, false);
      }
      if (__privateGet(this, _enabledState)) {
        this.enable();
        __privateGet(this, _button).setAttribute("aria-haspopup", "listbox");
      } else {
        this.disable();
      }
    });
    __privateSet(this, _listboxSlot, this.shadowRoot.querySelector("slot[name=listbox]"));
    __privateGet(this, _listboxSlot).addEventListener("slotchange", () => {
      this.disable();
      __privateSet(this, _listbox, __privateGet(this, _listboxSlot).assignedElements()[0] || __privateGet(this, _listbox));
      this.enable();
    });
  }
  static get observedAttributes() {
    return [
      "disabled",
      import_constants.MediaStateReceiverAttributes.MEDIA_CONTROLLER
    ];
  }
  enable() {
    __privateGet(this, _button).removeAttribute("disabled");
    __privateGet(this, _button).addEventListener("click", __privateGet(this, _handleClick));
    __privateGet(this, _button).addEventListener("keydown", __privateGet(this, _keydownListener));
    __privateGet(this, _listbox).addEventListener("keydown", __privateGet(this, _keydownListener));
    __privateMethod(this, _toggleExpanded, toggleExpanded_fn).call(this);
    __privateGet(this, _listbox).addEventListener("change", __privateGet(this, _handleChange));
    import_server_safe_globals.document.addEventListener("click", __privateGet(this, _documentClickHandler));
  }
  disable() {
    __privateGet(this, _button).setAttribute("disabled", "");
    __privateGet(this, _button).removeEventListener("click", __privateGet(this, _handleClick));
    __privateGet(this, _button).removeEventListener("keydown", __privateGet(this, _keydownListener));
    __privateGet(this, _button).removeEventListener("keyup", __privateGet(this, _keyupListener));
    __privateGet(this, _listbox).removeEventListener("keydown", __privateGet(this, _keydownListener));
    __privateGet(this, _listbox).removeEventListener("keyup", __privateGet(this, _keyupListener));
    __privateGet(this, _listbox).addEventListener("change", __privateGet(this, _handleChange));
    import_server_safe_globals.document.removeEventListener("click", __privateGet(this, _documentClickHandler));
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    var _a, _b;
    if (attrName === import_constants.MediaStateReceiverAttributes.MEDIA_CONTROLLER) {
      if (oldValue) {
        const mediaControllerEl = import_server_safe_globals.document.getElementById(oldValue);
        (_a = mediaControllerEl == null ? void 0 : mediaControllerEl.unassociateElement) == null ? void 0 : _a.call(mediaControllerEl, this);
        __privateGet(this, _listbox).removeAttribute(import_constants.MediaStateReceiverAttributes.MEDIA_CONTROLLER);
      }
      if (newValue) {
        const mediaControllerEl = import_server_safe_globals.document.getElementById(newValue);
        (_b = mediaControllerEl == null ? void 0 : mediaControllerEl.associateElement) == null ? void 0 : _b.call(mediaControllerEl, this);
        __privateGet(this, _listbox).setAttribute(import_constants.MediaStateReceiverAttributes.MEDIA_CONTROLLER, newValue);
      }
    } else if (attrName === "disabled" && newValue !== oldValue) {
      if (newValue == null) {
        __privateSet(this, _enabledState, true);
        this.enable();
      } else {
        __privateSet(this, _enabledState, false);
        this.disable();
      }
    }
  }
  connectedCallback() {
    var _a;
    if (!this.hasAttribute("disabled")) {
      this.enable();
    }
    const mediaControllerId = this.getAttribute(
      import_constants.MediaStateReceiverAttributes.MEDIA_CONTROLLER
    );
    if (mediaControllerId) {
      const mediaControllerEl = import_server_safe_globals.document.getElementById(mediaControllerId);
      (_a = mediaControllerEl == null ? void 0 : mediaControllerEl.associateElement) == null ? void 0 : _a.call(mediaControllerEl, this);
      __privateGet(this, _listbox).setAttribute(import_constants.MediaStateReceiverAttributes.MEDIA_CONTROLLER, mediaControllerId);
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
      __privateGet(this, _listbox).removeAttribute(import_constants.MediaStateReceiverAttributes.MEDIA_CONTROLLER);
    }
  }
  get keysUsed() {
    return ["Enter", "Escape", " ", "ArrowUp", "ArrowDown", "f", "c", "k", "m"];
  }
}
_handleClick = new WeakMap();
_handleChange = new WeakMap();
_enabledState = new WeakMap();
_button = new WeakMap();
_buttonSlot = new WeakMap();
_listbox = new WeakMap();
_listboxSlot = new WeakMap();
_expanded = new WeakMap();
_keyupListener = new WeakMap();
_keydownListener = new WeakMap();
_documentClickHandler = new WeakMap();
_handleClick_ = new WeakSet();
handleClick__fn = function() {
  __privateMethod(this, _toggle, toggle_fn).call(this);
};
_handleChange_ = new WeakSet();
handleChange__fn = function() {
  __privateMethod(this, _toggle, toggle_fn).call(this, true);
};
_toggle = new WeakSet();
toggle_fn = function(closeOnly) {
  __privateGet(this, _listboxSlot).hidden = !__privateGet(this, _listboxSlot).hidden || closeOnly;
  __privateMethod(this, _toggleExpanded, toggleExpanded_fn).call(this, closeOnly);
  if (!__privateGet(this, _listboxSlot).hidden) {
    __privateGet(this, _listbox).focus();
    __privateMethod(this, _updateMenuPosition, updateMenuPosition_fn).call(this);
  } else if (this.shadowRoot.activeElement === __privateGet(this, _listbox) || __privateGet(this, _listbox).contains(this.shadowRoot.activeElement)) {
    __privateGet(this, _button).focus();
  }
};
_updateMenuPosition = new WeakSet();
updateMenuPosition_fn = function() {
  var _a;
  if (__privateGet(this, _listbox).offsetWidth === 0)
    return;
  const buttonRect = __privateGet(this, _button).getBoundingClientRect();
  if (this.hasAttribute("mediacontroller") || __privateGet(this, _button).hasAttribute("mediacontroller") || __privateGet(this, _listbox).hasAttribute("mediacontroller")) {
    __privateGet(this, _listbox).style.zIndex = "1";
    __privateGet(this, _listbox).style.bottom = "unset";
    __privateGet(this, _listbox).style.top = buttonRect.height + "px";
    return;
  }
  const bounds = (_a = this.getAttribute("bounds") ? (0, import_element_utils.closestComposedNode)(this, `#${this.getAttribute("bounds")}`) : this.parentElement) != null ? _a : this;
  const boundsRect = bounds.getBoundingClientRect();
  const listboxRect = __privateGet(this, _listbox).getBoundingClientRect();
  let position = -Math.max(buttonRect.x + listboxRect.width - boundsRect.right, 0);
  __privateGet(this, _listbox).style.transform = `translateX(${position}px)`;
};
_toggleExpanded = new WeakSet();
toggleExpanded_fn = function(closeOnly = false) {
  __privateSet(this, _expanded, !__privateGet(this, _expanded) || closeOnly);
  __privateGet(this, _button).setAttribute("aria-expanded", __privateGet(this, _expanded));
};
if (!import_server_safe_globals.globalThis.customElements.get("media-chrome-selectmenu")) {
  import_server_safe_globals.globalThis.customElements.define("media-chrome-selectmenu", MediaChromeSelectMenu);
}
var media_chrome_selectmenu_default = MediaChromeSelectMenu;
