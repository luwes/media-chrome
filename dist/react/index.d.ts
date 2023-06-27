import type React from 'react';

import type * as CSS from 'csstype';
declare global {
  interface Element {
    slot?: string;
  }
}

declare module 'csstype' {
  interface Properties {
    // Should add generic support for any CSS variables
    [index: `--${string}`]: any;
  }
}

type GenericProps = { [k: string]: any };
type GenericElement = HTMLElement;

type GenericForwardRef = React.ForwardRefExoticComponent<
  GenericProps & React.RefAttributes<GenericElement | undefined>
>;

declare const MediaChromeButton: GenericForwardRef;
export { MediaChromeButton };

declare const MediaAirplayButton: GenericForwardRef;
export { MediaAirplayButton };

declare const MediaCastButton: GenericForwardRef;
export { MediaCastButton };

declare const MediaGestureReceiver: GenericForwardRef;
export { MediaGestureReceiver };

declare const MediaController: GenericForwardRef;
export { MediaController };

declare const MediaChromeRange: GenericForwardRef;
export { MediaChromeRange };

declare const MediaControlBar: GenericForwardRef;
export { MediaControlBar };

declare const MediaTextDisplay: GenericForwardRef;
export { MediaTextDisplay };

declare const MediaDurationDisplay: GenericForwardRef;
export { MediaDurationDisplay };

declare const MediaTimeDisplay: GenericForwardRef;
export { MediaTimeDisplay };

declare const MediaCaptionsButton: GenericForwardRef;
export { MediaCaptionsButton };

declare const MediaSeekForwardButton: GenericForwardRef;
export { MediaSeekForwardButton };

declare const MediaFullscreenButton: GenericForwardRef;
export { MediaFullscreenButton };

declare const MediaLiveButton: GenericForwardRef;
export { MediaLiveButton };

declare const MediaMuteButton: GenericForwardRef;
export { MediaMuteButton };

declare const MediaPipButton: GenericForwardRef;
export { MediaPipButton };

declare const MediaPlayButton: GenericForwardRef;
export { MediaPlayButton };

declare const MediaPlaybackRateButton: GenericForwardRef;
export { MediaPlaybackRateButton };

declare const MediaPosterImage: GenericForwardRef;
export { MediaPosterImage };

declare const MediaSeekBackwardButton: GenericForwardRef;
export { MediaSeekBackwardButton };

declare const MediaPreviewTimeDisplay: GenericForwardRef;
export { MediaPreviewTimeDisplay };

declare const MediaPreviewThumbnail: GenericForwardRef;
export { MediaPreviewThumbnail };

declare const MediaTimeRange: GenericForwardRef;
export { MediaTimeRange };

declare const MediaLoadingIndicator: GenericForwardRef;
export { MediaLoadingIndicator };

declare const MediaVolumeRange: GenericForwardRef;
export { MediaVolumeRange };
