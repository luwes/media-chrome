export default MediaChromeRange;
/**
 * @extends {HTMLElement}
 *
 * @attr {boolean} disabled - The Boolean disabled attribute makes the element not mutable or focusable.
 * @attr {string} mediacontroller - The element `id` of the media controller to connect to (if not nested within).
 *
 * @cssproperty --media-primary-color - Default color of range bar.
 * @cssproperty --media-secondary-color - Default color of range background.
 *
 * @cssproperty [--media-control-display = inline-block] - `display` property of control.
 * @cssproperty --media-control-padding - `padding` of control.
 * @cssproperty --media-control-background - `background` of control.
 * @cssproperty --media-control-hover-background - `background` of control hover state.
 * @cssproperty --media-control-height - `height` of control.
 *
 * @cssproperty --media-range-padding - `padding` of range.
 * @cssproperty --media-range-padding-left - `padding-left` of range.
 * @cssproperty --media-range-padding-right - `padding-right` of range.
 *
 * @cssproperty --media-range-thumb-width - `width` of range thumb.
 * @cssproperty --media-range-thumb-height - `height` of range thumb.
 * @cssproperty --media-range-thumb-border - `border` of range thumb.
 * @cssproperty --media-range-thumb-border-radius - `border-radius` of range thumb.
 * @cssproperty --media-range-thumb-background - `background` of range thumb.
 * @cssproperty --media-range-thumb-box-shadow - `box-shadow` of range thumb.
 * @cssproperty --media-range-thumb-transition - `transition` of range thumb.
 * @cssproperty --media-range-thumb-transform - `transform` of range thumb.
 * @cssproperty --media-range-thumb-opacity - `opacity` of range thumb.
 *
 * @cssproperty [--media-range-bar-color = var(--media-primary-color, rgb(238 238 238))] - `color_value` of range bar (elapsed progress).
 * @cssproperty [--media-range-track-color = transparent] - `color_value` of range track (remaining progress).
 * @cssproperty --media-range-track-backdrop-filter - `backdrop-filter` of range track.
 * @cssproperty --media-range-track-width - `width` of range track.
 * @cssproperty --media-range-track-height - `height` of range track.
 * @cssproperty --media-range-track-border - `border` of range track.
 * @cssproperty --media-range-track-outline - `outline` of range track.
 * @cssproperty --media-range-track-outline-offset - `outline-offset` of range track.
 * @cssproperty --media-range-track-border-radius - `border-radius` of range track.
 * @cssproperty --media-range-track-box-shadow - `box-shadow` of range track.
 * @cssproperty --media-range-track-transition - `transition` of range track.
 * @cssproperty --media-range-track-translate-x - `translate` x-coordinate of range track.
 * @cssproperty --media-range-track-translate-y - `translate` y-coordinate of range track.
 *
 * @cssproperty --media-range-track-background - `background` of range track background.
 * @cssproperty --media-range-track-background-backdrop-filter - `backdrop-filter` of range track background.
 *
 * @cssproperty --media-time-range-hover-display - `display` of range hover zone.
 * @cssproperty --media-time-range-hover-bottom - `bottom` of range hover zone.
 * @cssproperty --media-time-range-hover-height - `height` of range hover zone.
 *
 * @cssproperty --media-range-track-pointer-background - `background` of range track pointer.
 * @cssproperty --media-range-track-pointer-border-right - `border-right` of range track pointer.
 */
export class MediaChromeRange extends HTMLElement {
    static get observedAttributes(): string[];
    thumbWidth: number;
    container: Element;
    /** @type {Omit<HTMLInputElement, "value" | "min" | "max"> &
      * {value: number, min: number, max: number}} */
    range: Omit<HTMLInputElement, "value" | "max" | "min"> & {
        value: number;
        min: number;
        max: number;
    };
    attributeChangedCallback(attrName: any, oldValue: any, newValue: any): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updatePointerBar(evt: any): void;
    updateBar(): void;
    getRelativeValues(): {
        relativeValue: number;
        relativeMax: number;
    };
    getBarColors(): (string | number)[][];
    get keysUsed(): string[];
    #private;
}
