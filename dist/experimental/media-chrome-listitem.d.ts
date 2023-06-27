export namespace Attributes {
    const VALUE: string;
}
export default MediaChromeListitem;
declare const MediaChromeListitem_base: any;
/**
 * @slot - Default slotted elements.
 *
 * @attr {boolean} disabled - The Boolean disabled attribute makes the element not mutable or focusable.
 * @attr {string} mediacontroller - The element `id` of the media controller to connect to (if not nested within).
 */
declare class MediaChromeListitem extends MediaChromeListitem_base {
    [x: string]: any;
    static get observedAttributes(): string[];
    nativeEl: any;
    set value(arg: any);
    get value(): any;
    enable(): void;
    disable(): void;
    attributeChangedCallback(attrName: any, oldValue: any, newValue: any): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    handleClick(): void;
}
