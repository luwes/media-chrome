export namespace MediaUIEvents {
    const MEDIA_PLAY_REQUEST: string;
    const MEDIA_PAUSE_REQUEST: string;
    const MEDIA_MUTE_REQUEST: string;
    const MEDIA_UNMUTE_REQUEST: string;
    const MEDIA_VOLUME_REQUEST: string;
    const MEDIA_SEEK_REQUEST: string;
    const MEDIA_AIRPLAY_REQUEST: string;
    const MEDIA_ENTER_FULLSCREEN_REQUEST: string;
    const MEDIA_EXIT_FULLSCREEN_REQUEST: string;
    const MEDIA_PREVIEW_REQUEST: string;
    const MEDIA_ENTER_PIP_REQUEST: string;
    const MEDIA_EXIT_PIP_REQUEST: string;
    const MEDIA_ENTER_CAST_REQUEST: string;
    const MEDIA_EXIT_CAST_REQUEST: string;
    const MEDIA_SHOW_TEXT_TRACKS_REQUEST: string;
    const MEDIA_HIDE_TEXT_TRACKS_REQUEST: string;
    const MEDIA_SHOW_SUBTITLES_REQUEST: string;
    const MEDIA_DISABLE_SUBTITLES_REQUEST: string;
    const MEDIA_PLAYBACK_RATE_REQUEST: string;
    const MEDIA_SEEK_TO_LIVE_REQUEST: string;
    const REGISTER_MEDIA_STATE_RECEIVER: string;
    const UNREGISTER_MEDIA_STATE_RECEIVER: string;
}
export namespace MediaStateReceiverAttributes {
    const MEDIA_CHROME_ATTRIBUTES: string;
    const MEDIA_CONTROLLER: string;
}
export namespace MediaUIProps {
    const MEDIA_AIRPLAY_UNAVAILABLE: string;
    const MEDIA_FULLSCREEN_UNAVAILABLE: string;
    const MEDIA_PIP_UNAVAILABLE: string;
    const MEDIA_CAST_UNAVAILABLE: string;
    const MEDIA_PAUSED: string;
    const MEDIA_HAS_PLAYED: string;
    const MEDIA_ENDED: string;
    const MEDIA_MUTED: string;
    const MEDIA_VOLUME_LEVEL: string;
    const MEDIA_VOLUME: string;
    const MEDIA_VOLUME_UNAVAILABLE: string;
    const MEDIA_IS_PIP: string;
    const MEDIA_IS_CASTING: string;
    const MEDIA_SUBTITLES_LIST: string;
    const MEDIA_SUBTITLES_SHOWING: string;
    const MEDIA_IS_FULLSCREEN: string;
    const MEDIA_PLAYBACK_RATE: string;
    const MEDIA_CURRENT_TIME: string;
    const MEDIA_DURATION: string;
    const MEDIA_SEEKABLE: string;
    const MEDIA_PREVIEW_TIME: string;
    const MEDIA_PREVIEW_IMAGE: string;
    const MEDIA_PREVIEW_COORDS: string;
    const MEDIA_LOADING: string;
    const MEDIA_BUFFERED: string;
    const MEDIA_STREAM_TYPE: string;
    const MEDIA_TARGET_LIVE_WINDOW: string;
    const MEDIA_TIME_IS_LIVE: string;
}
export namespace MediaUIAttributes {
    const MEDIA_AIRPLAY_UNAVAILABLE_1: string;
    export { MEDIA_AIRPLAY_UNAVAILABLE_1 as MEDIA_AIRPLAY_UNAVAILABLE };
    const MEDIA_FULLSCREEN_UNAVAILABLE_1: string;
    export { MEDIA_FULLSCREEN_UNAVAILABLE_1 as MEDIA_FULLSCREEN_UNAVAILABLE };
    const MEDIA_PIP_UNAVAILABLE_1: string;
    export { MEDIA_PIP_UNAVAILABLE_1 as MEDIA_PIP_UNAVAILABLE };
    const MEDIA_CAST_UNAVAILABLE_1: string;
    export { MEDIA_CAST_UNAVAILABLE_1 as MEDIA_CAST_UNAVAILABLE };
    const MEDIA_PAUSED_1: string;
    export { MEDIA_PAUSED_1 as MEDIA_PAUSED };
    const MEDIA_HAS_PLAYED_1: string;
    export { MEDIA_HAS_PLAYED_1 as MEDIA_HAS_PLAYED };
    const MEDIA_ENDED_1: string;
    export { MEDIA_ENDED_1 as MEDIA_ENDED };
    const MEDIA_MUTED_1: string;
    export { MEDIA_MUTED_1 as MEDIA_MUTED };
    const MEDIA_VOLUME_LEVEL_1: string;
    export { MEDIA_VOLUME_LEVEL_1 as MEDIA_VOLUME_LEVEL };
    const MEDIA_VOLUME_1: string;
    export { MEDIA_VOLUME_1 as MEDIA_VOLUME };
    const MEDIA_VOLUME_UNAVAILABLE_1: string;
    export { MEDIA_VOLUME_UNAVAILABLE_1 as MEDIA_VOLUME_UNAVAILABLE };
    const MEDIA_IS_PIP_1: string;
    export { MEDIA_IS_PIP_1 as MEDIA_IS_PIP };
    const MEDIA_IS_CASTING_1: string;
    export { MEDIA_IS_CASTING_1 as MEDIA_IS_CASTING };
    const MEDIA_SUBTITLES_LIST_1: string;
    export { MEDIA_SUBTITLES_LIST_1 as MEDIA_SUBTITLES_LIST };
    const MEDIA_SUBTITLES_SHOWING_1: string;
    export { MEDIA_SUBTITLES_SHOWING_1 as MEDIA_SUBTITLES_SHOWING };
    const MEDIA_IS_FULLSCREEN_1: string;
    export { MEDIA_IS_FULLSCREEN_1 as MEDIA_IS_FULLSCREEN };
    const MEDIA_PLAYBACK_RATE_1: string;
    export { MEDIA_PLAYBACK_RATE_1 as MEDIA_PLAYBACK_RATE };
    const MEDIA_CURRENT_TIME_1: string;
    export { MEDIA_CURRENT_TIME_1 as MEDIA_CURRENT_TIME };
    const MEDIA_DURATION_1: string;
    export { MEDIA_DURATION_1 as MEDIA_DURATION };
    const MEDIA_SEEKABLE_1: string;
    export { MEDIA_SEEKABLE_1 as MEDIA_SEEKABLE };
    const MEDIA_PREVIEW_TIME_1: string;
    export { MEDIA_PREVIEW_TIME_1 as MEDIA_PREVIEW_TIME };
    const MEDIA_PREVIEW_IMAGE_1: string;
    export { MEDIA_PREVIEW_IMAGE_1 as MEDIA_PREVIEW_IMAGE };
    const MEDIA_PREVIEW_COORDS_1: string;
    export { MEDIA_PREVIEW_COORDS_1 as MEDIA_PREVIEW_COORDS };
    const MEDIA_LOADING_1: string;
    export { MEDIA_LOADING_1 as MEDIA_LOADING };
    const MEDIA_BUFFERED_1: string;
    export { MEDIA_BUFFERED_1 as MEDIA_BUFFERED };
    const MEDIA_STREAM_TYPE_1: string;
    export { MEDIA_STREAM_TYPE_1 as MEDIA_STREAM_TYPE };
    const MEDIA_TARGET_LIVE_WINDOW_1: string;
    export { MEDIA_TARGET_LIVE_WINDOW_1 as MEDIA_TARGET_LIVE_WINDOW };
    const MEDIA_TIME_IS_LIVE_1: string;
    export { MEDIA_TIME_IS_LIVE_1 as MEDIA_TIME_IS_LIVE };
}
export namespace MediaStateChangeEvents {
    const MEDIA_AIRPLAY_UNAVAILABLE_2: string;
    export { MEDIA_AIRPLAY_UNAVAILABLE_2 as MEDIA_AIRPLAY_UNAVAILABLE };
    const MEDIA_FULLSCREEN_UNAVAILABLE_2: string;
    export { MEDIA_FULLSCREEN_UNAVAILABLE_2 as MEDIA_FULLSCREEN_UNAVAILABLE };
    const MEDIA_PIP_UNAVAILABLE_2: string;
    export { MEDIA_PIP_UNAVAILABLE_2 as MEDIA_PIP_UNAVAILABLE };
    const MEDIA_CAST_UNAVAILABLE_2: string;
    export { MEDIA_CAST_UNAVAILABLE_2 as MEDIA_CAST_UNAVAILABLE };
    const MEDIA_PAUSED_2: string;
    export { MEDIA_PAUSED_2 as MEDIA_PAUSED };
    const MEDIA_HAS_PLAYED_2: string;
    export { MEDIA_HAS_PLAYED_2 as MEDIA_HAS_PLAYED };
    const MEDIA_ENDED_2: string;
    export { MEDIA_ENDED_2 as MEDIA_ENDED };
    const MEDIA_MUTED_2: string;
    export { MEDIA_MUTED_2 as MEDIA_MUTED };
    const MEDIA_VOLUME_LEVEL_2: string;
    export { MEDIA_VOLUME_LEVEL_2 as MEDIA_VOLUME_LEVEL };
    const MEDIA_VOLUME_2: string;
    export { MEDIA_VOLUME_2 as MEDIA_VOLUME };
    const MEDIA_VOLUME_UNAVAILABLE_2: string;
    export { MEDIA_VOLUME_UNAVAILABLE_2 as MEDIA_VOLUME_UNAVAILABLE };
    const MEDIA_IS_PIP_2: string;
    export { MEDIA_IS_PIP_2 as MEDIA_IS_PIP };
    const MEDIA_IS_CASTING_2: string;
    export { MEDIA_IS_CASTING_2 as MEDIA_IS_CASTING };
    const MEDIA_SUBTITLES_LIST_2: string;
    export { MEDIA_SUBTITLES_LIST_2 as MEDIA_SUBTITLES_LIST };
    const MEDIA_SUBTITLES_SHOWING_2: string;
    export { MEDIA_SUBTITLES_SHOWING_2 as MEDIA_SUBTITLES_SHOWING };
    const MEDIA_IS_FULLSCREEN_2: string;
    export { MEDIA_IS_FULLSCREEN_2 as MEDIA_IS_FULLSCREEN };
    const MEDIA_PLAYBACK_RATE_2: string;
    export { MEDIA_PLAYBACK_RATE_2 as MEDIA_PLAYBACK_RATE };
    const MEDIA_CURRENT_TIME_2: string;
    export { MEDIA_CURRENT_TIME_2 as MEDIA_CURRENT_TIME };
    const MEDIA_DURATION_2: string;
    export { MEDIA_DURATION_2 as MEDIA_DURATION };
    const MEDIA_SEEKABLE_2: string;
    export { MEDIA_SEEKABLE_2 as MEDIA_SEEKABLE };
    const MEDIA_PREVIEW_TIME_2: string;
    export { MEDIA_PREVIEW_TIME_2 as MEDIA_PREVIEW_TIME };
    const MEDIA_PREVIEW_IMAGE_2: string;
    export { MEDIA_PREVIEW_IMAGE_2 as MEDIA_PREVIEW_IMAGE };
    const MEDIA_PREVIEW_COORDS_2: string;
    export { MEDIA_PREVIEW_COORDS_2 as MEDIA_PREVIEW_COORDS };
    const MEDIA_LOADING_2: string;
    export { MEDIA_LOADING_2 as MEDIA_LOADING };
    const MEDIA_BUFFERED_2: string;
    export { MEDIA_BUFFERED_2 as MEDIA_BUFFERED };
    const MEDIA_STREAM_TYPE_2: string;
    export { MEDIA_STREAM_TYPE_2 as MEDIA_STREAM_TYPE };
    const MEDIA_TARGET_LIVE_WINDOW_2: string;
    export { MEDIA_TARGET_LIVE_WINDOW_2 as MEDIA_TARGET_LIVE_WINDOW };
    const MEDIA_TIME_IS_LIVE_2: string;
    export { MEDIA_TIME_IS_LIVE_2 as MEDIA_TIME_IS_LIVE };
    export const USER_INACTIVE: string;
    export const BREAKPOINTS_CHANGE: string;
}
export namespace StateChangeEventToAttributeMap {
    const userinactivechange: string;
}
export namespace AttributeToStateChangeEventMap {
    const userinactive: string;
}
export namespace TextTrackKinds {
    const SUBTITLES: string;
    const CAPTIONS: string;
    const DESCRIPTIONS: string;
    const CHAPTERS: string;
    const METADATA: string;
}
export namespace TextTrackModes {
    const DISABLED: string;
    const HIDDEN: string;
    const SHOWING: string;
}
export namespace ReadyStates {
    const HAVE_NOTHING: number;
    const HAVE_METADATA: number;
    const HAVE_CURRENT_DATA: number;
    const HAVE_FUTURE_DATA: number;
    const HAVE_ENOUGH_DATA: number;
}
export namespace PointerTypes {
    const MOUSE: string;
    const PEN: string;
    const TOUCH: string;
}
export namespace AvailabilityStates {
    const UNAVAILABLE: string;
    const UNSUPPORTED: string;
}
export namespace StreamTypes {
    const LIVE: string;
    const ON_DEMAND: string;
    const UNKNOWN: string;
}
