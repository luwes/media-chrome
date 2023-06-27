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
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
var media_playback_rate_listbox_exports = {};
__export(media_playback_rate_listbox_exports, {
  default: () => media_playback_rate_listbox_default
});
module.exports = __toCommonJS(media_playback_rate_listbox_exports);
var import_media_chrome_listbox = __toESM(require("./media-chrome-listbox.js"), 1);
var import_server_safe_globals = require("../utils/server-safe-globals.js");
var import_constants = require("../constants.js");
var _onChange, onChange_fn;
const slotTemplate = import_server_safe_globals.document.createElement("template");
slotTemplate.innerHTML = `
  <style>
    media-chrome-listitem {
      white-space: var(--media-playback-rate-listbox-white-space, nowrap);
    }
  </style>
`;
class MediaPlaybackrateListbox extends import_media_chrome_listbox.default {
  constructor() {
    super({ slotTemplate });
    __privateAdd(this, _onChange);
  }
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      "aria-multiselectable",
      import_constants.MediaUIAttributes.MEDIA_PLAYBACK_RATE
    ];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === import_constants.MediaUIAttributes.MEDIA_PLAYBACK_RATE && oldValue !== newValue) {
      this.value = newValue;
    } else if (attrName === "aria-multiselectable") {
      this.removeAttribute("aria-multiselectable");
      console.warn("Playback rate listbox doesn't support multiple selections.");
    }
    super.attributeChangedCallback(attrName, oldValue, newValue);
  }
  connectedCallback() {
    this.addEventListener("change", __privateMethod(this, _onChange, onChange_fn));
    super.connectedCallback();
  }
  disconnectedCallback() {
    this.removeEventListener("change", __privateMethod(this, _onChange, onChange_fn));
    super.disconnectedCallback();
  }
}
_onChange = new WeakSet();
onChange_fn = function() {
  var _a;
  const selectedOption = (_a = this.selectedOptions[0]) == null ? void 0 : _a.value;
  if (!selectedOption)
    return;
  const event = new import_server_safe_globals.globalThis.CustomEvent(
    import_constants.MediaUIEvents.MEDIA_PLAYBACK_RATE_REQUEST,
    {
      composed: true,
      bubbles: true,
      detail: selectedOption
    }
  );
  this.dispatchEvent(event);
};
if (!import_server_safe_globals.globalThis.customElements.get("media-playback-rate-listbox")) {
  import_server_safe_globals.globalThis.customElements.define("media-playback-rate-listbox", MediaPlaybackrateListbox);
}
var media_playback_rate_listbox_default = MediaPlaybackrateListbox;
