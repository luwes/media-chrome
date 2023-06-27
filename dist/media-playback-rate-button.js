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
var _rates;
import { MediaChromeButton } from "./media-chrome-button.js";
import { globalThis, document } from "./utils/server-safe-globals.js";
import { MediaUIEvents, MediaUIAttributes } from "./constants.js";
import { nouns } from "./labels/labels.js";
import { getNumericAttr, setNumericAttr } from "./utils/element-utils.js";
import { AttributeTokenList } from "./utils/attribute-token-list.js";
const Attributes = {
  RATES: "rates"
};
const DEFAULT_RATES = [1, 1.25, 1.5, 1.75, 2];
const DEFAULT_RATE = 1;
const slotTemplate = document.createElement("template");
slotTemplate.innerHTML = `
  <span id="container"></span>
`;
class MediaPlaybackRateButton extends MediaChromeButton {
  constructor(options = {}) {
    super({ slotTemplate, ...options });
    __privateAdd(this, _rates, new AttributeTokenList(this, Attributes.RATES, { defaultValue: DEFAULT_RATES }));
    this.container = this.shadowRoot.querySelector("#container");
    this.container.innerHTML = `${DEFAULT_RATE}x`;
  }
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_PLAYBACK_RATE,
      Attributes.RATES
    ];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === Attributes.RATES) {
      __privateGet(this, _rates).value = newValue;
    }
    if (attrName === MediaUIAttributes.MEDIA_PLAYBACK_RATE) {
      const newPlaybackRate = newValue ? +newValue : Number.NaN;
      const playbackRate = !Number.isNaN(newPlaybackRate) ? newPlaybackRate : DEFAULT_RATE;
      this.container.innerHTML = `${playbackRate}x`;
      this.setAttribute("aria-label", nouns.PLAYBACK_RATE({ playbackRate }));
      return;
    }
    super.attributeChangedCallback(attrName, oldValue, newValue);
  }
  get rates() {
    return __privateGet(this, _rates);
  }
  set rates(value) {
    if (!value) {
      __privateGet(this, _rates).value = "";
    } else if (Array.isArray(value)) {
      __privateGet(this, _rates).value = value.join(" ");
    }
  }
  get mediaPlaybackRate() {
    return getNumericAttr(this, MediaUIAttributes.MEDIA_PLAYBACK_RATE, DEFAULT_RATE);
  }
  set mediaPlaybackRate(value) {
    setNumericAttr(this, MediaUIAttributes.MEDIA_PLAYBACK_RATE, value);
  }
  handleClick() {
    var _a, _b;
    const availableRates = Array.from(this.rates.values(), (str) => +str).sort();
    const detail = (_b = (_a = availableRates.find((r) => r > this.mediaPlaybackRate)) != null ? _a : availableRates[0]) != null ? _b : DEFAULT_RATE;
    const evt = new globalThis.CustomEvent(
      MediaUIEvents.MEDIA_PLAYBACK_RATE_REQUEST,
      { composed: true, bubbles: true, detail }
    );
    this.dispatchEvent(evt);
  }
}
_rates = new WeakMap();
if (!globalThis.customElements.get("media-playback-rate-button")) {
  globalThis.customElements.define(
    "media-playback-rate-button",
    MediaPlaybackRateButton
  );
}
var media_playback_rate_button_default = MediaPlaybackRateButton;
export {
  Attributes,
  DEFAULT_RATE,
  DEFAULT_RATES,
  media_playback_rate_button_default as default
};
