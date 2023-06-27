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
var media_captions_selectmenu_exports = {};
__export(media_captions_selectmenu_exports, {
  default: () => media_captions_selectmenu_default
});
module.exports = __toCommonJS(media_captions_selectmenu_exports);
var import_media_chrome_selectmenu = __toESM(require("./media-chrome-selectmenu.js"), 1);
var import_media_captions_button = require("../media-captions-button.js");
var import_media_captions_listbox = require("./media-captions-listbox.js");
var import_server_safe_globals = require("../utils/server-safe-globals.js");
class MediaCaptionsSelectMenu extends import_media_chrome_selectmenu.default {
  constructor() {
    super();
  }
  init() {
    const captionsButton = import_server_safe_globals.document.createElement("media-captions-button");
    captionsButton.part.add("button");
    captionsButton.preventClick = true;
    const captionsListbox = import_server_safe_globals.document.createElement("media-captions-listbox");
    captionsListbox.part.add("listbox");
    captionsListbox.setAttribute("exportparts", "listitem");
    const buttonSlot = this.shadowRoot.querySelector("slot[name=button]");
    const listboxSlot = this.shadowRoot.querySelector("slot[name=listbox]");
    buttonSlot.textContent = "";
    listboxSlot.textContent = "";
    buttonSlot.append(captionsButton);
    listboxSlot.append(captionsListbox);
  }
}
if (!import_server_safe_globals.globalThis.customElements.get("media-captions-selectmenu")) {
  import_server_safe_globals.globalThis.customElements.define("media-captions-selectmenu", MediaCaptionsSelectMenu);
}
var media_captions_selectmenu_default = MediaCaptionsSelectMenu;
