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
var seek_exports = {};
__export(seek_exports, {
  updateAriaLabel: () => updateAriaLabel,
  updateSeekIconValue: () => updateSeekIconValue
});
module.exports = __toCommonJS(seek_exports);
var import_labels = require("../labels/labels.js");
var import_element_utils = require("./element-utils.js");
function updateAriaLabel(el) {
  const seekOffset = Math.abs(el.seekOffset);
  const label = import_labels.verbs.SEEK_BACK_N_SECS({ seekOffset });
  el.setAttribute("aria-label", label);
}
function updateSeekIconValue(el) {
  const svg = (0, import_element_utils.getSlotted)(el, "icon");
  const value = el.seekOffset;
  (0, import_element_utils.updateIconText)(svg, value);
}
