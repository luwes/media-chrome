/**
 * Get or insert a CSS rule with a selector in an element containing <style> tags.
 * @param  {Element|ShadowRoot} styleParent
 * @param  {string} selectorText
 * @return {CSSStyleRule |
 * { style: {
 * setProperty: () => void,
 * removeProperty: () => void,
 * width?: string,
 * height?: string,
 * display?: string,
 * transform?: string,
 * }}}
 */
export function getOrInsertCSSRule(styleParent: Element | ShadowRoot, selectorText: string): CSSStyleRule | {
    style: {
        setProperty: () => void;
        removeProperty: () => void;
        width?: string;
        height?: string;
        display?: string;
        transform?: string;
    };
};
/**
 * Gets the number represented by the attribute
 * @param {any} el (Should be an HTMLElement, but need any for SSR cases)
 * @param {string} attrName
 * @param {number} [defaultValue = Number.NaN]
 * @returns {number | undefined} Will return undefined if no attribute set
 */
export function getNumericAttr(el: any, attrName: string, defaultValue?: number): number | undefined;
/**
 * @param {any} el (Should be an HTMLElement, but need any for SSR cases)
 * @param {string} attrName
 * @param {number} value
 */
export function setNumericAttr(el: any, attrName: string, value: number): void;
/**
 * @param {any} el (Should be an HTMLElement, but need any for SSR cases)
 * @param {string} attrName
 * @returns {boolean}
 */
export function getBooleanAttr(el: any, attrName: string): boolean;
/**
 * @param {any} el (Should be an HTMLElement, but need any for SSR cases)
 * @param {string} attrName
 * @param {boolean} value
 */
export function setBooleanAttr(el: any, attrName: string, value: boolean): void;
/**
 * @param {any} el (Should be an HTMLElement, but need any for SSR cases)
 * @param {string} attrName
 */
export function getStringAttr(el: any, attrName: string, defaultValue?: any): any;
/**
 * @param {*} el (Should be an HTMLElement, but need any for SSR cases)
 * @param {string} attrName
 * @param {string} value
 */
export function setStringAttr(el: any, attrName: string, value: string): void;
export function updateIconText(svg: any, value: any, selector?: string): void;
export function getAllSlotted(el: any, name: any): any;
export function getSlotted(el: any, name: any): any;
export function containsComposedNode(rootNode: any, childNode: any): any;
export function closestComposedNode(childNode: any, selector: any): any;
