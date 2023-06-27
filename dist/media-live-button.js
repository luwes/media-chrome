import { MediaChromeButton } from "./media-chrome-button.js";
import { globalThis, document } from "./utils/server-safe-globals.js";
import { MediaUIEvents, MediaUIAttributes } from "./constants.js";
import { verbs } from "./labels/labels.js";
import { getBooleanAttr, setBooleanAttr } from "./utils/element-utils.js";
const { MEDIA_TIME_IS_LIVE, MEDIA_PAUSED } = MediaUIAttributes;
const { MEDIA_SEEK_TO_LIVE_REQUEST, MEDIA_PLAY_REQUEST } = MediaUIEvents;
const indicatorSVG = '<svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg>';
const slotTemplate = document.createElement("template");
slotTemplate.innerHTML = `
  <style>

  slot[name=indicator] > *,
  :host ::slotted([slot=indicator]) {
    ${""}
    min-width: auto;
    fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
    color: var(--media-live-button-icon-color, rgb(140, 140, 140));
  }

  :host([${MEDIA_TIME_IS_LIVE}]:not([${MEDIA_PAUSED}])) slot[name=indicator] > *,
  :host([${MEDIA_TIME_IS_LIVE}]:not([${MEDIA_PAUSED}])) ::slotted([slot=indicator]) {
    fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
    color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
  }

  :host([${MEDIA_TIME_IS_LIVE}]:not([${MEDIA_PAUSED}])) {
    cursor: not-allowed;
  }

  </style>

  <slot name="indicator">${indicatorSVG}</slot>
  ${""}
  <slot name="spacer">&nbsp;</slot><slot name="text">LIVE</slot>
`;
class MediaLiveButton extends MediaChromeButton {
  static get observedAttributes() {
    return [...super.observedAttributes, MEDIA_PAUSED, MEDIA_TIME_IS_LIVE];
  }
  constructor(options = {}) {
    super({ slotTemplate, ...options });
    this.setAttribute("aria-label", verbs.SEEK_LIVE());
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    super.attributeChangedCallback(attrName, oldValue, newValue);
    if (this.mediaPaused || !this.mediaTimeIsLive) {
      this.setAttribute("aria-label", verbs.SEEK_LIVE());
      this.removeAttribute("aria-disabled");
    } else {
      this.setAttribute("aria-label", verbs.PLAYING_LIVE());
      this.setAttribute("aria-disabled", "true");
    }
  }
  get mediaPaused() {
    return getBooleanAttr(this, MediaUIAttributes.MEDIA_PAUSED);
  }
  set mediaPaused(value) {
    setBooleanAttr(this, MediaUIAttributes.MEDIA_PAUSED, value);
  }
  get mediaTimeIsLive() {
    return getBooleanAttr(this, MediaUIAttributes.MEDIA_TIME_IS_LIVE);
  }
  set mediaTimeIsLive(value) {
    setBooleanAttr(this, MediaUIAttributes.MEDIA_TIME_IS_LIVE, value);
  }
  handleClick() {
    if (!this.mediaPaused && this.mediaTimeIsLive)
      return;
    this.dispatchEvent(
      new globalThis.CustomEvent(MEDIA_SEEK_TO_LIVE_REQUEST, {
        composed: true,
        bubbles: true
      })
    );
    if (this.hasAttribute(MEDIA_PAUSED)) {
      this.dispatchEvent(
        new globalThis.CustomEvent(MEDIA_PLAY_REQUEST, {
          composed: true,
          bubbles: true
        })
      );
    }
  }
}
if (!globalThis.customElements.get("media-live-button")) {
  globalThis.customElements.define("media-live-button", MediaLiveButton);
}
var media_live_button_default = MediaLiveButton;
export {
  media_live_button_default as default
};
