export default MediaVolumeRange;
/**
 * @attr {string} mediavolume - (read-only) Set to the media volume.
 * @attr {boolean} mediamuted - (read-only) Set to the media muted state.
 * @attr {string} mediavolumeunavailable - (read-only) Set if changing volume is unavailable.
 *
 * @cssproperty [--media-volume-range-display = inline-block] - `display` property of range.
 */
declare class MediaVolumeRange extends MediaChromeRange {
    set mediaVolume(arg: number);
    /**
     * @type {number}
     */
    get mediaVolume(): number;
    set mediaMuted(arg: boolean);
    /**
     * @type {boolean} Is the media currently muted
     */
    get mediaMuted(): boolean;
    set mediaVolumeUnavailable(arg: string);
    /**
     * @type {string | undefined} The volume unavailability state
     */
    get mediaVolumeUnavailable(): string;
}
import { MediaChromeRange } from "./media-chrome-range.js";
