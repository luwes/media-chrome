export default MediaFullscreenButton;
/**
 * @slot enter - An element shown when the media is not in fullscreen and pressing the button will trigger entering fullscreen.
 * @slot exit - An element shown when the media is in fullscreen and pressing the button will trigger exiting fullscreen.
 * @slot icon - An element for representing enter and exit states in a single icon
 *
 * @attr {(unavailable|unsupported)} mediafullscreenunavailable - (read-only) Set if fullscreen is unavailable.
 * @attr {boolean} mediaisfullscreen - (read-only) Present if the media is fullscreen.
 *
 * @cssproperty [--media-fullscreen-button-display = inline-flex] - `display` property of button.
 */
declare class MediaFullscreenButton extends MediaChromeButton {
    set mediaFullscreenUnavailable(arg: string);
    /**
     * @type {string | undefined} Fullscreen unavailability state
     */
    get mediaFullscreenUnavailable(): string;
    set mediaIsFullscreen(arg: boolean);
    /**
     * @type {boolean} Whether fullscreen is available
     */
    get mediaIsFullscreen(): boolean;
    handleClick(): void;
}
import { MediaChromeButton } from "./media-chrome-button.js";
