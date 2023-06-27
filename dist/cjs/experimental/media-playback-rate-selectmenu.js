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
var media_playback_rate_selectmenu_exports = {};
__export(media_playback_rate_selectmenu_exports, {
  default: () => media_playback_rate_selectmenu_default
});
module.exports = __toCommonJS(media_playback_rate_selectmenu_exports);
var import_media_chrome_selectmenu = __toESM(require("./media-chrome-selectmenu.js"), 1);
var import_media_chrome_listitem = require("./media-chrome-listitem.js");
var import_media_playback_rate_button = require("../media-playback-rate-button.js");
var import_media_playback_rate_listbox = require("./media-playback-rate-listbox.js");
var import_server_safe_globals = require("../utils/server-safe-globals.js");
const createItem = (rate) => {
  const item = import_server_safe_globals.document.createElement("media-chrome-listitem");
  item.part.add("listitem");
  item.value = rate;
  item.textContent = rate + "x";
  return item;
};
class MediaPlaybackrateSelectMenu extends import_media_chrome_selectmenu.default {
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      "rates"
    ];
  }
  constructor() {
    super();
  }
  init() {
    const playbackrateButton = import_server_safe_globals.document.createElement("media-playback-rate-button");
    playbackrateButton.part.add("button");
    playbackrateButton.preventClick = true;
    const playbackrateListbox = import_server_safe_globals.document.createElement("media-playback-rate-listbox");
    playbackrateListbox.part.add("listbox");
    playbackrateListbox.setAttribute("exportparts", "listitem");
    import_media_playback_rate_button.DEFAULT_RATES.forEach((rate) => {
      playbackrateListbox.append(createItem(rate));
    });
    const buttonSlot = this.shadowRoot.querySelector("slot[name=button]");
    const listboxSlot = this.shadowRoot.querySelector("slot[name=listbox]");
    buttonSlot.textContent = "";
    listboxSlot.textContent = "";
    buttonSlot.append(playbackrateButton);
    listboxSlot.append(playbackrateListbox);
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === "rates" && oldValue !== newValue) {
      const listbox = this.shadowRoot.querySelector("media-playback-rate-listbox");
      listbox.textContent = "";
      const rates = newValue ? newValue.trim().split(" ") : import_media_playback_rate_button.DEFAULT_RATES;
      rates.forEach((rate) => {
        listbox.append(createItem(rate));
      });
    }
    super.attributeChangedCallback(attrName, oldValue, newValue);
  }
}
if (!import_server_safe_globals.globalThis.customElements.get("media-playback-rate-selectmenu")) {
  import_server_safe_globals.globalThis.customElements.define("media-playback-rate-selectmenu", MediaPlaybackrateSelectMenu);
}
var media_playback_rate_selectmenu_default = MediaPlaybackrateSelectMenu;
