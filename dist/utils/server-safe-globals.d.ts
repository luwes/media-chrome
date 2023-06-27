export const isServer: boolean;
/**
  * @type { globalThis & {
  *   WebKitPlaybackTargetAvailabilityEvent?,
  *   chrome?,
  *   DocumentFragment?,
  *   getComputedStyle,
  *   CastableVideoElement?
  * } |
  * {HTMLElement,
  * customElements,
  * CustomEvent,
  * getComputedStyle,
  * addEventListener?,
  * removeEventListener?,
  * setTimeout?,
  * clearTimeout?,
  * localStorage?,
  * WebKitPlaybackTargetAvailabilityEvent?,
  * window?,
  * document?,
  * chrome?,
  * DocumentFragment?,
  * ResizeObserver?,
  * requestAnimationFrame,
  * queueMicrotask,
  * CastableVideoElement?
  * } }
  * */
export const GlobalThis: (typeof globalThis & {
    WebKitPlaybackTargetAvailabilityEvent?;
    chrome?;
    DocumentFragment?;
    getComputedStyle;
    CastableVideoElement?;
}) | {
    HTMLElement;
    customElements;
    CustomEvent;
    getComputedStyle;
    addEventListener?;
    removeEventListener?;
    setTimeout?;
    clearTimeout?;
    localStorage?;
    WebKitPlaybackTargetAvailabilityEvent?;
    window?;
    document?;
    chrome?;
    DocumentFragment?;
    ResizeObserver?;
    requestAnimationFrame;
    queueMicrotask;
    CastableVideoElement?;
};
/**
  * @type { document & { webkitExitFullscreen? } |
  * {createElement,
  * fullscreenElement?,
  * webkitExitFullscreen?,
  * getElementById?,
  * pictureInPictureElement?,
  * exitPictureInPicture?,
  * pictureInPictureEnabled?,
  * requestPictureInPicture?,
  * addEventListener?,
  * removeEventListener?,
  * } }
  */
export const Document: (Document & {
    webkitExitFullscreen?;
}) | {
    createElement;
    fullscreenElement?;
    webkitExitFullscreen?;
    getElementById?;
    pictureInPictureElement?;
    exitPictureInPicture?;
    pictureInPictureEnabled?;
    requestPictureInPicture?;
    addEventListener?;
    removeEventListener?;
};
declare class ResizeObserver {
    observe(): void;
}
export { GlobalThis as globalThis, Document as document };
