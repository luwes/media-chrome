export namespace Attributes {
    const REMAINING: string;
    const SHOW_DURATION: string;
    const NO_TOGGLE: string;
}
export default MediaTimeDisplay;
/**
 * @attr {boolean} remaining - Toggle on to show the remaining time instead of elapsed time.
 * @attr {boolean} showduration - Toggle on to show the duration.
 * @attr {boolean} disabled - The Boolean disabled attribute makes the element not mutable or focusable.
 * @attr {boolean} notoggle - Set this to disable click or tap behavior that toggles between remaining and current time.
 * @attr {string} mediacurrenttime - (read-only) Set to the current media time.
 * @attr {string} mediaduration - (read-only) Set to the media duration.
 * @attr {string} mediaseekable - (read-only) Set to the seekable time ranges.
 *
 * @cssproperty [--media-time-display-display = inline-flex] - `display` property of display.
 * @cssproperty --media-control-hover-background - `background` of control hover state.
 */
declare class MediaTimeDisplay extends MediaTextDisplay {
    toggleTimeDisplay(): void;
    enable(): void;
    tabIndex: number;
    disable(): void;
    set remaining(arg: boolean);
    /**
     * Whether to show the remaining time
     * @type {boolean}
     */
    get remaining(): boolean;
    set showDuration(arg: boolean);
    /**
     * Whether to show the duration
     * @type {boolean}
     */
    get showDuration(): boolean;
    set noToggle(arg: boolean);
    /**
     * Disable the default behavior that toggles between current and remaining time
     * @type {boolean}
     */
    get noToggle(): boolean;
    set mediaDuration(arg: number);
    /**
     * Get the duration
     * @type {number | undefined} In seconds
     */
    get mediaDuration(): number;
    set mediaCurrentTime(arg: number);
    /**
     * The current time
     * @type {number | undefined} In seconds
     */
    get mediaCurrentTime(): number;
    set mediaSeekable(arg: [number, number]);
    /**
     * Range of values that can be seeked to
     * @type {[number, number] | undefined} An array of two numbers [start, end]
     */
    get mediaSeekable(): [number, number];
    update(): void;
    #private;
}
import { MediaTextDisplay } from "./media-text-display.js";
