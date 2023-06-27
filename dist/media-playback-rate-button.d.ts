export namespace Attributes {
    const RATES: string;
}
export const DEFAULT_RATES: number[];
export const DEFAULT_RATE: 1;
export default MediaPlaybackRateButton;
/**
 * @attr {string} rates - Set custom playback rates for the user to choose from.
 * @attr {string} mediaplaybackrate - (read-only) Set to the media playback rate.
 *
 * @cssproperty [--media-playback-rate-button-display = inline-flex] - `display` property of button.
 */
declare class MediaPlaybackRateButton extends MediaChromeButton {
    container: Element;
    set rates(arg: number[] | AttributeTokenList);
    /**
     * @type { AttributeTokenList | Array<number> | undefined} Will return a DOMTokenList.
     * Setting a value will accept an array of numbers.
     */
    get rates(): number[] | AttributeTokenList;
    set mediaPlaybackRate(arg: number);
    /**
     * @type {number} The current playback rate
     */
    get mediaPlaybackRate(): number;
    handleClick(): void;
    #private;
}
import { MediaChromeButton } from "./media-chrome-button.js";
import { AttributeTokenList } from "./utils/attribute-token-list.js";
