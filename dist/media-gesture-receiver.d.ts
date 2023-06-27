export default MediaGestureReceiver;
/**
 * @extends {HTMLElement}
 *
 * @attr {boolean} mediapaused - (read-only) Present if the media is paused.
 * @attr {string} mediacontroller - The element `id` of the media controller to connect to (if not nested within).
 *
 * @cssproperty --media-gesture-receiver-display - `display` property of gesture receiver.
 * @cssproperty --media-control-display - `display` property of control.
 */
declare class MediaGestureReceiver extends HTMLElement {
    static get observedAttributes(): string[];
    constructor(options?: {});
    nativeEl: any;
    attributeChangedCallback(attrName: any, oldValue: any, newValue: any): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    handleEvent(event: any): void;
    _pointerType: any;
    set mediaPaused(arg: boolean);
    /**
     * @type {boolean} Is the media paused
     */
    get mediaPaused(): boolean;
    /**
     * @abstract
     * @argument {Event} e
     */
    handleTap(e: Event): void;
    handleMouseClick(e: any): void;
    #private;
}
