export namespace Attributes {
    const AUDIO: string;
    const AUTOHIDE: string;
    const BREAKPOINTS: string;
    const GESTURES_DISABLED: string;
    const KEYBOARD_CONTROL: string;
    const NO_AUTOHIDE: string;
    const USER_INACTIVE: string;
}
export default MediaContainer;
/**
 * @extends {HTMLElement}
 *
 * @attr {boolean} audio
 * @attr {string} autohide
 * @attr {string} breakpoints
 * @attr {boolean} gesturesdisabled
 * @attr {boolean} keyboardcontrol
 * @attr {boolean} noautohide
 * @attr {boolean} userinactive
 *
 * @cssprop --media-background-color - `background-color` of container.
 * @cssprop --media-slot-display - `display` of the media slot (default none for [audio] usage).
 */
export class MediaContainer extends HTMLElement {
    static get observedAttributes(): string[];
    resizeObserver: ResizeObserver;
    attributeChangedCallback(attrName: any, oldValue: any, newValue: any): void;
    set autohide(arg: any);
    get autohide(): any;
    /**
     * @returns {HTMLVideoElement &
     * {buffered,
     * webkitEnterFullscreen?,
     * webkitExitFullscreen?,
     * requestCast?,
     * webkitShowPlaybackTargetPicker?,
     * }}
     */
    get media(): HTMLVideoElement & {
        buffered: any;
        webkitEnterFullscreen?: any;
        webkitExitFullscreen?: any;
        requestCast?: any;
        webkitShowPlaybackTargetPicker?: any;
    };
    mediaSetCallback(media: any): void;
    _mediaClickPlayToggle: () => void;
    handleMediaUpdated(media: any): any;
    /**
     * @abstract
     */
    mediaUnsetCallback(node: any): void;
    connectedCallback(): void;
    _inactiveTimeout: any;
    _autohide: any;
}
