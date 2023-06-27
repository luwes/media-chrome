export namespace Attributes {
    const DEFAULT_SUBTITLES: string;
    const DEFAULT_STREAM_TYPE: string;
    const FULLSCREEN_ELEMENT: string;
    const HOTKEYS: string;
    const KEYS_USED: string;
    const LIVE_EDGE_OFFSET: string;
    const NO_AUTO_SEEK_TO_LIVE: string;
    const NO_HOTKEYS: string;
}
export default MediaController;
/**
 * Media Controller should not mimic the HTMLMediaElement API.
 * @see https://github.com/muxinc/media-chrome/pull/182#issuecomment-1067370339
 *
 * @attr {boolean} defaultsubtitles
 * @attr {string} defaultstreamtype
 * @attr {string} fullscreenelement
 * @attr {boolean} nohotkeys
 * @attr {string} hotkeys
 * @attr {string} keysused
 * @attr {string} liveedgeoffset
 * @attr {boolean} noautoseektolive
 */
declare class MediaController extends MediaContainer {
    mediaStateReceivers: any[];
    associatedElementSubscriptions: Map<any, any>;
    _mediaStatePropagators: {};
    set fullscreenElement(arg: any);
    get fullscreenElement(): any;
    propagateMediaState(stateName: any, state: any): void;
    associateElement(element: any): void;
    unassociateElement(element: any): void;
    registerMediaStateReceiver(el: any): void;
    unregisterMediaStateReceiver(el: any): void;
    enableHotkeys(): void;
    disableHotkeys(): void;
    get hotkeys(): AttributeTokenList;
    keyboardShortcutHandler(e: any): void;
    #private;
}
import { MediaContainer } from "./media-container.js";
import { AttributeTokenList } from "./utils/attribute-token-list.js";
