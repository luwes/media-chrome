import { verbs } from "../labels/labels.js";
import { getSlotted, updateIconText } from "./element-utils.js";
function updateAriaLabel(el) {
  const seekOffset = Math.abs(el.seekOffset);
  const label = verbs.SEEK_BACK_N_SECS({ seekOffset });
  el.setAttribute("aria-label", label);
}
function updateSeekIconValue(el) {
  const svg = getSlotted(el, "icon");
  const value = el.seekOffset;
  updateIconText(svg, value);
}
export {
  updateAriaLabel,
  updateSeekIconValue
};
