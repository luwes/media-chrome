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
var media_volume_range_exports = {};
__export(media_volume_range_exports, {
  default: () => media_volume_range_default
});
module.exports = __toCommonJS(media_volume_range_exports);
var import_server_safe_globals = require("./utils/server-safe-globals.js");
var import_media_chrome_range = require("./media-chrome-range.js");
var import_constants = require("./constants.js");
var import_labels = require("./labels/labels.js");
var import_element_utils = require("./utils/element-utils.js");
const DEFAULT_MAX_VOLUME = 100;
const DEFAULT_VOLUME = 1;
const toVolume = (el) => {
  if (el.mediaMuted)
    return 0;
  return Math.round(el.mediaVolume * el.range.max);
};
const formatAsPercentString = ({ value, max }) => `${Math.round(value / max * 100)}%`;
class MediaVolumeRange extends import_media_chrome_range.MediaChromeRange {
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      import_constants.MediaUIAttributes.MEDIA_VOLUME,
      import_constants.MediaUIAttributes.MEDIA_MUTED,
      import_constants.MediaUIAttributes.MEDIA_VOLUME_UNAVAILABLE
    ];
  }
  constructor() {
    super();
    this.range.max = DEFAULT_MAX_VOLUME;
    this.range.addEventListener("input", () => {
      const newVolume = this.range.value / this.range.max;
      const detail = newVolume;
      const evt = new import_server_safe_globals.globalThis.CustomEvent(import_constants.MediaUIEvents.MEDIA_VOLUME_REQUEST, {
        composed: true,
        bubbles: true,
        detail
      });
      this.dispatchEvent(evt);
    });
  }
  connectedCallback() {
    this.range.setAttribute("aria-label", import_labels.nouns.VOLUME());
    super.connectedCallback();
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === import_constants.MediaUIAttributes.MEDIA_VOLUME || attrName === import_constants.MediaUIAttributes.MEDIA_MUTED) {
      const newVolume = toVolume(this);
      this.range.value = newVolume;
      this.range.setAttribute(
        "aria-valuetext",
        formatAsPercentString(this.range)
      );
      this.updateBar();
    }
    super.attributeChangedCallback(attrName, oldValue, newValue);
  }
  get mediaVolume() {
    return (0, import_element_utils.getNumericAttr)(this, import_constants.MediaUIAttributes.MEDIA_VOLUME, DEFAULT_VOLUME);
  }
  set mediaVolume(value) {
    (0, import_element_utils.setNumericAttr)(this, import_constants.MediaUIAttributes.MEDIA_VOLUME, value);
  }
  get mediaMuted() {
    return (0, import_element_utils.getBooleanAttr)(this, import_constants.MediaUIAttributes.MEDIA_MUTED);
  }
  set mediaMuted(value) {
    (0, import_element_utils.setBooleanAttr)(this, import_constants.MediaUIAttributes.MEDIA_MUTED, value);
  }
  get mediaVolumeUnavailable() {
    return (0, import_element_utils.getStringAttr)(this, import_constants.MediaUIAttributes.MEDIA_VOLUME_UNAVAILABLE);
  }
  set mediaVolumeUnavailable(value) {
    (0, import_element_utils.setStringAttr)(this, import_constants.MediaUIAttributes.MEDIA_VOLUME_UNAVAILABLE, value);
  }
}
if (!import_server_safe_globals.globalThis.customElements.get("media-volume-range")) {
  import_server_safe_globals.globalThis.customElements.define("media-volume-range", MediaVolumeRange);
}
var media_volume_range_default = MediaVolumeRange;
