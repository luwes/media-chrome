export default MediaCaptionsSelectMenu;
/**
 * @csspart button - The default button that's in the shadow DOM.
 * @csspart listbox - The default listbox that's in the shadow DOM.
 * @csspart listitem - A part that targets each listitem of the listbox.
 */
declare class MediaCaptionsSelectMenu extends MediaChromeSelectMenu {
    init(): void;
}
import MediaChromeSelectMenu from "./media-chrome-selectmenu.js";
