export default MediaPreviewThumbnail;
/**
 * @extends {HTMLElement}
 *
 * @attr {string} mediacontroller - The element `id` of the media controller to connect to (if not nested within).
 * @attr {string} mediapreviewimage - (read-only) Set to the timeline preview image URL.
 * @attr {string} mediapreviewcoords - (read-only) Set to the active preview image coordinates.
 *
 * @cssproperty [--media-preview-thumbnail-display = inline-block] - `display` property of display.
 * @cssproperty [--media-control-display = inline-block] - `display` property of control.
 */
declare class MediaPreviewThumbnail extends HTMLElement {
    static get observedAttributes(): string[];
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(attrName: any, oldValue: any, newValue: any): void;
    set mediaPreviewImage(arg: string);
    /**
     * @type {string | undefined} The url of the preview image
     */
    get mediaPreviewImage(): string;
    set mediaPreviewCoords(arg: number[]);
    /**
     * @type {Array<number> | undefined} Fixed length array [x, y, width, height] or undefined
     */
    get mediaPreviewCoords(): number[];
    update(): void;
    imgWidth: number;
    imgHeight: number;
    #private;
}
