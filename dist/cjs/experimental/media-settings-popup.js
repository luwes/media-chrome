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
var media_settings_popup_exports = {};
__export(media_settings_popup_exports, {
  default: () => media_settings_popup_default
});
module.exports = __toCommonJS(media_settings_popup_exports);
var import_server_safe_globals = require("../utils/server-safe-globals.js");
const template = import_server_safe_globals.document.createElement("template");
template.innerHTML = `
  <style>
    :host {
      display: block;
      position: absolute;
      width: 300px;
      height: auto;
      right: 5px;
      bottom: 45px;
      padding: 10px;
      border: 1px solid #333;
      color: #ccc;
      background-color: #000;
    }
  </style>
  <slot></slot>

  <!-- This is too much for a menu... -->

  <media-chrome-panel>
  <media-chrome-menu>
    <media-chrome-submenu-menuitem label="Playback speed" value="1.2">
    </media-chrome-submenu-menuitem>
    <media-chrome-menuitem>Hello1</media-chrome-menuitem>
    <media-chrome-menuitem>Hello1</media-chrome-menuitem>
    <media-chrome-menuitem>Hello1</media-chrome-menuitem>
    <media-chrome-menuitem>Hello1</media-chrome-menuitem>
  </media-chrome-menu>
  <media-chrome-menu slot="menu">
    <media-chrome-menuitem>Normal</media-chrome-menuitem>
    <media-chrome-menuitem>1.5</media-chrome-menuitem>
  </media-chrome-menu>
`;
class MediaSettingsPopup extends import_server_safe_globals.globalThis.HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
if (!import_server_safe_globals.globalThis.customElements.get("media-settings-popup")) {
  import_server_safe_globals.globalThis.customElements.define("media-settings-popup", MediaSettingsPopup);
}
var media_settings_popup_default = MediaSettingsPopup;
