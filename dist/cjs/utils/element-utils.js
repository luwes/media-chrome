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
var element_utils_exports = {};
__export(element_utils_exports, {
  closestComposedNode: () => closestComposedNode,
  containsComposedNode: () => containsComposedNode,
  getAllSlotted: () => getAllSlotted,
  getBooleanAttr: () => getBooleanAttr,
  getNumericAttr: () => getNumericAttr,
  getOrInsertCSSRule: () => getOrInsertCSSRule,
  getSlotted: () => getSlotted,
  getStringAttr: () => getStringAttr,
  setBooleanAttr: () => setBooleanAttr,
  setNumericAttr: () => setNumericAttr,
  setStringAttr: () => setStringAttr,
  updateIconText: () => updateIconText
});
module.exports = __toCommonJS(element_utils_exports);
const updateIconText = (svg, value, selector = ".value") => {
  const node = svg.querySelector(selector);
  if (!node)
    return;
  node.textContent = value;
};
const getAllSlotted = (el, name) => {
  const slotSelector = `slot[name="${name}"]`;
  const slot = el.shadowRoot.querySelector(slotSelector);
  if (!slot)
    return [];
  return slot.children;
};
const getSlotted = (el, name) => getAllSlotted(el, name)[0];
const containsComposedNode = (rootNode, childNode) => {
  if (!rootNode || !childNode)
    return false;
  if (rootNode.contains(childNode))
    return true;
  return containsComposedNode(rootNode, childNode.getRootNode().host);
};
const closestComposedNode = (childNode, selector) => {
  if (!childNode)
    return null;
  const closest = childNode.closest(selector);
  if (closest)
    return closest;
  return closestComposedNode(childNode.getRootNode().host, selector);
};
function getOrInsertCSSRule(styleParent, selectorText) {
  var _a;
  let style;
  for (style of styleParent.querySelectorAll("style")) {
    let cssRules;
    try {
      cssRules = (_a = style.sheet) == null ? void 0 : _a.cssRules;
    } catch {
      continue;
    }
    for (let rule of cssRules != null ? cssRules : [])
      if (rule.selectorText === selectorText)
        return rule;
  }
  if (!(style == null ? void 0 : style.sheet)) {
    return {
      style: {
        setProperty: () => {
        },
        removeProperty: () => {
        }
      }
    };
  }
  style.sheet.insertRule(`${selectorText}{}`, style.sheet.cssRules.length);
  return style.sheet.cssRules[style.sheet.cssRules.length - 1];
}
function getNumericAttr(el, attrName, defaultValue = Number.NaN) {
  const attrVal = el.getAttribute(attrName);
  return attrVal != null ? +attrVal : defaultValue;
}
function setNumericAttr(el, attrName, value) {
  const nextNumericValue = +value;
  if (value == null || Number.isNaN(nextNumericValue)) {
    if (el.hasAttribute(attrName)) {
      el.removeAttribute(attrName);
    }
    return;
  }
  if (getNumericAttr(el, attrName, void 0) === nextNumericValue)
    return;
  el.setAttribute(attrName, `${nextNumericValue}`);
}
function getBooleanAttr(el, attrName) {
  return el.hasAttribute(attrName);
}
function setBooleanAttr(el, attrName, value) {
  if (value == null) {
    if (el.hasAttribute(attrName)) {
      el.removeAttribute(attrName);
    }
    return;
  }
  if (getBooleanAttr(el, attrName) == value)
    return;
  el.toggleAttribute(attrName, value);
}
function getStringAttr(el, attrName, defaultValue = null) {
  var _a;
  return (_a = el.getAttribute(attrName)) != null ? _a : defaultValue;
}
function setStringAttr(el, attrName, value) {
  if (value == null) {
    if (el.hasAttribute(attrName)) {
      el.removeAttribute(attrName);
    }
    return;
  }
  const nextValue = `${value}`;
  if (getStringAttr(el, attrName, void 0) === nextValue)
    return;
  el.setAttribute(attrName, nextValue);
}
