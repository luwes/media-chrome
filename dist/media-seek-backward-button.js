import { MediaChromeButton } from "./media-chrome-button.js";
import { globalThis, document } from "./utils/server-safe-globals.js";
import { MediaUIEvents, MediaUIAttributes } from "./constants.js";
import { updateAriaLabel, updateSeekIconValue } from "./utils/seek.js";
import { getNumericAttr, setNumericAttr } from "./utils/element-utils.js";
const Attributes = {
  SEEK_OFFSET: "seekoffset"
};
const DEFAULT_SEEK_OFFSET = 30;
const backwardIcon = `<svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(2.18 19.87)">${DEFAULT_SEEK_OFFSET}</text><path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/></svg>`;
const slotTemplate = document.createElement("template");
slotTemplate.innerHTML = `
  <slot name="icon">${backwardIcon}</slot>
`;
const DEFAULT_TIME = 0;
class MediaSeekBackwardButton extends MediaChromeButton {
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_CURRENT_TIME,
      Attributes.SEEK_OFFSET
    ];
  }
  constructor(options = {}) {
    super({ slotTemplate, ...options });
  }
  connectedCallback() {
    updateAriaLabel(this);
    updateSeekIconValue(this);
    super.connectedCallback();
  }
  attributeChangedCallback(attrName, _oldValue, newValue) {
    if (attrName === Attributes.SEEK_OFFSET) {
      updateSeekIconValue(this);
      updateAriaLabel(this);
    }
    super.attributeChangedCallback(attrName, _oldValue, newValue);
  }
  get seekOffset() {
    return getNumericAttr(this, Attributes.SEEK_OFFSET, DEFAULT_SEEK_OFFSET);
  }
  set seekOffset(value) {
    setNumericAttr(this, Attributes.SEEK_OFFSET, value);
  }
  get mediaCurrentTime() {
    return getNumericAttr(this, MediaUIAttributes.MEDIA_CURRENT_TIME, DEFAULT_TIME);
  }
  set mediaCurrentTime(time) {
    setNumericAttr(this, MediaUIAttributes.MEDIA_CURRENT_TIME, time);
  }
  handleClick() {
    const detail = Math.max(this.mediaCurrentTime - this.seekOffset, 0);
    const evt = new globalThis.CustomEvent(MediaUIEvents.MEDIA_SEEK_REQUEST, {
      composed: true,
      bubbles: true,
      detail
    });
    this.dispatchEvent(evt);
  }
}
if (!globalThis.customElements.get("media-seek-backward-button")) {
  globalThis.customElements.define(
    "media-seek-backward-button",
    MediaSeekBackwardButton
  );
}
var media_seek_backward_button_default = MediaSeekBackwardButton;
export {
  Attributes,
  media_seek_backward_button_default as default
};
