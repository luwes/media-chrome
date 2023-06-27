export default MediaChromeSelectMenu;
declare const MediaChromeSelectMenu_base: any;
/**
 * @slot button - A button element that reflects the current state of captions and subtitles selection.
 * @slot listbox - An element that displays the associated captions for the media.
 *
 * @attr {boolean} disabled - The Boolean disabled attribute makes the element not mutable or focusable.
 * @attr {string} mediacontroller - The element `id` of the media controller to connect to (if not nested within).
 *
 * @csspart button - The default button that's in the shadow DOM.
 * @csspart listbox - The default listbox that's in the shadow DOM.
 */
declare class MediaChromeSelectMenu extends MediaChromeSelectMenu_base {
    [x: string]: any;
    static get observedAttributes(): string[];
    nativeEl: any;
    enable(): void;
    disable(): void;
    attributeChangedCallback(attrName: any, oldValue: any, newValue: any): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    get keysUsed(): string[];
    #private;
}
