export default MediaPipButton;
/**
 * @slot enter - An element shown when the media is not in PIP mode and pressing the button will trigger entering PIP mode.
 * @slot exit - An element shown when the media is in PIP and pressing the button will trigger exiting PIP mode.
 * @slot icon - An element for representing enter and exit states in a single icon
 *
 * @attr {(unavailable|unsupported)} mediapipunavailable - (read-only) Set if picture-in-picture is unavailable.
 * @attr {boolean} mediaispip - (read-only) Present if the media is playing in picture-in-picture.
 *
 * @cssproperty [--media-pip-button-display = inline-flex] - `display` property of button.
 */
declare class MediaPipButton extends MediaChromeButton {
    set mediaPipUnavailable(arg: string);
    /**
     * @type {string | undefined} Pip unavailability state
     */
    get mediaPipUnavailable(): string;
    set mediaIsPip(arg: boolean);
    /**
     * @type {boolean} Is the media currently playing picture-in-picture
     */
    get mediaIsPip(): boolean;
    handleClick(): void;
}
import { MediaChromeButton } from "./media-chrome-button.js";
