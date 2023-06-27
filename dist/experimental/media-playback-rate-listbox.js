var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
var _onChange, onChange_fn;
import MediaChromeListbox from "./media-chrome-listbox.js";
import { globalThis, document } from "../utils/server-safe-globals.js";
import { MediaUIAttributes, MediaUIEvents } from "../constants.js";
const slotTemplate = document.createElement("template");
slotTemplate.innerHTML = `
  <style>
    media-chrome-listitem {
      white-space: var(--media-playback-rate-listbox-white-space, nowrap);
    }
  </style>
`;
class MediaPlaybackrateListbox extends MediaChromeListbox {
  constructor() {
    super({ slotTemplate });
    __privateAdd(this, _onChange);
  }
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      "aria-multiselectable",
      MediaUIAttributes.MEDIA_PLAYBACK_RATE
    ];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === MediaUIAttributes.MEDIA_PLAYBACK_RATE && oldValue !== newValue) {
      this.value = newValue;
    } else if (attrName === "aria-multiselectable") {
      this.removeAttribute("aria-multiselectable");
      console.warn("Playback rate listbox doesn't support multiple selections.");
    }
    super.attributeChangedCallback(attrName, oldValue, newValue);
  }
  connectedCallback() {
    this.addEventListener("change", __privateMethod(this, _onChange, onChange_fn));
    super.connectedCallback();
  }
  disconnectedCallback() {
    this.removeEventListener("change", __privateMethod(this, _onChange, onChange_fn));
    super.disconnectedCallback();
  }
}
_onChange = new WeakSet();
onChange_fn = function() {
  var _a;
  const selectedOption = (_a = this.selectedOptions[0]) == null ? void 0 : _a.value;
  if (!selectedOption)
    return;
  const event = new globalThis.CustomEvent(
    MediaUIEvents.MEDIA_PLAYBACK_RATE_REQUEST,
    {
      composed: true,
      bubbles: true,
      detail: selectedOption
    }
  );
  this.dispatchEvent(event);
};
if (!globalThis.customElements.get("media-playback-rate-listbox")) {
  globalThis.customElements.define("media-playback-rate-listbox", MediaPlaybackrateListbox);
}
var media_playback_rate_listbox_default = MediaPlaybackrateListbox;
export {
  media_playback_rate_listbox_default as default
};
