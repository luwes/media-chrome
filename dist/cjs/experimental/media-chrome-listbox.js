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
var media_chrome_listbox_exports = {};
__export(media_chrome_listbox_exports, {
  default: () => media_chrome_listbox_default
});
module.exports = __toCommonJS(media_chrome_listbox_exports);
var import_constants = require("../constants.js");
var import_server_safe_globals = require("../utils/server-safe-globals.js");
var _keysSoFar, _clearKeysTimeout, _slot, __assignedElements, _metaPressed, _assignedElements, assignedElements_get, assignedElements_set, _items, items_get, _clickListener, _handleKeyListener, handleKeyListener_fn, _keyupListener, _keydownListener, _getItem, getItem_fn, _selectItem, selectItem_fn, _searchItem, searchItem_fn, _clearKeysOnDelay, clearKeysOnDelay_fn;
const template = import_server_safe_globals.document.createElement("template");
template.innerHTML = `
<style>
  :host ul {
    font: var(--media-font,
      var(--media-font-weight, normal)
      var(--media-font-size, 1em) /
      var(--media-text-content-height, var(--media-control-height, 24px))
      var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
    color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
    background: var(--media-listbox-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .8))));
    list-style: none;
    display: inline-flex;
    flex-direction: column;
    gap: 0.5em;
    margin: 0;
    padding: 0.5em;
  }

  ::slotted(media-chrome-listitem[tabindex="0"]:focus-visible),
  media-chrome-listitem[tabindex="0"]:focus-visible {
    box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
    outline: 0;
  }

  ::slotted(media-chrome-listitem[aria-selected="true"]),
  media-chrome-listitem[aria-selected="true"] {
    background-color: var(--media-listbox-selected-background, rgb(122 122 184 / .8));
  }

  ::slotted(media-chrome-listitem:hover),
  media-chrome-listitem:hover {
    background-color: var(--media-listbox-hover-background, rgb(82 82 122 / .8));
    outline: var(--media-listbox-hover-outline, none);
  }
</style>
<ul tabindex="0">
  <slot></slot>
</ul>
`;
class MediaChromeListbox extends import_server_safe_globals.globalThis.HTMLElement {
  constructor(options = {}) {
    super();
    __privateAdd(this, _assignedElements);
    __privateAdd(this, _items);
    __privateAdd(this, _handleKeyListener);
    __privateAdd(this, _getItem);
    __privateAdd(this, _selectItem);
    __privateAdd(this, _searchItem);
    __privateAdd(this, _clearKeysOnDelay);
    __privateAdd(this, _keysSoFar, "");
    __privateAdd(this, _clearKeysTimeout, null);
    __privateAdd(this, _slot, void 0);
    __privateAdd(this, __assignedElements, void 0);
    __privateAdd(this, _metaPressed, false);
    __privateAdd(this, _clickListener, (e) => {
      this.handleClick(e);
    });
    __privateAdd(this, _keyupListener, (e) => {
      const { key } = e;
      if (key === "Escape") {
        this.removeEventListener("keyup", __privateGet(this, _keyupListener));
        return;
      }
      if (key === "Meta") {
        __privateSet(this, _metaPressed, false);
        return;
      }
      __privateMethod(this, _handleKeyListener, handleKeyListener_fn).call(this, e);
    });
    __privateAdd(this, _keydownListener, (e) => {
      const { key, altKey } = e;
      if (altKey) {
        this.removeEventListener("keyup", __privateGet(this, _keyupListener));
        return;
      }
      if (key === "Meta") {
        __privateSet(this, _metaPressed, true);
        return;
      }
      if (this.keysUsed.includes(key)) {
        e.preventDefault();
      }
      if (__privateGet(this, _metaPressed) && this.keysUsed.includes(key)) {
        __privateMethod(this, _handleKeyListener, handleKeyListener_fn).call(this, e);
        return;
      }
      this.addEventListener("keyup", __privateGet(this, _keyupListener), { once: true });
    });
    if (!this.shadowRoot) {
      const shadow = this.attachShadow({ mode: "open" });
      const listboxHTML = template.content.cloneNode(true);
      this.nativeEl = listboxHTML;
      let slotTemplate = options.slotTemplate;
      if (!slotTemplate) {
        slotTemplate = import_server_safe_globals.document.createElement("template");
        slotTemplate.innerHTML = `<slot>${options.defaultContent || ""}</slot>`;
      }
      this.nativeEl.appendChild(slotTemplate.content.cloneNode(true));
      shadow.appendChild(listboxHTML);
    }
    __privateSet(this, _slot, this.shadowRoot.querySelector("slot"));
    __privateGet(this, _slot).addEventListener("slotchange", () => {
      __privateSet(this, _assignedElements, __privateGet(this, _slot).assignedElements({ flatten: true }), assignedElements_set);
      if (__privateGet(this, _assignedElements, assignedElements_get).length === 1 && __privateGet(this, _assignedElements, assignedElements_get)[0].nodeName.toLowerCase() === "slot") {
        __privateSet(this, _assignedElements, __privateGet(this, _assignedElements, assignedElements_get)[0].assignedElements({ flatten: true }), assignedElements_set);
      }
      const els = __privateGet(this, _items, items_get);
      const activeEls = els.some((el) => el.getAttribute("tabindex") === "0");
      if (activeEls) {
        return;
      }
      let elToSelect = els.filter((el) => el.getAttribute("aria-selected") === "true")[0];
      if (!elToSelect) {
        elToSelect = els[0];
      }
      if (elToSelect) {
        elToSelect.setAttribute("tabindex", 0);
        elToSelect.setAttribute("aria-selected", "true");
      }
    });
  }
  static get observedAttributes() {
    return ["disabled", import_constants.MediaStateReceiverAttributes.MEDIA_CONTROLLER];
  }
  get selectedOptions() {
    return __privateGet(this, _items, items_get).filter((el) => el.getAttribute("aria-selected") === "true");
  }
  get value() {
    return this.selectedOptions[0].value || this.selectedOptions[0].textContent;
  }
  set value(newValue) {
    const item = __privateGet(this, _items, items_get).find((el) => el.value === newValue || el.textContent === newValue);
    if (!item)
      return;
    __privateMethod(this, _selectItem, selectItem_fn).call(this, item);
  }
  focus() {
    var _a;
    (_a = this.selectedOptions[0]) == null ? void 0 : _a.focus();
  }
  enable() {
    this.addEventListener("click", __privateGet(this, _clickListener));
    this.addEventListener("keydown", __privateGet(this, _keydownListener));
  }
  disable() {
    this.removeEventListener("click", __privateGet(this, _clickListener));
    this.removeEventListener("keyup", __privateGet(this, _keyupListener));
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
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "listbox");
    }
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
  get keysUsed() {
    return ["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"];
  }
  handleSelection(e, toggle) {
    const item = __privateMethod(this, _getItem, getItem_fn).call(this, e);
    if (!item)
      return;
    __privateMethod(this, _selectItem, selectItem_fn).call(this, item, toggle);
  }
  handleMovement(e) {
    const { key } = e;
    const els = __privateGet(this, _items, items_get);
    let currentOption = __privateMethod(this, _getItem, getItem_fn).call(this, e);
    if (!currentOption) {
      currentOption = els.filter((el) => el.getAttribute("tabindex") === "0")[0];
    }
    let nextOption;
    switch (key) {
      case "ArrowDown":
        nextOption = currentOption.nextElementSibling;
        if (nextOption == null ? void 0 : nextOption.hasAttribute("disabled")) {
          nextOption = nextOption.nextElementSibling;
        }
        break;
      case "ArrowUp":
        nextOption = currentOption.previousElementSibling;
        if (nextOption == null ? void 0 : nextOption.hasAttribute("disabled")) {
          nextOption = nextOption.previousElementSibling;
        }
        break;
      case "Home":
        nextOption = els[0];
        break;
      case "End":
        nextOption = els[els.length - 1];
        break;
      default:
        nextOption = __privateMethod(this, _searchItem, searchItem_fn).call(this, key);
        break;
    }
    if (nextOption) {
      els.forEach((el) => el.setAttribute("tabindex", "-1"));
      nextOption.setAttribute("tabindex", "0");
      nextOption.focus();
    }
  }
  handleClick(e) {
    const item = __privateMethod(this, _getItem, getItem_fn).call(this, e);
    if (!item || item.hasAttribute("disabled"))
      return;
    __privateGet(this, _items, items_get).forEach((el) => el.setAttribute("tabindex", "-1"));
    item.setAttribute("tabindex", "0");
    this.handleSelection(e, this.hasAttribute("aria-multiselectable") && this.getAttribute("aria-multiselectable") === "true");
  }
}
_keysSoFar = new WeakMap();
_clearKeysTimeout = new WeakMap();
_slot = new WeakMap();
__assignedElements = new WeakMap();
_metaPressed = new WeakMap();
_assignedElements = new WeakSet();
assignedElements_get = function() {
  if (!__privateGet(this, __assignedElements)) {
    __privateSet(this, __assignedElements, Array.from(this.shadowRoot.querySelectorAll("media-chrome-listitem")));
  }
  return __privateGet(this, __assignedElements);
};
assignedElements_set = function(value) {
  __privateSet(this, __assignedElements, value);
};
_items = new WeakSet();
items_get = function() {
  return __privateGet(this, _assignedElements, assignedElements_get).filter((el) => !el.hasAttribute("disabled"));
};
_clickListener = new WeakMap();
_handleKeyListener = new WeakSet();
handleKeyListener_fn = function(e) {
  const { key } = e;
  if (key === "Enter" || key === " ") {
    this.handleSelection(e, this.hasAttribute("aria-multiselectable") && this.getAttribute("aria-multiselectable") === "true");
  } else {
    this.handleMovement(e);
  }
};
_keyupListener = new WeakMap();
_keydownListener = new WeakMap();
_getItem = new WeakSet();
getItem_fn = function(e) {
  const composedPath = e.composedPath();
  const index = composedPath.findIndex((el) => el.nodeName === "MEDIA-CHROME-LISTITEM");
  return composedPath[index];
};
_selectItem = new WeakSet();
selectItem_fn = function(item, toggle) {
  if (!this.hasAttribute("aria-multiselectable") || this.getAttribute("aria-multiselectable") !== "true") {
    __privateGet(this, _assignedElements, assignedElements_get).forEach((el) => el.setAttribute("aria-selected", "false"));
  }
  if (toggle) {
    const selected = item.getAttribute("aria-selected") === "true";
    if (selected) {
      item.setAttribute("aria-selected", "false");
    } else {
      item.setAttribute("aria-selected", "true");
    }
  } else {
    item.setAttribute("aria-selected", "true");
  }
  this.dispatchEvent(new Event("change"));
};
_searchItem = new WeakSet();
searchItem_fn = function(key) {
  __privateMethod(this, _clearKeysOnDelay, clearKeysOnDelay_fn).call(this);
  const els = __privateGet(this, _items, items_get);
  const activeIndex = els.findIndex((el) => el.getAttribute("tabindex") === "0");
  __privateSet(this, _keysSoFar, __privateGet(this, _keysSoFar) + key);
  const repeatedKey = __privateGet(this, _keysSoFar).split("").every((k) => k === key);
  const after = els.slice(activeIndex + (repeatedKey ? 1 : 0)).filter((el) => el.textContent.toLowerCase().startsWith(__privateGet(this, _keysSoFar)));
  const before = els.slice(0, activeIndex - (repeatedKey ? 1 : 0)).filter((el) => el.textContent.toLowerCase().startsWith(__privateGet(this, _keysSoFar)));
  let afterRepeated = [];
  let beforeRepeated = [];
  if (repeatedKey) {
    afterRepeated = els.slice(activeIndex + (repeatedKey ? 1 : 0)).filter((el) => el.textContent.startsWith(key));
    beforeRepeated = els.slice(0, activeIndex - (repeatedKey ? 1 : 0)).filter((el) => el.textContent.startsWith(key));
  }
  const returns = [...after, ...before, ...afterRepeated, ...beforeRepeated];
  return returns[0];
};
_clearKeysOnDelay = new WeakSet();
clearKeysOnDelay_fn = function() {
  import_server_safe_globals.globalThis.clearTimeout(__privateGet(this, _clearKeysTimeout));
  __privateSet(this, _clearKeysTimeout, null);
  __privateSet(this, _clearKeysTimeout, import_server_safe_globals.globalThis.setTimeout(() => {
    __privateSet(this, _keysSoFar, "");
    __privateSet(this, _clearKeysTimeout, null);
  }, 500));
};
if (!import_server_safe_globals.globalThis.customElements.get("media-chrome-listbox")) {
  import_server_safe_globals.globalThis.customElements.define("media-chrome-listbox", MediaChromeListbox);
}
var media_chrome_listbox_default = MediaChromeListbox;
