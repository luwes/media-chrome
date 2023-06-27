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
var responsive_exports = {};
__export(responsive_exports, {
  default: () => responsive_default
});
module.exports = __toCommonJS(responsive_exports);
var import_server_safe_globals = require("../utils/server-safe-globals.js");
var import_media_theme_element = require("../media-theme-element.js");
const template = import_server_safe_globals.document.createElement("template");
template.innerHTML = `
<style>

  :host(:not([audio])) {
    ${""}
    container: media-chrome / inline-size;
    width: 100%;
  }

  .centered-controls-overlay {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-evenly;
  }

  @container (max-width: 590px) {
    .centered-controls-overlay {
      display: flex;
    }
    media-control-bar {
      display: flex;
    }
    media-control-bar media-play-button,
    media-control-bar media-seek-backward-button,
    media-control-bar media-seek-forward-button {
      display: none;
    }
  }
  @container (max-width: 420px) {
    .centered-controls-overlay {
      display: flex;
    }
    media-control-bar {
      display: none;
    }
  }
  @container (min-width: 590px) {
    .centered-controls-overlay {
      display: none;
    }
    media-control-bar {
      display: flex;
    }
  }

  media-controller .centered-controls-overlay {
    align-self: stretch;
  }
  [slot='centered-chrome'] {
    margin: 0 15%;
    --media-control-hover-background: none;
    --media-control-background: none;
  }
  [slot='centered-chrome']:is(media-play-button, media-seek-backward-button, media-seek-forward-button) {
    padding: 0px;
  }
  [slot='centered-chrome']media-play-button {
    width: 20%;
  }
  [slot='centered-chrome']:is(media-seek-backward-button, media-seek-forward-button) {
    width: 15%;
  }

  media-loading-indicator {
    position: absolute;
    inset: 0;
  }
</style>

<media-controller defaultsubtitles audio="{{audio}}">
  <slot name="media" slot="media"></slot>
  <slot name="poster" slot="poster"></slot>

  <template if="audio">
    <template if="mediatitle">
      <media-control-bar>{{mediatitle}}</media-control-bar>
    </template>
    <media-control-bar>
      <media-play-button></media-play-button>
      <media-time-display showduration></media-time-display>
      <media-time-range></media-time-range>
      <media-playback-rate-button></media-playback-rate-button>
      <media-mute-button></media-mute-button>
      <media-volume-range></media-volume-range>
    </media-control-bar>
  </template>

  <template if="audio == null">
    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>

    <div slot="centered-chrome" class="centered-controls-overlay">
      <media-seek-backward-button seekoffset="15"></media-seek-backward-button>
      <media-play-button></media-play-button>
      <media-seek-forward-button seekoffset="15"></media-seek-forward-button>
    </div>
    <media-control-bar>
      <media-play-button></media-play-button>
      <media-seek-backward-button seekoffset="15"></media-seek-backward-button>
      <media-seek-forward-button seekoffset="15"></media-seek-forward-button>
      <media-mute-button></media-mute-button>
      <media-volume-range></media-volume-range>
      <media-time-range></media-time-range>
      <media-time-display showduration remaining></media-time-display>
      <media-captions-button></media-captions-button>
      <media-playback-rate-button></media-playback-rate-button>
      <media-pip-button></media-pip-button>
      <media-fullscreen-button></media-fullscreen-button>
      <media-airplay-button></media-airplay-button>
    </media-control-bar>
  </template>
</media-controller>
`;
class MediaThemeResponsive extends import_media_theme_element.MediaThemeElement {
}
__publicField(MediaThemeResponsive, "template", template);
if (!import_server_safe_globals.globalThis.customElements.get("media-theme-responsive")) {
  import_server_safe_globals.globalThis.customElements.define("media-theme-responsive", MediaThemeResponsive);
}
var responsive_default = MediaThemeResponsive;
