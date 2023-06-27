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
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
var _boxes, _previewBox, _currentBox, _boxPaddingLeft, _boxPaddingRight, _mediaSeekableEnd, mediaSeekableEnd_get, _mediaSeekableStart, mediaSeekableStart_get, _getBoxPosition, getBoxPosition_fn, _pointermoveHandler, _rangeEntered, _offRangeHandler, _trackMouse, _stopTrackingMouse, _rangepointermoveHandler, _enableBoxes, enableBoxes_fn, _disableBoxes, disableBoxes_fn;
import { MediaChromeRange } from "./media-chrome-range.js";
import { globalThis, document } from "./utils/server-safe-globals.js";
import { MediaUIEvents, MediaUIAttributes } from "./constants.js";
import { nouns } from "./labels/labels.js";
import { formatAsTimePhrase } from "./utils/time.js";
import {
  getOrInsertCSSRule,
  closestComposedNode,
  getBooleanAttr,
  setBooleanAttr,
  getNumericAttr,
  setNumericAttr,
  getStringAttr,
  setStringAttr
} from "./utils/element-utils.js";
const DEFAULT_MISSING_TIME_PHRASE = "video not loaded, unknown time.";
const updateAriaValueText = (el) => {
  const range = el.range;
  const currentTimePhrase = formatAsTimePhrase(+range.value);
  const totalTimePhrase = formatAsTimePhrase(+range.max);
  const fullPhrase = !(currentTimePhrase && totalTimePhrase) ? DEFAULT_MISSING_TIME_PHRASE : `${currentTimePhrase} of ${totalTimePhrase}`;
  range.setAttribute("aria-valuetext", fullPhrase);
};
const template = document.createElement("template");
template.innerHTML = `
  <style>
    :host {
      --media-preview-border-radius: 3px;
      --media-box-padding-left: 10px;
      --media-box-padding-right: 10px;
    }

    #preview-rail,
    #current-rail {
      ${""}
      width: 1%;
      position: absolute;
      left: 0;
      bottom: 100%;
      pointer-events: none;
    }

    [part~="box"] {
      ${""}
      position: absolute;
      bottom: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      transform: translateX(-50%);
    }

    [part~="preview-box"] {
      transition-property: var(--media-preview-transition-property, visibility, opacity);
      transition-duration: var(--media-preview-transition-duration-out, .25s);
      transition-delay: var(--media-preview-transition-delay-out, 0s);
      visibility: hidden;
      opacity: 0;
    }

    :host([${MediaUIAttributes.MEDIA_PREVIEW_IMAGE}]:hover) [part~="preview-box"],
    :host([${MediaUIAttributes.MEDIA_PREVIEW_TIME}]:hover) [part~="preview-box"] {
      transition-duration: var(--media-preview-transition-duration-in, .5s);
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
      opacity: 1;
    }

    media-preview-thumbnail,
    ::slotted(media-preview-thumbnail) {
      visibility: hidden;
      ${""}
      transition: visibility 0s .25s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-thumbnail-background, var(--media-preview-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)))));
      box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
      max-width: var(--media-preview-thumbnail-max-width, 180px);
      max-height: var(--media-preview-thumbnail-max-height, 160px);
      min-width: var(--media-preview-thumbnail-min-width, 120px);
      min-height: var(--media-preview-thumbnail-min-height, 80px);
      border: var(--media-preview-thumbnail-border);
      border-radius: var(--media-preview-thumbnail-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
    }

    :host([${MediaUIAttributes.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
    :host([${MediaUIAttributes.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
    }

    media-preview-time-display,
    ::slotted(media-preview-time-display) {
      min-width: 0;
      ${""}
      transition: min-width 0s, border-radius 0s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-time-background, var(--media-preview-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)))));
      border-radius: var(--media-preview-time-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius)
        var(--media-preview-border-radius) var(--media-preview-border-radius));
      padding: var(--media-preview-time-padding, 1px 10px 0);
      margin: var(--media-preview-time-margin, 0 0 10px);
      text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
    }

    :host([${MediaUIAttributes.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
    :host([${MediaUIAttributes.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      min-width: 100%;
      border-radius: var(--media-preview-time-border-radius,
        0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
    }

    :host([${MediaUIAttributes.MEDIA_PREVIEW_TIME}]:hover) {
      --media-time-range-hover-display: block;
    }
  </style>
  <div id="preview-rail">
    <slot name="preview" part="box preview-box">
      <media-preview-thumbnail></media-preview-thumbnail>
      <media-preview-time-display></media-preview-time-display>
    </slot>
  </div>
  <div id="current-rail">
    <slot name="current" part="box current-box">
      ${""}
    </slot>
  </div>
`;
class MediaTimeRange extends MediaChromeRange {
  constructor() {
    super();
    __privateAdd(this, _mediaSeekableEnd);
    __privateAdd(this, _mediaSeekableStart);
    __privateAdd(this, _getBoxPosition);
    __privateAdd(this, _enableBoxes);
    __privateAdd(this, _disableBoxes);
    __privateAdd(this, _boxes, void 0);
    __privateAdd(this, _previewBox, void 0);
    __privateAdd(this, _currentBox, void 0);
    __privateAdd(this, _boxPaddingLeft, void 0);
    __privateAdd(this, _boxPaddingRight, void 0);
    __privateAdd(this, _pointermoveHandler, (evt) => {
      if ([...__privateGet(this, _boxes)].some((b) => evt.composedPath().includes(b)))
        return;
      this.updatePointerBar(evt);
      const duration = this.mediaDuration;
      if (!duration)
        return;
      const rangeRect = this.range.getBoundingClientRect();
      let mouseRatio = (evt.clientX - rangeRect.left - this.thumbWidth / 2) / (rangeRect.width - this.thumbWidth);
      mouseRatio = Math.max(0, Math.min(1, mouseRatio));
      const boxPos = __privateMethod(this, _getBoxPosition, getBoxPosition_fn).call(this, __privateGet(this, _previewBox), mouseRatio);
      const { style } = getOrInsertCSSRule(this.shadowRoot, "#preview-rail");
      style.transform = `translateX(${boxPos})`;
      const detail = mouseRatio * duration;
      const mediaPreviewEvt = new globalThis.CustomEvent(
        MediaUIEvents.MEDIA_PREVIEW_REQUEST,
        { composed: true, bubbles: true, detail }
      );
      this.dispatchEvent(mediaPreviewEvt);
    });
    __privateAdd(this, _rangeEntered, false);
    __privateAdd(this, _offRangeHandler, (evt) => {
      var _a;
      if (!evt.composedPath().includes(this) || [...__privateGet(this, _boxes)].some((b) => evt.composedPath().includes(b))) {
        (_a = globalThis.window) == null ? void 0 : _a.removeEventListener("pointermove", __privateGet(this, _offRangeHandler));
        __privateSet(this, _rangeEntered, false);
        __privateGet(this, _stopTrackingMouse).call(this);
      }
    });
    __privateAdd(this, _trackMouse, () => {
      var _a;
      (_a = globalThis.window) == null ? void 0 : _a.addEventListener("pointermove", __privateGet(this, _pointermoveHandler), false);
    });
    __privateAdd(this, _stopTrackingMouse, () => {
      var _a;
      (_a = globalThis.window) == null ? void 0 : _a.removeEventListener("pointermove", __privateGet(this, _pointermoveHandler));
      const endEvt = new globalThis.CustomEvent(MediaUIEvents.MEDIA_PREVIEW_REQUEST, {
        composed: true,
        bubbles: true,
        detail: null
      });
      this.dispatchEvent(endEvt);
    });
    __privateAdd(this, _rangepointermoveHandler, () => {
      var _a;
      const mediaDurationStr = this.getAttribute(
        MediaUIAttributes.MEDIA_DURATION
      );
      if (!__privateGet(this, _rangeEntered) && mediaDurationStr) {
        __privateSet(this, _rangeEntered, true);
        __privateGet(this, _trackMouse).call(this);
        (_a = globalThis.window) == null ? void 0 : _a.addEventListener("pointermove", __privateGet(this, _offRangeHandler), false);
      }
    });
    this.container.appendChild(template.content.cloneNode(true));
    this.range.addEventListener("input", () => {
      cancelAnimationFrame(this._refreshId);
      const newTime = this.range.value;
      const detail = newTime;
      const evt = new globalThis.CustomEvent(MediaUIEvents.MEDIA_SEEK_REQUEST, {
        composed: true,
        bubbles: true,
        detail
      });
      this.dispatchEvent(evt);
    });
    this._refreshBar = () => {
      const delta = (performance.now() - this._updateTimestamp) / 1e3;
      this.range.value = this.mediaCurrentTime + delta * this.mediaPlaybackRate;
      this.updateBar();
      this.updateCurrentBox();
      this._refreshId = requestAnimationFrame(this._refreshBar);
    };
    __privateSet(this, _boxes, this.shadowRoot.querySelectorAll('[part~="box"]'));
    __privateSet(this, _previewBox, this.shadowRoot.querySelector('[part~="preview-box"]'));
    __privateSet(this, _currentBox, this.shadowRoot.querySelector('[part~="current-box"]'));
    const computedStyle = getComputedStyle(this);
    __privateSet(this, _boxPaddingLeft, parseInt(
      computedStyle.getPropertyValue("--media-box-padding-left")
    ));
    __privateSet(this, _boxPaddingRight, parseInt(
      computedStyle.getPropertyValue("--media-box-padding-right")
    ));
    __privateMethod(this, _enableBoxes, enableBoxes_fn).call(this);
  }
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_PAUSED,
      MediaUIAttributes.MEDIA_DURATION,
      MediaUIAttributes.MEDIA_SEEKABLE,
      MediaUIAttributes.MEDIA_CURRENT_TIME,
      MediaUIAttributes.MEDIA_PREVIEW_IMAGE,
      MediaUIAttributes.MEDIA_PREVIEW_TIME,
      MediaUIAttributes.MEDIA_BUFFERED,
      MediaUIAttributes.MEDIA_PLAYBACK_RATE,
      MediaUIAttributes.MEDIA_LOADING,
      MediaUIAttributes.MEDIA_ENDED
    ];
  }
  connectedCallback() {
    this.range.setAttribute("aria-label", nouns.SEEK());
    super.connectedCallback();
  }
  disconnectedCallback() {
    cancelAnimationFrame(this._refreshId);
    super.disconnectedCallback();
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    var _a, _b, _c, _d, _e;
    if (attrName === MediaUIAttributes.MEDIA_CURRENT_TIME || attrName === MediaUIAttributes.MEDIA_PAUSED || attrName === MediaUIAttributes.MEDIA_ENDED || attrName === MediaUIAttributes.MEDIA_LOADING) {
      this._updateTimestamp = performance.now();
      this.range.value = this.mediaCurrentTime;
      updateAriaValueText(this);
      this.updateBar();
      this.updateCurrentBox();
      cancelAnimationFrame(this._refreshId);
      if (!this.mediaPaused && !this.mediaLoading) {
        this._refreshId = requestAnimationFrame(this._refreshBar);
      }
    }
    if (attrName === MediaUIAttributes.MEDIA_DURATION) {
      this.range.max = (_b = (_a = __privateGet(this, _mediaSeekableEnd, mediaSeekableEnd_get)) != null ? _a : this.mediaDuration) != null ? _b : 1e3;
      updateAriaValueText(this);
      this.updateBar();
      this.updateCurrentBox();
    }
    if (attrName === MediaUIAttributes.MEDIA_SEEKABLE) {
      this.range.min = (_c = __privateGet(this, _mediaSeekableStart, mediaSeekableStart_get)) != null ? _c : 0;
      this.range.max = (_e = (_d = __privateGet(this, _mediaSeekableEnd, mediaSeekableEnd_get)) != null ? _d : this.mediaDuration) != null ? _e : 1e3;
      updateAriaValueText(this);
      this.updateBar();
    }
    if (attrName === MediaUIAttributes.MEDIA_BUFFERED) {
      this.updateBar();
    }
    if (attrName === "disabled") {
      if (newValue == null) {
        __privateMethod(this, _enableBoxes, enableBoxes_fn).call(this);
      } else {
        __privateMethod(this, _disableBoxes, disableBoxes_fn).call(this);
      }
    }
    super.attributeChangedCallback(attrName, oldValue, newValue);
  }
  get mediaPaused() {
    return getBooleanAttr(this, MediaUIAttributes.MEDIA_PAUSED);
  }
  set mediaPaused(value) {
    setBooleanAttr(this, MediaUIAttributes.MEDIA_PAUSED, value);
  }
  get mediaLoading() {
    return getBooleanAttr(this, MediaUIAttributes.MEDIA_LOADING);
  }
  set mediaLoading(value) {
    setBooleanAttr(this, MediaUIAttributes.MEDIA_LOADING, value);
  }
  get mediaDuration() {
    return getNumericAttr(this, MediaUIAttributes.MEDIA_DURATION);
  }
  set mediaDuration(value) {
    setNumericAttr(this, MediaUIAttributes.MEDIA_DURATION, value);
  }
  get mediaCurrentTime() {
    return getNumericAttr(this, MediaUIAttributes.MEDIA_CURRENT_TIME);
  }
  set mediaCurrentTime(value) {
    setNumericAttr(this, MediaUIAttributes.MEDIA_CURRENT_TIME, value);
  }
  get mediaPlaybackRate() {
    return getNumericAttr(this, MediaUIAttributes.MEDIA_PLAYBACK_RATE, 1);
  }
  set mediaPlaybackRate(value) {
    setNumericAttr(this, MediaUIAttributes.MEDIA_PLAYBACK_RATE, value);
  }
  get mediaBuffered() {
    const buffered = this.getAttribute(MediaUIAttributes.MEDIA_BUFFERED);
    if (!buffered)
      return [];
    return buffered.split(" ").map((timePair) => timePair.split(":").map((timeStr) => +timeStr));
  }
  set mediaBuffered(list) {
    if (!list) {
      this.removeAttribute(MediaUIAttributes.MEDIA_BUFFERED);
      return;
    }
    const strVal = list.map((n1, n2) => `${n1}:${n2}`).join(" ");
    this.setAttribute(MediaUIAttributes.MEDIA_BUFFERED, strVal);
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
  get mediaPreviewImage() {
    return getStringAttr(this, MediaUIAttributes.MEDIA_PREVIEW_IMAGE);
  }
  set mediaPreviewImage(value) {
    setStringAttr(this, MediaUIAttributes.MEDIA_PREVIEW_IMAGE, value);
  }
  get mediaPreviewTime() {
    return getNumericAttr(this, MediaUIAttributes.MEDIA_PREVIEW_TIME);
  }
  set mediaPreviewTime(value) {
    setNumericAttr(this, MediaUIAttributes.MEDIA_PREVIEW_TIME, value);
  }
  get mediaEnded() {
    return getBooleanAttr(this, MediaUIAttributes.MEDIA_ENDED);
  }
  set mediaEnded(value) {
    setBooleanAttr(this, MediaUIAttributes.MEDIA_ENDED, value);
  }
  getRelativeValues() {
    const defaultRelativeValues = super.getRelativeValues();
    if (!this.mediaEnded)
      return defaultRelativeValues;
    return {
      ...defaultRelativeValues,
      relativeValue: defaultRelativeValues.relativeMax
    };
  }
  getBarColors() {
    var _a;
    let colorsArray = super.getBarColors();
    const { range } = this;
    const relativeMax = range.max - range.min;
    const buffered = this.mediaBuffered;
    if (!buffered.length || !Number.isFinite(relativeMax) || relativeMax <= 0) {
      return colorsArray;
    }
    let relativeBufferedEnd;
    if (!this.mediaEnded) {
      const currentTime = this.mediaCurrentTime;
      const [, bufferedEnd = range.min] = (_a = buffered.find(
        ([start, end]) => start <= currentTime && currentTime <= end
      )) != null ? _a : [];
      relativeBufferedEnd = bufferedEnd - range.min;
    } else {
      relativeBufferedEnd = relativeMax;
    }
    const buffPercent = relativeBufferedEnd / relativeMax * 100;
    colorsArray.splice(1, 0, [
      "var(--media-time-range-buffered-color, rgb(255 255 255 / .4))",
      buffPercent
    ]);
    return colorsArray;
  }
  updateCurrentBox() {
    if (!__privateGet(this, _currentBox).assignedElements().length)
      return;
    const boxRatio = this.range.value / (this.range.max - this.range.min);
    const boxPos = __privateMethod(this, _getBoxPosition, getBoxPosition_fn).call(this, __privateGet(this, _currentBox), boxRatio);
    const { style } = getOrInsertCSSRule(this.shadowRoot, "#current-rail");
    style.transform = `translateX(${boxPos})`;
  }
}
_boxes = new WeakMap();
_previewBox = new WeakMap();
_currentBox = new WeakMap();
_boxPaddingLeft = new WeakMap();
_boxPaddingRight = new WeakMap();
_mediaSeekableEnd = new WeakSet();
mediaSeekableEnd_get = function() {
  var _a;
  const [, end] = (_a = this.mediaSeekable) != null ? _a : [];
  return end;
};
_mediaSeekableStart = new WeakSet();
mediaSeekableStart_get = function() {
  var _a;
  const [start] = (_a = this.mediaSeekable) != null ? _a : [];
  return start;
};
_getBoxPosition = new WeakSet();
getBoxPosition_fn = function(box, ratio) {
  var _a;
  let position = `${ratio * 100 * 100}%`;
  const boxWidth = box.offsetWidth;
  if (!boxWidth)
    return position;
  const bounds = (_a = this.getAttribute("bounds") ? closestComposedNode(this, `#${this.getAttribute("bounds")}`) : this.parentElement) != null ? _a : this;
  const rangeRect = this.range.getBoundingClientRect();
  const mediaBoundsRect = bounds.getBoundingClientRect();
  const boxMin = (__privateGet(this, _boxPaddingLeft) - (rangeRect.left - mediaBoundsRect.left - boxWidth / 2)) / rangeRect.width * 100;
  const boxMax = (mediaBoundsRect.right - rangeRect.left - boxWidth / 2 - __privateGet(this, _boxPaddingRight)) / rangeRect.width * 100;
  if (!Number.isNaN(boxMin))
    position = `max(${boxMin * 100}%, ${position})`;
  if (!Number.isNaN(boxMax))
    position = `min(${position}, ${boxMax * 100}%)`;
  return position;
};
_pointermoveHandler = new WeakMap();
_rangeEntered = new WeakMap();
_offRangeHandler = new WeakMap();
_trackMouse = new WeakMap();
_stopTrackingMouse = new WeakMap();
_rangepointermoveHandler = new WeakMap();
_enableBoxes = new WeakSet();
enableBoxes_fn = function() {
  this.addEventListener("pointermove", __privateGet(this, _rangepointermoveHandler), false);
};
_disableBoxes = new WeakSet();
disableBoxes_fn = function() {
  var _a;
  (_a = globalThis.window) == null ? void 0 : _a.removeEventListener("pointermove", __privateGet(this, _offRangeHandler));
  this.removeEventListener("pointermove", __privateGet(this, _rangepointermoveHandler));
  __privateSet(this, _rangeEntered, false);
  __privateGet(this, _stopTrackingMouse).call(this);
};
if (!globalThis.customElements.get("media-time-range")) {
  globalThis.customElements.define("media-time-range", MediaTimeRange);
}
var media_time_range_default = MediaTimeRange;
export {
  media_time_range_default as default
};
