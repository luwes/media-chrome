export default MediaAirplayButton;
/**
 * @slot icon - The element shown for the AirPlay button’s display.
 *
 * @attr {(unavailable|unsupported)} mediaairplayunavailable - (read-only) Set if airplay is unavailable.
 *
 * @cssproperty [--media-airplay-button-display = inline-flex] - `display` property of button.
 *
 * @event {CustomEvent} mediaairplayrequest
 */
declare class MediaAirplayButton extends MediaChromeButton {
    set mediaAirplayUnavailable(arg: string);
    /**
     * @type {string | undefined} Airplay unavailability state
     */
    get mediaAirplayUnavailable(): string;
    handleClick(): void;
}
import { MediaChromeButton } from "./media-chrome-button.js";
