var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
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
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var netflix_exports = {};
__export(netflix_exports, {
  default: () => netflix_default
});
module.exports = __toCommonJS(netflix_exports);
var import_server_safe_globals = require("../utils/server-safe-globals.js");
var import_media_theme_element = require("../media-theme-element.js");
const template = import_server_safe_globals.document.createElement("template");
template.innerHTML = `
<style>
  media-controller {
    --media-range-thumb-background: rgba(255, 0, 0, 1);
    --media-range-track-height: 4px;
    --media-range-track-transition: height 0.2s ease;
    --media-range-track-background: #555;
    --media-range-bar-color: rgb(229, 9, 20);
    --media-control-hover-background: none;
    --media-control-background: none;

    --media-button-icon-height: 35px;
    --media-button-icon-transform: scale(1);
    --media-button-icon-transition: transform 0.2s ease;
  }

  media-time-range {
    height: auto;
    --media-range-thumb-height: 20px;
    --media-range-thumb-width: 20px;
    --media-range-thumb-border-radius: 20px;
    --media-time-range-buffered-color: #777;
    --media-range-track-pointer-border-right: 2px solid #fff;
  }

  media-time-range:hover {
    --media-range-track-height: 9px;
  }

  media-control-bar {
    width: 100%;
    align-items: center;
  }

  media-control-bar *:hover {
    --media-button-icon-transform: scale(1.2);
    --media-button-icon-transition: transform 0.2s ease;
  }

  media-play-button,
  media-seek-backward-button,
  media-seek-forward-button,
  media-mute-button,
  media-fullscreen-button {
    --media-button-icon-height: 45px;
    padding: 30px 17px;
  }

  media-fullscreen-button {
    --media-button-icon-height: 50px;
    margin-right: 10px;
  }

  .control-bar-title {
    margin: 0 auto;
    padding-right: 15%;
  }
</style>

<media-controller>
  <slot name="media" slot="media"></slot>

  <media-control-bar>
    <media-time-range></media-time-range>
  </media-control-bar>
  <media-control-bar>
    <media-play-button></media-play-button>
    <media-seek-backward-button></media-seek-backward-button>
    <media-seek-forward-button></media-seek-forward-button>
    <media-mute-button></media-mute-button>
    <media-volume-range></media-volume-range>
    <media-text-display class="control-bar-title">
      <slot name="title"></slot>
    </media-text-display>
    <media-fullscreen-button>
      <svg aria-hidden="true" slot="enter" viewBox="0 0 28 28">
        <g transform="translate(2, 6)">
          <polygon
            points="8 0 6 0 5.04614258 0 0 0 0 5 2 5 2 2 8 2"
          ></polygon>
          <polygon
            transform="translate(4, 13.5) scale(1, -1) translate(-4, -13.5) "
            points="8 11 6 11 5.04614258 11 0 11 0 16 2 16 2 13 8 13"
          ></polygon>
          <polygon
            transform="translate(20, 2.5) scale(-1, 1) translate(-20, -2.5) "
            points="24 0 22 0 21.0461426 0 16 0 16 5 18 5 18 2 24 2"
          ></polygon>
          <polygon
            transform="translate(20, 13.5) scale(-1, -1) translate(-20, -13.5) "
            points="24 11 22 11 21.0461426 11 16 11 16 16 18 16 18 13 24 13"
          ></polygon>
        </g>
      </svg>
      <svg aria-hidden="true" slot="exit" viewBox="0 0 28 28">
        <g transform="translate(3, 6)">
          <polygon
            transform="translate(19.000000, 3.000000) scale(-1, 1) translate(-19.000000, -3.000000) "
            points="22 0 20 0 20 4 16 4 16 6 22 6"
          ></polygon>
          <polygon
            transform="translate(19.000000, 13.000000) scale(-1, -1) translate(-19.000000, -13.000000) "
            points="22 10 20 10 20 14 16 14 16 16 22 16"
          ></polygon>
          <polygon points="6 0 4 0 4 4 0 4 0 6 6 6"></polygon>
          <polygon
            transform="translate(3.000000, 13.000000) scale(1, -1) translate(-3.000000, -13.000000) "
            points="6 10 4 10 4 14 0 14 0 16 6 16"
          ></polygon>
        </g>
      </svg>
    </media-fullscreen-button>
  </media-control-bar>
</media-controller>
`;
class MediaThemeNetflix extends import_media_theme_element.MediaThemeElement {
}
__publicField(MediaThemeNetflix, "template", template);
if (!import_server_safe_globals.globalThis.customElements.get("media-theme-netflix")) {
  import_server_safe_globals.globalThis.customElements.define("media-theme-netflix", MediaThemeNetflix);
}
var netflix_default = MediaThemeNetflix;
