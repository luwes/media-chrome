export default MediaPreviewTimeDisplay;
/**
 * @attr {string} mediapreviewtime - (read-only) Set to the timeline preview time.
 *
 * @cssproperty [--media-preview-time-display-display = inline-flex] - `display` property of display.
 */
declare class MediaPreviewTimeDisplay extends MediaTextDisplay {
    set mediaPreviewTime(arg: number);
    /**
     * @type {number | undefined} Timeline preview time
     */
    get mediaPreviewTime(): number;
    #private;
}
import { MediaTextDisplay } from "./media-text-display.js";
