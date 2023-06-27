export default MediaDurationDisplay;
/**
 * @attr {string} mediaduration - (read-only) Set to the media duration.
 *
 * @cssproperty [--media-duration-display-display = inline-flex] - `display` property of display.
 */
declare class MediaDurationDisplay extends MediaTextDisplay {
    set mediaDuration(arg: number);
    /**
     * @type {number | undefined} In seconds
     */
    get mediaDuration(): number;
    #private;
}
import { MediaTextDisplay } from "./media-text-display.js";
