export namespace Attributes {
    const SEEK_OFFSET: string;
}
export default MediaSeekForwardButton;
/**
 * @slot icon - The element shown for the seek forward button’s display.
 *
 * @attr {string} seekoffset - Adjusts how much time (in seconds) the playhead should seek forward.
 * @attr {string} mediacurrenttime - (read-only) Set to the current media time.
 *
 * @cssproperty [--media-seek-forward-button-display = inline-flex] - `display` property of button.
 */
declare class MediaSeekForwardButton extends MediaChromeButton {
    set seekOffset(arg: number);
    /**
     * @type {number | undefined} Seek amount in seconds
     */
    get seekOffset(): number;
    set mediaCurrentTime(arg: number);
    /**
     * The current time
     * @type {number | undefined} In seconds
     */
    get mediaCurrentTime(): number;
    handleClick(): void;
}
import { MediaChromeButton } from "./media-chrome-button.js";
