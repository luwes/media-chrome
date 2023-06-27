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
var youtube_exports = {};
__export(youtube_exports, {
  default: () => youtube_default
});
module.exports = __toCommonJS(youtube_exports);
var import_server_safe_globals = require("../utils/server-safe-globals.js");
var import_media_theme_element = require("../media-theme-element.js");
const template = import_server_safe_globals.document.createElement("template");
template.innerHTML = `
<style>
  :host {
    --media-secondary-color: transparent;
    --media-primary-color: #fff;
  }

  media-controller {
    font-size: 13px;
    font-family: Roboto, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;

    --media-control-hover-background: var(--media-secondary-color);
    --media-range-track-height: 3px;
    --media-range-thumb-height: 13px;
    --media-range-thumb-width: 13px;
    --media-range-thumb-border-radius: 13px;
    --media-preview-thumbnail-border: 2px solid #fff;
    --media-preview-thumbnail-border-radius: 2px;
    --media-preview-time-margin: 10px 0;

  }

  media-control-bar {
    position: relative;
  }

  media-control-bar:last-child {
    padding: 0 10px 0 5px;
  }

  media-play-button {
    --media-button-icon-width: 30px;
    padding: 6px 10px;
  }

  media-time-range {
    width: 100%;
    height: 5px;

    --media-range-track-transition: height 0.1s linear;
    --media-range-track-background: rgba(255,255,255,.2);
    --media-range-track-pointer-background: rgba(255,255,255,.5);
    --media-time-range-buffered-color: rgba(255,255,255,.4);

    --media-range-bar-color: rgb(229, 9, 20);

    --media-range-thumb-border-radius: 13px;
    --media-range-thumb-background: #f00;

    --media-range-thumb-transition: transform 0.1s linear;
    --media-range-thumb-transform: scale(0) translate(0%, 0%);
  }

  media-time-range:hover {
    --media-range-track-height: 5px;
    --media-range-thumb-transform: scale(1) translate(0%, 0%);
  }

  media-volume-range {
    padding-left: 0px;

    --media-range-track-background: rgba(255,255,255,.2);
  }

  .control-spacer {
    flex-grow: 1;
  }

  media-mute-button + media-volume-range {
    width: 0px;
    overflow: hidden;
    padding-right: 0px;

    /* Set the internal width so it reveals, not grows */
    --media-range-track-width: 60px;
    transition: width 0.2s ease-in;
  }

  /* Expand volume control in all relevant states */
  media-mute-button:hover + media-volume-range,
  media-mute-button:focus + media-volume-range,
  media-mute-button:focus-within + media-volume-range,
  media-volume-range:hover,
  media-volume-range:focus,
  media-volume-range:focus-within {
    width: 70px;
  }

  .ytp-gradient-bottom {
    padding-top: 37px;
    position: absolute;
    width: 100%;
    height: 170px;
    bottom: 0;
    pointer-events: none;
    background-position: bottom;
    background-repeat: repeat-x;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAACqCAYAAABsziWkAAAAAXNSR0IArs4c6QAAAQVJREFUOE9lyNdHBQAAhfHb3nvvuu2997jNe29TJJEkkkgSSSSJJJJEEkkiifRH5jsP56Xz8PM5gcC/xfDEmjhKxEOCSaREEiSbFEqkQppJpzJMJiWyINvkUCIX8kw+JQqg0BRRxaaEEqVQZsopUQGVpooS1VBjglStqaNEPTSYRko0QbNpoUQrtJl2qsN0UqILuk0PJXqhz/RTYgAGzRA1bEYoMQpjZpwSExAyk5SYgmkzQ82aOUqEIWKilJiHBbNIiSVYhhVYhTVYhw3YhC3Yhh3YhT3YhwM4hCM4hhM4hTM4hwu4hCu4hhu4hTu4hwd4hCd4hhd4hTd4hw/4hC/4hh/4/QM2/id28uIEJAAAAABJRU5ErkJggg==");
  }
</style>

<media-controller>
  <slot name="media" slot="media"></slot>
  <slot name="poster" slot="poster"></slot>

  <div class="ytp-gradient-bottom"></div>
  <media-time-range>
    <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
    <media-preview-time-display slot="preview"></media-preview-time-display>
  </media-time-range>
  <media-control-bar>
    <media-play-button></media-play-button>
    <media-mute-button></media-mute-button>
    <media-volume-range></media-volume-range>
    <media-time-display showduration></media-time-display>
    <span class="control-spacer"></span>
    <media-playback-rate-button></media-playback-rate-button>
    <media-pip-button></media-pip-button>
    <media-fullscreen-button></media-fullscreen-button>
  </media-control-bar>
</media-controller>
`;
class MediaThemeYoutube extends import_media_theme_element.MediaThemeElement {
}
__publicField(MediaThemeYoutube, "template", template);
if (!import_server_safe_globals.globalThis.customElements.get("media-theme-youtube")) {
  import_server_safe_globals.globalThis.customElements.define("media-theme-youtube", MediaThemeYoutube);
}
var youtube_default = MediaThemeYoutube;
