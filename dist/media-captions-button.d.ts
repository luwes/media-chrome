export default MediaCaptionsButton;
/**
 * @slot on - An element that will be shown while closed captions or subtitles are on.
 * @slot off - An element that will be shown while closed captions or subtitles are off.
 * @slot icon - An element for representing on and off states in a single icon
 *
 * @attr {string} mediasubtitleslist - (read-only) A list of all subtitles and captions.
 * @attr {string} mediasubtitlesshowing - (read-only) A list of the showing subtitles and captions.
 *
 * @cssproperty [--media-captions-button-display = inline-flex] - `display` property of button.
 */
declare class MediaCaptionsButton extends MediaChromeButton {
    _captionsReady: boolean;
    set mediaSubtitlesList(arg: any[]);
    /**
     * @type {Array<object>} An array of TextTrack-like objects.
     * Objects must have the properties: kind, language, and label.
     */
    get mediaSubtitlesList(): any[];
    set mediaSubtitlesShowing(arg: any[]);
    /**
     * @type {Array<object>} An array of TextTrack-like objects.
     * Objects must have the properties: kind, language, and label.
     */
    get mediaSubtitlesShowing(): any[];
    handleClick(): void;
}
import { MediaChromeButton } from "./media-chrome-button.js";
