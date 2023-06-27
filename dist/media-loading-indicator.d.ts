export namespace Attributes {
    const LOADING_DELAY: string;
}
export default MediaLoadingIndicator;
declare const MediaLoadingIndicator_base: any;
/**
 * @slot icon - The element shown for when the media is in a buffering state.
 *
 * @attr {string} loadingdelay - Set the delay in ms before the loading animation is shown.
 * @attr {string} mediacontroller - The element `id` of the media controller to connect to (if not nested within).
 * @attr {boolean} mediapaused - (read-only) Present if the media is paused.
 * @attr {boolean} medialoading - (read-only) Present if the media is loading.
 *
 * @cssproperty --media-primary-color - Default color of text and icon.
 * @cssproperty --media-icon-color - `fill` color of button icon.
 *
 * @cssproperty --media-control-display - `display` property of control.
 *
 * @cssproperty --media-loading-indicator-display - `display` property of loading indicator.
 * @cssproperty [ --media-loading-indicator-opacity = 0 ] - `opacity` property of loading indicator. Set to 1 to force it to be visible.
 * @cssproperty [ --media-loading-indicator-transition-delay = 500ms ] - `transition-delay` property of loading indicator. Make sure to include units.
 * @cssproperty --media-loading-indicator-icon-width - `width` of loading icon.
 * @cssproperty [ --media-loading-indicator-icon-height = 100px ] - `height` of loading icon.
 */
declare class MediaLoadingIndicator extends MediaLoadingIndicator_base {
    [x: string]: any;
    static get observedAttributes(): string[];
    attributeChangedCallback(attrName: any, oldValue: any, newValue: any): void;
    set loadingDelay(arg: number);
    /**
     * @type {number} Delay in ms
     */
    get loadingDelay(): number;
    connectedCallback(): void;
    disconnectedCallback(): void;
    set mediaPaused(arg: boolean);
    /**
     * @type {boolean} Is the media paused
     */
    get mediaPaused(): boolean;
    set mediaLoading(arg: boolean);
    /**
     * @type {boolean} Is the media loading
     */
    get mediaLoading(): boolean;
    #private;
}
