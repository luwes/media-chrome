export default MediaMuteButton;
/**
 * @slot off - An element shown when the media is muted or the media’s volume is 0.
 * @slot low - An element shown when the media’s volume is “low” (less than 50% / 0.5).
 * @slot medium - An element shown when the media’s volume is “medium” (between 50% / 0.5 and 75% / 0.75).
 * @slot high - An element shown when the media’s volume is “high” (75% / 0.75 or greater).
 * @slot icon - An element for representing all states in a single icon
 *
 * @attr {string} mediavolumelevel - (read-only) Set to the media volume level.
 *
 * @cssproperty [--media-mute-button-display = inline-flex] - `display` property of button.
 */
declare class MediaMuteButton extends MediaChromeButton {
    set mediaVolumeLevel(arg: string);
    /**
     * @type {string | undefined}
     */
    get mediaVolumeLevel(): string;
    handleClick(): void;
}
import { MediaChromeButton } from "./media-chrome-button.js";
