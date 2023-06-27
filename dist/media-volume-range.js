import { globalThis } from "./utils/server-safe-globals.js";
import { MediaChromeRange } from "./media-chrome-range.js";
import { MediaUIAttributes, MediaUIEvents } from "./constants.js";
import { nouns } from "./labels/labels.js";
import {
  getBooleanAttr,
  getNumericAttr,
  getStringAttr,
  setBooleanAttr,
  setNumericAttr,
  setStringAttr
} from "./utils/element-utils.js";
const DEFAULT_MAX_VOLUME = 100;
const DEFAULT_VOLUME = 1;
const toVolume = (el) => {
  if (el.mediaMuted)
    return 0;
  return Math.round(el.mediaVolume * el.range.max);
};
const formatAsPercentString = ({ value, max }) => `${Math.round(value / max * 100)}%`;
class MediaVolumeRange extends MediaChromeRange {
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_VOLUME,
      MediaUIAttributes.MEDIA_MUTED,
      MediaUIAttributes.MEDIA_VOLUME_UNAVAILABLE
    ];
  }
  constructor() {
    super();
    this.range.max = DEFAULT_MAX_VOLUME;
    this.range.addEventListener("input", () => {
      const newVolume = this.range.value / this.range.max;
      const detail = newVolume;
      const evt = new globalThis.CustomEvent(MediaUIEvents.MEDIA_VOLUME_REQUEST, {
        composed: true,
        bubbles: true,
        detail
      });
      this.dispatchEvent(evt);
    });
  }
  connectedCallback() {
    this.range.setAttribute("aria-label", nouns.VOLUME());
    super.connectedCallback();
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === MediaUIAttributes.MEDIA_VOLUME || attrName === MediaUIAttributes.MEDIA_MUTED) {
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
    return getNumericAttr(this, MediaUIAttributes.MEDIA_VOLUME, DEFAULT_VOLUME);
  }
  set mediaVolume(value) {
    setNumericAttr(this, MediaUIAttributes.MEDIA_VOLUME, value);
  }
  get mediaMuted() {
    return getBooleanAttr(this, MediaUIAttributes.MEDIA_MUTED);
  }
  set mediaMuted(value) {
    setBooleanAttr(this, MediaUIAttributes.MEDIA_MUTED, value);
  }
  get mediaVolumeUnavailable() {
    return getStringAttr(this, MediaUIAttributes.MEDIA_VOLUME_UNAVAILABLE);
  }
  set mediaVolumeUnavailable(value) {
    setStringAttr(this, MediaUIAttributes.MEDIA_VOLUME_UNAVAILABLE, value);
  }
}
if (!globalThis.customElements.get("media-volume-range")) {
  globalThis.customElements.define("media-volume-range", MediaVolumeRange);
}
var media_volume_range_default = MediaVolumeRange;
export {
  media_volume_range_default as default
};
