export default MediaClipSelector;
/**
 * @extends {HTMLElement}
 */
declare class MediaClipSelector extends HTMLElement {
    static get observedAttributes(): string[];
    draggingEl: HTMLElement;
    /** @type {HTMLElement} */
    wrapper: HTMLElement;
    /** @type {HTMLElement} */
    selection: HTMLElement;
    /** @type {HTMLElement} */
    playhead: HTMLElement;
    /** @type {HTMLElement} */
    leftTrim: HTMLElement;
    /** @type {HTMLElement} */
    spacerFirst: HTMLElement;
    /** @type {HTMLElement} */
    startHandle: HTMLElement;
    /** @type {HTMLElement} */
    spacerMiddle: HTMLElement;
    /** @type {HTMLElement} */
    endHandle: HTMLElement;
    /** @type {HTMLElement} */
    spacerLast: HTMLElement;
    _clickHandler: any;
    _dragStart: any;
    _dragEnd: any;
    _drag: any;
    get mediaDuration(): number;
    get mediaCurrentTime(): number;
    getPlayheadBasedOnMouseEvent(evt: any): number;
    getXPositionFromMouse(evt: any): any;
    getMousePercent(evt: any): number;
    dragStart(evt: any): void;
    initialX: any;
    dragEnd(): void;
    setSelectionWidth(selectionPercent: any, fullTimelineWidth: any): void;
    drag(evt: any): void;
    dispatchUpdate(): void;
    getCurrentClipBounds(): {
        startTime: number;
        endTime: number;
    };
    isTimestampInBounds(timestamp: any): boolean;
    handleClick(evt: any): void;
    mediaCurrentTimeSet(): void;
    mediaUnsetCallback(media: any): void;
    enableThumbnails(): void;
    /** @type {HTMLElement} */
    thumbnailPreview: HTMLElement;
    disableThumbnails(): void;
}
