var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
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
var _mediaController, _onFocusIn, _onFocusOut;
import { MediaStateReceiverAttributes } from "./constants.js";
import { globalThis, document } from "./utils/server-safe-globals.js";
import { getOrInsertCSSRule } from "./utils/element-utils.js";
const template = document.createElement("template");
const thumbStyles = `
  height: var(--thumb-height);
  width: var(--media-range-thumb-width, 10px);
  border: var(--media-range-thumb-border, none);
  border-radius: var(--media-range-thumb-border-radius, 10px);
  background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
  box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
  cursor: pointer;
  transition: var(--media-range-thumb-transition, none);
  transform: var(--media-range-thumb-transform, none);
  opacity: var(--media-range-thumb-opacity, 1);
`;
const trackStyles = `
  min-width: 40px;
  height: var(--track-height);
  border: var(--media-range-track-border, none);
  outline: var(--media-range-track-outline);
  outline-offset: var(--media-range-track-outline-offset);
  border-radius: var(--media-range-track-border-radius, 1px);
  background: var(--media-range-track-progress-internal, var(--media-range-track-background, rgb(255 255 255 / .2)));
  backdrop-filter: var(--media-range-track-backdrop-filter);
  box-shadow: var(--media-range-track-box-shadow, none);
  transition: var(--media-range-track-transition, none);
  transform: translate(var(--media-range-track-translate-x, 0), var(--media-range-track-translate-y, 0));
  cursor: pointer;
`;
template.innerHTML = `
  <style>
    :host {
      --thumb-height: var(--media-range-thumb-height, 10px);
      --track-height: var(--media-range-track-height, 4px);
      --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
      --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

      vertical-align: middle;
      box-sizing: border-box;
      display: inline-block;
      position: relative;
      background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
      transition: background .15s linear;
      width: 100px;
      height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
      padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      pointer-events: auto;
      ${""}
      font-size: 0;
      box-shadow: var(--_focus-visible-box-shadow, none);
    }

    ${""}
    input[type=range]:focus {
      outline: 0;
    }
    input[type=range]:focus::-webkit-slider-runnable-track {
      outline: 0;
    }

    :host(:hover) {
      background: var(--media-control-hover-background, rgb(50 50 70 / .7));
    }

    #container {
      position: relative;
      height: 100%;
    }

    input[type=range] {
      ${""}
      -webkit-appearance: none; ${""}
      background: transparent; ${""}

      ${""}
      min-height: 100%;
      width: var(--media-range-track-width, 100%); ${""}

      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }

    ${""}
    input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
      ${thumbStyles}
      ${""}
      margin-top: calc(calc(0px - var(--thumb-height) + var(--track-height)) / 2);
    }

    ${""}
    input[type=range]::-moz-range-thumb {
      ${thumbStyles}
      translate: var(--media-range-track-translate-x, 0) var(--media-range-track-translate-y, 0);
    }

    input[type=range]::-webkit-slider-runnable-track { ${trackStyles} }
    input[type=range]::-moz-range-track { ${trackStyles} }
    input[type=range]::-ms-track {
      ${""}
      width: 100%;
      cursor: pointer;
      ${""}
      background: transparent;
      border-color: transparent;
      color: transparent;

      ${trackStyles}
    }

    #background,
    #pointer {
      width: var(--media-range-track-width, 100%);
      height: var(--track-height);
      border-radius: var(--media-range-track-border-radius, 1px);
      position: absolute;
      top: 50%;
      transform: translate(var(--media-range-track-translate-x, 0px), calc(var(--media-range-track-translate-y, 0px) - 50%));
    }

    #background {
      min-width: 40px;
      background: var(--media-range-track-background, rgb(255 255 255 / .2));
      backdrop-filter: var(--media-range-track-background-backdrop-filter);
    }

    #pointer {
      background: var(--media-range-track-pointer-background);
      border-right: var(--media-range-track-pointer-border-right);
      transition: visibility .25s, opacity .25s;
      visibility: hidden;
      opacity: 0;
    }

    :host(:hover) #pointer {
      transition: visibility .5s, opacity .5s;
      visibility: visible;
      opacity: 1;
    }

    #hoverzone {
      ${""}
      z-index: 1;
      display: var(--media-time-range-hover-display, none);
      position: absolute;
      width: 100%;
      bottom: var(--media-time-range-hover-bottom, -5px);
      height: var(--media-time-range-hover-height, max(calc(100% + 5px), 20px));
    }

    #range {
      z-index: 2;
      position: relative;
      height: var(--media-range-track-height, 4px);
    }

    input[type=range]:disabled::-webkit-slider-thumb {
      background-color: #777;
    }

    input[type=range]:disabled::-webkit-slider-runnable-track {
      background-color: #777;
    }
  </style>
  <div id="container">
    <div id="background"></div>
    <div id="pointer"></div>
    <div id="hoverzone"></div>
    <input id="range" type="range" min="0" max="1000" step="any" value="0">
  </div>
`;
class MediaChromeRange extends globalThis.HTMLElement {
  constructor() {
    super();
    __publicField(this, "thumbWidth");
    __privateAdd(this, _mediaController, void 0);
    __privateAdd(this, _onFocusIn, () => {
      if (this.range.matches(":focus-visible")) {
        const { style } = getOrInsertCSSRule(this.shadowRoot, ":host");
        style.setProperty("--_focus-visible-box-shadow", "var(--_focus-box-shadow)");
      }
    });
    __privateAdd(this, _onFocusOut, () => {
      const { style } = getOrInsertCSSRule(this.shadowRoot, ":host");
      style.removeProperty("--_focus-visible-box-shadow");
    });
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    const { style } = getOrInsertCSSRule(this.shadowRoot, ":host");
    style.setProperty("display", `var(--media-control-display, var(--${this.localName}-display, inline-block))`);
    this.container = this.shadowRoot.querySelector("#container");
    this.range = this.shadowRoot.querySelector("#range");
    this.range.addEventListener("input", this.updateBar.bind(this));
    this.thumbWidth = parseInt(getComputedStyle(this).getPropertyValue("--media-range-thumb-width") || "10", 10);
  }
  static get observedAttributes() {
    return [
      "disabled",
      "aria-disabled",
      MediaStateReceiverAttributes.MEDIA_CONTROLLER
    ];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    var _a, _b, _c, _d, _e;
    if (attrName === MediaStateReceiverAttributes.MEDIA_CONTROLLER) {
      if (oldValue) {
        (_b = (_a = __privateGet(this, _mediaController)) == null ? void 0 : _a.unassociateElement) == null ? void 0 : _b.call(_a, this);
        __privateSet(this, _mediaController, null);
      }
      if (newValue) {
        __privateSet(this, _mediaController, (_c = this.getRootNode()) == null ? void 0 : _c.getElementById(newValue));
        (_e = (_d = __privateGet(this, _mediaController)) == null ? void 0 : _d.associateElement) == null ? void 0 : _e.call(_d, this);
      }
    } else if (attrName === "disabled" || attrName === "aria-disabled" && oldValue !== newValue) {
      if (newValue == null) {
        this.range.removeAttribute(attrName);
      } else {
        this.range.setAttribute(attrName, newValue);
      }
    }
  }
  connectedCallback() {
    var _a, _b, _c;
    const mediaControllerId = this.getAttribute(
      MediaStateReceiverAttributes.MEDIA_CONTROLLER
    );
    if (mediaControllerId) {
      __privateSet(this, _mediaController, (_a = this.getRootNode()) == null ? void 0 : _a.getElementById(mediaControllerId));
      (_c = (_b = __privateGet(this, _mediaController)) == null ? void 0 : _b.associateElement) == null ? void 0 : _c.call(_b, this);
    }
    this.updateBar();
    this.shadowRoot.addEventListener("focusin", __privateGet(this, _onFocusIn));
    this.shadowRoot.addEventListener("focusout", __privateGet(this, _onFocusOut));
  }
  disconnectedCallback() {
    var _a, _b;
    (_b = (_a = __privateGet(this, _mediaController)) == null ? void 0 : _a.unassociateElement) == null ? void 0 : _b.call(_a, this);
    __privateSet(this, _mediaController, null);
    this.shadowRoot.removeEventListener("focusin", __privateGet(this, _onFocusIn));
    this.shadowRoot.removeEventListener("focusout", __privateGet(this, _onFocusOut));
  }
  updatePointerBar(evt) {
    const rangeRect = this.range.getBoundingClientRect();
    let mousePercent = (evt.clientX - rangeRect.left) / rangeRect.width;
    mousePercent = Math.max(0, Math.min(1, mousePercent));
    const { style } = getOrInsertCSSRule(this.shadowRoot, "#pointer");
    style.setProperty("width", `${mousePercent * rangeRect.width}px`);
  }
  updateBar() {
    const colorArray = this.getBarColors();
    let gradientStr = "linear-gradient(to right, ";
    let prevPercent = 0;
    colorArray.forEach((color) => {
      if (color[1] < prevPercent)
        return;
      gradientStr = gradientStr + `${color[0]} ${prevPercent}%, ${color[0]} ${color[1]}%,`;
      prevPercent = color[1];
    });
    gradientStr = gradientStr.slice(0, gradientStr.length - 1) + ")";
    const { style } = getOrInsertCSSRule(this.shadowRoot, "#range");
    style.setProperty("--media-range-track-progress-internal", gradientStr);
  }
  getRelativeValues() {
    const { range } = this;
    return {
      relativeValue: range.value - range.min,
      relativeMax: range.max - range.min
    };
  }
  getBarColors() {
    const range = this.range;
    const {
      relativeValue,
      relativeMax
    } = this.getRelativeValues();
    const rangePercent = relativeValue / relativeMax * 100;
    let thumbPercent = 0;
    if (!!relativeValue && relativeValue < relativeMax) {
      const thumbOffset = this.thumbWidth * (0.5 - rangePercent / 100);
      thumbPercent = thumbOffset / range.offsetWidth * 100;
    }
    let colorArray = [
      ["var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)))", rangePercent + thumbPercent],
      ["var(--media-range-track-color, transparent)", 100]
    ];
    return colorArray;
  }
  get keysUsed() {
    return ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"];
  }
}
_mediaController = new WeakMap();
_onFocusIn = new WeakMap();
_onFocusOut = new WeakMap();
if (!globalThis.customElements.get("media-chrome-range")) {
  globalThis.customElements.define("media-chrome-range", MediaChromeRange);
}
var media_chrome_range_default = MediaChromeRange;
export {
  MediaChromeRange,
  media_chrome_range_default as default
};
