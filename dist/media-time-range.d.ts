export default MediaTimeRange;
/**
 * @slot preview - An element that slides along the timeline to the position of the pointer hovering.
 * @slot current - An element that slides along the timeline to the position of the current time.
 *
 * @attr {string} mediabuffered - (read-only) Set to the buffered time ranges.
 * @attr {string} mediaplaybackrate - (read-only) Set to the media playback rate.
 * @attr {string} mediaduration - (read-only) Set to the media duration.
 * @attr {string} mediaseekable - (read-only) Set to the seekable time ranges.
 * @attr {boolean} mediapaused - (read-only) Present if the media is paused.
 * @attr {boolean} medialoading - (read-only) Present if the media is loading.
 * @attr {string} mediacurrenttime - (read-only) Set to the current media time.
 * @attr {string} mediapreviewimage - (read-only) Set to the timeline preview image URL.
 * @attr {string} mediapreviewtime - (read-only) Set to the timeline preview time.
 *
 * @csspart box - A CSS part that selects both the preview and current box elements.
 * @csspart preview-box - A CSS part that selects the preview box element.
 * @csspart current-box - A CSS part that selects the current box element.
 *
 * @cssproperty [--media-time-range-display = inline-block] - `display` property of range.
 *
 * @cssproperty --media-preview-transition-property - `transition-property` of range hover preview.
 * @cssproperty --media-preview-transition-duration-out - `transition-duration` out of range hover preview.
 * @cssproperty --media-preview-transition-delay-out - `transition-delay` out of range hover preview.
 * @cssproperty --media-preview-transition-duration-in - `transition-duration` in of range hover preview.
 * @cssproperty --media-preview-transition-delay-in - `transition-delay` in of range hover preview.
 *
 * @cssproperty --media-preview-thumbnail-background - `background` of range preview thumbnail.
 * @cssproperty --media-preview-thumbnail-box-shadow - `box-shadow` of range preview thumbnail.
 * @cssproperty --media-preview-thumbnail-max-width - `max-width` of range preview thumbnail.
 * @cssproperty --media-preview-thumbnail-max-height - `max-height` of range preview thumbnail.
 * @cssproperty --media-preview-thumbnail-min-width - `min-width` of range preview thumbnail.
 * @cssproperty --media-preview-thumbnail-min-height - `min-height` of range preview thumbnail.
 * @cssproperty --media-preview-thumbnail-border-radius - `border-radius` of range preview thumbnail.
 * @cssproperty --media-preview-thumbnail-border - `border` of range preview thumbnail.
 *
 * @cssproperty --media-preview-time-background - `background` of range preview time display.
 * @cssproperty --media-preview-time-border-radius - `border-radius` of range preview time display.
 * @cssproperty --media-preview-time-padding - `padding` of range preview time display.
 * @cssproperty --media-preview-time-margin - `margin` of range preview time display.
 * @cssproperty --media-preview-time-text-shadow - `text-shadow` of range preview time display.
 */
declare class MediaTimeRange extends MediaChromeRange {
    _refreshBar: () => void;
    _refreshId: number;
    _updateTimestamp: number;
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
    set mediaDuration(arg: number);
    /**
     * @type {number | undefined}
     */
    get mediaDuration(): number;
    set mediaCurrentTime(arg: number);
    /**
     * @type {number | undefined}
     */
    get mediaCurrentTime(): number;
    set mediaPlaybackRate(arg: number);
    /**
     * @type {number}
     */
    get mediaPlaybackRate(): number;
    set mediaBuffered(arg: number[][]);
    /**
     * @type {Array<Array<number>>} An array of ranges, each range being an array of two numbers.
     * e.g. [[1, 2], [3, 4]]
     */
    get mediaBuffered(): number[][];
    set mediaSeekable(arg: number[]);
    /**
     * Range of values that can be seeked to
     * @type {Array<number> | undefined} An array of two numbers [start, end]
     */
    get mediaSeekable(): number[];
    set mediaPreviewImage(arg: string);
    /**
     * @type {string | undefined} The url of the preview image
     */
    get mediaPreviewImage(): string;
    set mediaPreviewTime(arg: number);
    /**
     * @type {number | undefined}
     */
    get mediaPreviewTime(): number;
    set mediaEnded(arg: boolean);
    /**
     * @type {boolean | undefined}
     */
    get mediaEnded(): boolean;
    updateCurrentBox(): void;
    #private;
}
import { MediaChromeRange } from "./media-chrome-range.js";
