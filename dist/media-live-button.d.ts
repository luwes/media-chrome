export default MediaLiveButton;
/**
 * @slot indicator - The default is an SVG of a circle that changes to red when the video or audio is live. Can be replaced with your own SVG or font icon.
 * @slot spacer - A simple text space (&nbsp;) between the indicator and the text.
 * @slot text - The text content of the button, with a default of “LIVE”.
 *
 * @attr {boolean} mediapaused - (read-only) Present if the media is paused.
 * @attr {boolean} mediatimeislive - (read-only) Present if the media playback is live.
 *
 * @cssproperty [--media-live-button-display = inline-flex] - `display` property of button.
 * @cssproperty --media-live-button-icon-color - `fill` and `color` of not live button icon.
 * @cssproperty --media-live-button-indicator-color - `fill` and `color` of live button icon.
 */
declare class MediaLiveButton extends MediaChromeButton {
    set mediaPaused(arg: boolean);
    /**
     * @type {boolean} Is the media paused
     */
    get mediaPaused(): boolean;
    set mediaTimeIsLive(arg: boolean);
    /**
     * @type {boolean} Is the media playback currently live
     */
    get mediaTimeIsLive(): boolean;
    handleClick(): void;
}
import { MediaChromeButton } from "./media-chrome-button.js";
