export default MediaCaptionsListbox;
/**
 * @attr {string} mediasubtitleslist - (read-only) A list of all subtitles and captions.
 * @attr {boolean} mediasubtitlesshowing - (read-only) A list of the showing subtitles and captions.
 *
 * @cssproperty --media-primary-color - Default color of icon.
 * @cssproperty --media-icon-color - `fill` color of icon.
 *
 * @cssproperty --media-captions-indicator-height - `height` of captions indicator.
 * @cssproperty --media-captions-indicator-vertical-align - `vertical-align` of captions indicator.
 * @cssproperty --media-captions-listbox-white-space - `white-space` of captions list item.
 */
declare class MediaCaptionsListbox extends MediaChromeListbox {
    constructor();
    #private;
}
import MediaChromeListbox from "./media-chrome-listbox.js";
