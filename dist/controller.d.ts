export const volumeSupportPromise: Promise<boolean>;
export namespace MediaUIStates {
    namespace MEDIA_PAUSED {
        function get(controller: any): any;
        const mediaEvents: string[];
    }
    namespace MEDIA_HAS_PLAYED {
        export function get_1(controller: any): boolean;
        export { get_1 as get };
        const mediaEvents_1: string[];
        export { mediaEvents_1 as mediaEvents };
    }
    namespace MEDIA_ENDED {
        export function get_2(controller: any): any;
        export { get_2 as get };
        const mediaEvents_2: string[];
        export { mediaEvents_2 as mediaEvents };
    }
    namespace MEDIA_PLAYBACK_RATE {
        export function get_3(controller: any): any;
        export { get_3 as get };
        const mediaEvents_3: string[];
        export { mediaEvents_3 as mediaEvents };
    }
    namespace MEDIA_MUTED {
        export function get_4(controller: any): any;
        export { get_4 as get };
        const mediaEvents_4: string[];
        export { mediaEvents_4 as mediaEvents };
    }
    namespace MEDIA_VOLUME {
        export function get_5(controller: any): number;
        export { get_5 as get };
        const mediaEvents_5: string[];
        export { mediaEvents_5 as mediaEvents };
    }
    namespace MEDIA_VOLUME_LEVEL {
        export function get_6(controller: any): string;
        export { get_6 as get };
        const mediaEvents_6: string[];
        export { mediaEvents_6 as mediaEvents };
    }
    namespace MEDIA_CURRENT_TIME {
        export function get_7(controller: any): any;
        export { get_7 as get };
        const mediaEvents_7: string[];
        export { mediaEvents_7 as mediaEvents };
    }
    namespace MEDIA_DURATION {
        export function get_8(controller: any): any;
        export { get_8 as get };
        const mediaEvents_8: string[];
        export { mediaEvents_8 as mediaEvents };
    }
    namespace MEDIA_SEEKABLE {
        export function get_9(controller: any): number[];
        export { get_9 as get };
        const mediaEvents_9: string[];
        export { mediaEvents_9 as mediaEvents };
    }
    namespace MEDIA_LOADING {
        export function get_10(controller: any): boolean;
        export { get_10 as get };
        const mediaEvents_10: string[];
        export { mediaEvents_10 as mediaEvents };
    }
    namespace MEDIA_BUFFERED {
        export function get_11(controller: any): string[][];
        export { get_11 as get };
        const mediaEvents_11: string[];
        export { mediaEvents_11 as mediaEvents };
    }
    namespace MEDIA_STREAM_TYPE {
        export function get_12(controller: any): any;
        export { get_12 as get };
        const mediaEvents_12: string[];
        export { mediaEvents_12 as mediaEvents };
    }
    namespace MEDIA_TARGET_LIVE_WINDOW {
        export function get_13(controller: any): any;
        export { get_13 as get };
        const mediaEvents_13: string[];
        export { mediaEvents_13 as mediaEvents };
    }
    namespace MEDIA_TIME_IS_LIVE {
        export function get_14(controller: any): boolean;
        export { get_14 as get };
        const mediaEvents_14: string[];
        export { mediaEvents_14 as mediaEvents };
    }
    namespace MEDIA_IS_FULLSCREEN {
        export function get_15(controller: any, event: any): any;
        export { get_15 as get };
        export const rootEvents: string[];
        const mediaEvents_15: any[];
        export { mediaEvents_15 as mediaEvents };
    }
    namespace MEDIA_IS_PIP {
        export function get_16(controller: any, e: any): any;
        export { get_16 as get };
        const mediaEvents_16: string[];
        export { mediaEvents_16 as mediaEvents };
    }
    namespace MEDIA_IS_CASTING {
        export function get_17(controller: any, e: any): any;
        export { get_17 as get };
        const mediaEvents_17: string[];
        export { mediaEvents_17 as mediaEvents };
    }
    namespace MEDIA_AIRPLAY_UNAVAILABLE {
        export function get_18(controller: any, e: any): string;
        export { get_18 as get };
        const mediaEvents_18: string[];
        export { mediaEvents_18 as mediaEvents };
    }
    namespace MEDIA_CAST_UNAVAILABLE {
        export function get_19(): string;
        export { get_19 as get };
        const mediaEvents_19: string[];
        export { mediaEvents_19 as mediaEvents };
    }
    namespace MEDIA_FULLSCREEN_UNAVAILABLE {
        export function get_20(): string;
        export { get_20 as get };
    }
    namespace MEDIA_PIP_UNAVAILABLE {
        export function get_21(): string;
        export { get_21 as get };
    }
    namespace MEDIA_VOLUME_UNAVAILABLE {
        export function get_22(controller: any): string;
        export { get_22 as get };
        const mediaEvents_20: string[];
        export { mediaEvents_20 as mediaEvents };
    }
    namespace MEDIA_SUBTITLES_LIST {
        export function get_23(controller: any): {
            kind: TextTrackKind;
            label: string;
            language: string;
        }[];
        export { get_23 as get };
        const mediaEvents_21: string[];
        export { mediaEvents_21 as mediaEvents };
        export const trackListEvents: string[];
    }
    namespace MEDIA_SUBTITLES_SHOWING {
        export function get_24(controller: any): {
            kind: TextTrackKind;
            label: string;
            language: string;
        }[];
        export { get_24 as get };
        const mediaEvents_22: string[];
        export { mediaEvents_22 as mediaEvents };
        const trackListEvents_1: string[];
        export { trackListEvents_1 as trackListEvents };
    }
}
export namespace MediaUIRequestHandlers {
    function MEDIA_PLAY_REQUEST(media: any, e: any, controller: any): void;
    function MEDIA_PAUSE_REQUEST(media: any): any;
    function MEDIA_MUTE_REQUEST(media: any): boolean;
    function MEDIA_UNMUTE_REQUEST(media: any): void;
    function MEDIA_VOLUME_REQUEST(media: any, e: any, mediaController: any): void;
    function MEDIA_ENTER_FULLSCREEN_REQUEST(media: any, e: any, controller: any): void;
    function MEDIA_EXIT_FULLSCREEN_REQUEST(): void;
    function MEDIA_ENTER_PIP_REQUEST(media: any): void;
    function MEDIA_EXIT_PIP_REQUEST(): void;
    function MEDIA_ENTER_CAST_REQUEST(media: any): void;
    function MEDIA_EXIT_CAST_REQUEST(): Promise<void>;
    function MEDIA_SEEK_REQUEST(media: any, e: any): void;
    function MEDIA_PLAYBACK_RATE_REQUEST(media: any, e: any): void;
    function MEDIA_PREVIEW_REQUEST(media: any, e: any, controller: any): void;
    function MEDIA_SHOW_SUBTITLES_REQUEST(media: any, e: any, controller: any): void;
    function MEDIA_DISABLE_SUBTITLES_REQUEST(media: any, e: any, controller: any): void;
    function MEDIA_AIRPLAY_REQUEST(media: any): void;
    function MEDIA_SEEK_TO_LIVE_REQUEST(media: any): void;
}
