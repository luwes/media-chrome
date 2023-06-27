export default MediaChromeListbox;
/**
 * @extends {HTMLElement}
 *
 * @slot - Default slotted elements.
 *
 * @attr {boolean} disabled - The Boolean disabled attribute makes the element not mutable or focusable.
 * @attr {string} mediacontroller - The element `id` of the media controller to connect to (if not nested within).
 *
 * @cssproperty --media-primary-color - Default color of text.
 * @cssproperty --media-secondary-color - Default color of background.
 * @cssproperty --media-text-color - `color` of text.
 *
 * @cssproperty --media-control-background - `background` of control.
 * @cssproperty --media-listbox-background - `background` of listbox.
 * @cssproperty --media-listbox-selected-background - `background` of selected listbox item.
 * @cssproperty --media-listbox-hover-background - `background` of hovered listbox item.
 * @cssproperty --media-listbox-hover-outline - `outline` of hovered listbox item.
 *
 * @cssproperty --media-font - `font` shorthand property.
 * @cssproperty --media-font-weight - `font-weight` property.
 * @cssproperty --media-font-family - `font-family` property.
 * @cssproperty --media-font-size - `font-size` property.
 * @cssproperty --media-text-content-height - `line-height` of text.
 */
declare class MediaChromeListbox extends HTMLElement {
    static get observedAttributes(): string[];
    constructor(options?: {});
    nativeEl: any;
    get selectedOptions(): any;
    set value(arg: any);
    get value(): any;
    focus(): void;
    enable(): void;
    disable(): void;
    attributeChangedCallback(attrName: any, oldValue: any, newValue: any): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    get keysUsed(): string[];
    handleSelection(e: any, toggle: any): void;
    handleMovement(e: any): void;
    handleClick(e: any): void;
    #private;
}
