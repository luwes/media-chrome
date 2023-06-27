export default MediaCastButton;
/**
 * @slot enter - An element shown when the media is not in casting mode and pressing the button will open the Cast menu.
 * @slot exit - An element shown when the media is in casting mode and pressing the button will trigger exiting casting mode.
 * @slot icon - An element for representing enter and exit states in a single icon
 *
 * @attr {(unavailable|unsupported)} mediacastunavailable - (read-only) Set if casting is unavailable.
 * @attr {boolean} mediaiscasting - (read-only) Present if the media is casting.
 *
 * @cssproperty [--media-cast-button-display = inline-flex] - `display` property of button.
 */
declare class MediaCastButton extends MediaChromeButton {
    set mediaIsCasting(arg: boolean);
    /**
     * @type {boolean} Are we currently casting
     */
    get mediaIsCasting(): boolean;
    set mediaCastUnavailable(arg: string);
    /**
     * @type {string | undefined} Cast unavailability state
     */
    get mediaCastUnavailable(): string;
    handleClick(): void;
}
import { MediaChromeButton } from "./media-chrome-button.js";
