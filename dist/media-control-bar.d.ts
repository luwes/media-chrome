export default MediaControlBar;
declare const MediaControlBar_base: any;
/**
 * @attr {string} mediacontroller - The element `id` of the media controller to connect to (if not nested within).
 *
 * @cssproperty --media-primary-color - Default color of text and icon.
 * @cssproperty --media-secondary-color - Default color of button background.
 * @cssproperty --media-text-color - `color` of button text.
 *
 * @cssproperty --media-control-bar-display - `display` property of control bar.
 * @cssproperty --media-control-display - `display` property of control.
 */
declare class MediaControlBar extends MediaControlBar_base {
    [x: string]: any;
    static get observedAttributes(): string[];
    attributeChangedCallback(attrName: any, oldValue: any, newValue: any): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    #private;
}
