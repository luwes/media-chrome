export default MediaPlaybackrateSelectMenu;
/**
 * @attr {string} rates - Set custom playback rates for the user to choose from.
 *
 * @csspart button - The default button that's in the shadow DOM.
 * @csspart listbox - The default listbox that's in the shadow DOM.
 * @csspart listitem - A part that targets each listitem of the listbox.
 */
declare class MediaPlaybackrateSelectMenu extends MediaChromeSelectMenu {
    init(): void;
}
import MediaChromeSelectMenu from "./media-chrome-selectmenu.js";
