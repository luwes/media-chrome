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
var media_time_display_exports = {};
__export(media_time_display_exports, {
  Attributes: () => Attributes,
  default: () => media_time_display_default
});
module.exports = __toCommonJS(media_time_display_exports);
var import_media_text_display = require("./media-text-display.js");
var import_element_utils = require("./utils/element-utils.js");
var import_server_safe_globals = require("./utils/server-safe-globals.js");
var import_time = require("./utils/time.js");
var import_constants = require("./constants.js");
var import_labels = require("./labels/labels.js");
var _slot;
const Attributes = {
  REMAINING: "remaining",
  SHOW_DURATION: "showduration",
  NO_TOGGLE: "notoggle"
};
const CombinedAttributes = [
  ...Object.values(Attributes),
  import_constants.MediaUIAttributes.MEDIA_CURRENT_TIME,
  import_constants.MediaUIAttributes.MEDIA_DURATION,
  import_constants.MediaUIAttributes.MEDIA_SEEKABLE
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
  const timeLabel = showRemaining ? (0, import_time.formatTime)(0 - (endTime - currentTime)) : (0, import_time.formatTime)(currentTime);
  if (!showDuration)
    return timeLabel;
  return `${timeLabel}${timesSep}${(0, import_time.formatTime)(endTime)}`;
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
  const currentTimePhrase = showRemaining ? (0, import_time.formatAsTimePhrase)(0 - (endTime - currentTime)) : (0, import_time.formatAsTimePhrase)(currentTime);
  if (!showDuration) {
    el.setAttribute("aria-valuetext", currentTimePhrase);
    return;
  }
  const totalTimePhrase = (0, import_time.formatAsTimePhrase)(endTime);
  const fullPhrase = `${currentTimePhrase} of ${totalTimePhrase}`;
  el.setAttribute("aria-valuetext", fullPhrase);
};
class MediaTimeDisplay extends import_media_text_display.MediaTextDisplay {
  constructor() {
    super();
    __privateAdd(this, _slot, void 0);
    __privateSet(this, _slot, this.shadowRoot.querySelector("slot"));
    __privateGet(this, _slot).innerHTML = `${formatTimesLabel(this)}`;
    const { style } = (0, import_element_utils.getOrInsertCSSRule)(this.shadowRoot, ":host:not([notoggle])");
    style.setProperty("cursor", "pointer");
    const { style: hoverStyle } = (0, import_element_utils.getOrInsertCSSRule)(
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
    this.setAttribute("aria-label", import_labels.nouns.PLAYBACK_TIME());
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
    return (0, import_element_utils.getBooleanAttr)(this, Attributes.REMAINING);
  }
  set remaining(show) {
    (0, import_element_utils.setBooleanAttr)(this, Attributes.REMAINING, show);
  }
  get showDuration() {
    return (0, import_element_utils.getBooleanAttr)(this, Attributes.SHOW_DURATION);
  }
  set showDuration(show) {
    (0, import_element_utils.setBooleanAttr)(this, Attributes.SHOW_DURATION, show);
  }
  get noToggle() {
    return (0, import_element_utils.getBooleanAttr)(this, Attributes.NO_TOGGLE);
  }
  set noToggle(notoggle) {
    (0, import_element_utils.setBooleanAttr)(this, Attributes.NO_TOGGLE, notoggle);
  }
  get mediaDuration() {
    return (0, import_element_utils.getNumericAttr)(this, import_constants.MediaUIAttributes.MEDIA_DURATION);
  }
  set mediaDuration(time) {
    (0, import_element_utils.setNumericAttr)(this, import_constants.MediaUIAttributes.MEDIA_DURATION, time);
  }
  get mediaCurrentTime() {
    return (0, import_element_utils.getNumericAttr)(this, import_constants.MediaUIAttributes.MEDIA_CURRENT_TIME);
  }
  set mediaCurrentTime(time) {
    (0, import_element_utils.setNumericAttr)(this, import_constants.MediaUIAttributes.MEDIA_CURRENT_TIME, time);
  }
  get mediaSeekable() {
    const seekable = this.getAttribute(import_constants.MediaUIAttributes.MEDIA_SEEKABLE);
    if (!seekable)
      return void 0;
    return seekable.split(":").map((time) => +time);
  }
  set mediaSeekable(range) {
    if (range == null) {
      this.removeAttribute(import_constants.MediaUIAttributes.MEDIA_SEEKABLE);
      return;
    }
    this.setAttribute(import_constants.MediaUIAttributes.MEDIA_SEEKABLE, range.join(":"));
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
if (!import_server_safe_globals.globalThis.customElements.get("media-time-display")) {
  import_server_safe_globals.globalThis.customElements.define("media-time-display", MediaTimeDisplay);
}
var media_time_display_default = MediaTimeDisplay;
