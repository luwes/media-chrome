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
export {
  closestComposedNode,
  containsComposedNode,
  getAllSlotted,
  getBooleanAttr,
  getNumericAttr,
  getOrInsertCSSRule,
  getSlotted,
  getStringAttr,
  setBooleanAttr,
  setNumericAttr,
  setStringAttr,
  updateIconText
};
