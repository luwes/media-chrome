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
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _slot;
import { MediaTextDisplay } from "./media-text-display.js";
import {
  getBooleanAttr,
  getNumericAttr,
  getOrInsertCSSRule,
  setBooleanAttr,
  setNumericAttr
} from "./utils/element-utils.js";
import { globalThis } from "./utils/server-safe-globals.js";
import { formatAsTimePhrase, formatTime } from "./utils/time.js";
import { MediaUIAttributes } from "./constants.js";
import { nouns } from "./labels/labels.js";
const Attributes = {
  REMAINING: "remaining",
  SHOW_DURATION: "showduration",
  NO_TOGGLE: "notoggle"
};
const CombinedAttributes = [
  ...Object.values(Attributes),
  MediaUIAttributes.MEDIA_CURRENT_TIME,
  MediaUIAttributes.MEDIA_DURATION,
  MediaUIAttributes.MEDIA_SEEKABLE
];
const ButtonPressedKeys = ["Enter", " "];
const DEFAULT_TIMES_SEP = "&nbsp;/&nbsp;";
const formatTimesLabel = (el, { timesSep = DEFAULT_TIMES_SEP } = {}) => {
  var _a, _b, _c, _d;
  const showRemaining = el.hasAttribute(Attributes.REMAINING);
  const showDuration = el.hasAttribute(Attributes.SHOW_DURATION);
  const currentTime = (_a = el.mediaCurrentTime) != null ? _a : 0;
  const [, seekableEnd] = (_b = el.mediaSeekable) != null ? _b : [];
  const endTime = (_d = (_c = el.mediaDuration) != null ? _c : seekableEnd) != null ? _d : 0;
  const timeLabel = showRemaining ? formatTime(0 - (endTime - currentTime)) : formatTime(currentTime);
  if (!showDuration)
    return timeLabel;
  return `${timeLabel}${timesSep}${formatTime(endTime)}`;
};
const DEFAULT_MISSING_TIME_PHRASE = "video not loaded, unknown time.";
const updateAriaValueText = (el) => {
  var _a;
  const currentTime = el.mediaCurrentTime;
  const [, seekableEnd] = (_a = el.mediaSeekable) != null ? _a : [];
  const endTime = el.mediaDuration || seekableEnd;
  if (currentTime == null || endTime == null) {
    el.setAttribute("aria-valuetext", DEFAULT_MISSING_TIME_PHRASE);
    return;
  }
  const showRemaining = el.hasAttribute(Attributes.REMAINING);
  const showDuration = el.hasAttribute(Attributes.SHOW_DURATION);
  const currentTimePhrase = showRemaining ? formatAsTimePhrase(0 - (endTime - currentTime)) : formatAsTimePhrase(currentTime);
  if (!showDuration) {
    el.setAttribute("aria-valuetext", currentTimePhrase);
    return;
  }
  const totalTimePhrase = formatAsTimePhrase(endTime);
  const fullPhrase = `${currentTimePhrase} of ${totalTimePhrase}`;
  el.setAttribute("aria-valuetext", fullPhrase);
};
class MediaTimeDisplay extends MediaTextDisplay {
  constructor() {
    super();
    __privateAdd(this, _slot, void 0);
    __privateSet(this, _slot, this.shadowRoot.querySelector("slot"));
    __privateGet(this, _slot).innerHTML = `${formatTimesLabel(this)}`;
    const { style } = getOrInsertCSSRule(this.shadowRoot, ":host:not([notoggle])");
    style.setProperty("cursor", "pointer");
    const { style: hoverStyle } = getOrInsertCSSRule(
      this.shadowRoot,
      ":host(:hover:not([notoggle]))"
    );
    hoverStyle.setProperty(
      "background",
      "var(--media-control-hover-background, rgba(50 50 70 / .7))"
    );
  }
  static get observedAttributes() {
    return [...super.observedAttributes, ...CombinedAttributes, "disabled"];
  }
  connectedCallback() {
    if (!this.hasAttribute("disabled")) {
      this.enable();
    }
    this.setAttribute("role", "progressbar");
    this.setAttribute("aria-label", nouns.PLAYBACK_TIME());
    const keyUpHandler = (evt) => {
      const { key } = evt;
      if (!ButtonPressedKeys.includes(key)) {
        this.removeEventListener("keyup", keyUpHandler);
        return;
      }
      this.toggleTimeDisplay();
    };
    this.addEventListener("keydown", (evt) => {
      const { metaKey, altKey, key } = evt;
      if (metaKey || altKey || !ButtonPressedKeys.includes(key)) {
        this.removeEventListener("keyup", keyUpHandler);
        return;
      }
      this.addEventListener("keyup", keyUpHandler);
    });
    this.addEventListener("click", this.toggleTimeDisplay);
    super.connectedCallback();
  }
  toggleTimeDisplay() {
    if (this.noToggle) {
      return;
    }
    if (this.hasAttribute("remaining")) {
      this.removeAttribute("remaining");
    } else {
      this.setAttribute("remaining", "");
    }
  }
  disconnectedCallback() {
    this.disable();
    super.disconnectedCallback();
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (CombinedAttributes.includes(attrName)) {
      this.update();
    } else if (attrName === "disabled" && newValue !== oldValue) {
      if (newValue == null) {
        this.enable();
      } else {
        this.disable();
      }
    }
    super.attributeChangedCallback(attrName, oldValue, newValue);
  }
  enable() {
    this.tabIndex = 0;
  }
  disable() {
    this.tabIndex = -1;
  }
  get remaining() {
    return getBooleanAttr(this, Attributes.REMAINING);
  }
  set remaining(show) {
    setBooleanAttr(this, Attributes.REMAINING, show);
  }
  get showDuration() {
    return getBooleanAttr(this, Attributes.SHOW_DURATION);
  }
  set showDuration(show) {
    setBooleanAttr(this, Attributes.SHOW_DURATION, show);
  }
  get noToggle() {
    return getBooleanAttr(this, Attributes.NO_TOGGLE);
  }
  set noToggle(notoggle) {
    setBooleanAttr(this, Attributes.NO_TOGGLE, notoggle);
  }
  get mediaDuration() {
    return getNumericAttr(this, MediaUIAttributes.MEDIA_DURATION);
  }
  set mediaDuration(time) {
    setNumericAttr(this, MediaUIAttributes.MEDIA_DURATION, time);
  }
  get mediaCurrentTime() {
    return getNumericAttr(this, MediaUIAttributes.MEDIA_CURRENT_TIME);
  }
  set mediaCurrentTime(time) {
    setNumericAttr(this, MediaUIAttributes.MEDIA_CURRENT_TIME, time);
  }
  get mediaSeekable() {
    const seekable = this.getAttribute(MediaUIAttributes.MEDIA_SEEKABLE);
    if (!seekable)
      return void 0;
    return seekable.split(":").map((time) => +time);
  }
  set mediaSeekable(range) {
    if (range == null) {
      this.removeAttribute(MediaUIAttributes.MEDIA_SEEKABLE);
      return;
    }
    this.setAttribute(MediaUIAttributes.MEDIA_SEEKABLE, range.join(":"));
  }
  update() {
    const timesLabel = formatTimesLabel(this);
    updateAriaValueText(this);
    if (timesLabel !== __privateGet(this, _slot).innerHTML) {
      __privateGet(this, _slot).innerHTML = timesLabel;
    }
  }
}
_slot = new WeakMap();
if (!globalThis.customElements.get("media-time-display")) {
  globalThis.customElements.define("media-time-display", MediaTimeDisplay);
}
var media_time_display_default = MediaTimeDisplay;
export {
  Attributes,
  media_time_display_default as default
};
