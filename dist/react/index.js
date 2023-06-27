import React from "react";
import "../index.js";
import { toNativeProps } from "./common/utils.js";

/** @type { import("react").HTMLElement } */
const MediaChromeButton = React.forwardRef(({ children = [], ...props }, ref) => {
  return React.createElement('media-chrome-button', toNativeProps({ ...props, ref }), ...children);
});

export { MediaChromeButton };

/** @type { import("react").HTMLElement } */
const MediaAirplayButton = React.forwardRef(({ children = [], ...props }, ref) => {
  return React.createElement('media-airplay-button', toNativeProps({ ...props, ref }), ...children);
});

export { MediaAirplayButton };

/** @type { import("react").HTMLElement } */
const MediaCastButton = React.forwardRef(({ children = [], ...props }, ref) => {
  return React.createElement('media-cast-button', toNativeProps({ ...props, ref }), ...children);
});

export { MediaCastButton };

/** @type { import("react").HTMLElement } */
const MediaGestureReceiver = React.forwardRef(({ children = [], ...props }, ref) => {
  return React.createElement('media-gesture-receiver', toNativeProps({ ...props, ref }), ...children);
});

export { MediaGestureReceiver };

/** @type { import("react").HTMLElement } */
const MediaController = React.forwardRef(({ children = [], ...props }, ref) => {
  return React.createElement('media-controller', toNativeProps({ ...props, ref }), ...children);
});

export { MediaController };

/** @type { import("react").HTMLElement } */
const MediaChromeRange = React.forwardRef(({ children = [], ...props }, ref) => {
  return React.createElement('media-chrome-range', toNativeProps({ ...props, ref }), ...children);
});

export { MediaChromeRange };

/** @type { import("react").HTMLElement } */
const MediaControlBar = React.forwardRef(({ children = [], ...props }, ref) => {
  return React.createElement('media-control-bar', toNativeProps({ ...props, ref }), ...children);
});

export { MediaControlBar };

/** @type { import("react").HTMLElement } */
const MediaTextDisplay = React.forwardRef(({ children = [], ...props }, ref) => {
  return React.createElement('media-text-display', toNativeProps({ ...props, ref }), ...children);
});

export { MediaTextDisplay };

/** @type { import("react").HTMLElement } */
const MediaDurationDisplay = React.forwardRef(({ children = [], ...props }, ref) => {
  return React.createElement('media-duration-display', toNativeProps({ ...props, ref }), ...children);
});

export { MediaDurationDisplay };

/** @type { import("react").HTMLElement } */
const MediaTimeDisplay = React.forwardRef(({ children = [], ...props }, ref) => {
  return React.createElement('media-time-display', toNativeProps({ ...props, ref }), ...children);
});

export { MediaTimeDisplay };

/** @type { import("react").HTMLElement } */
const MediaCaptionsButton = React.forwardRef(({ children = [], ...props }, ref) => {
  return React.createElement('media-captions-button', toNativeProps({ ...props, ref }), ...children);
});

export { MediaCaptionsButton };

/** @type { import("react").HTMLElement } */
const MediaSeekForwardButton = React.forwardRef(({ children = [], ...props }, ref) => {
  return React.createElement('media-seek-forward-button', toNativeProps({ ...props, ref }), ...children);
});

export { MediaSeekForwardButton };

/** @type { import("react").HTMLElement } */
const MediaFullscreenButton = React.forwardRef(({ children = [], ...props }, ref) => {
  return React.createElement('media-fullscreen-button', toNativeProps({ ...props, ref }), ...children);
});

export { MediaFullscreenButton };

/** @type { import("react").HTMLElement } */
const MediaLiveButton = React.forwardRef(({ children = [], ...props }, ref) => {
  return React.createElement('media-live-button', toNativeProps({ ...props, ref }), ...children);
});

export { MediaLiveButton };

/** @type { import("react").HTMLElement } */
const MediaMuteButton = React.forwardRef(({ children = [], ...props }, ref) => {
  return React.createElement('media-mute-button', toNativeProps({ ...props, ref }), ...children);
});

export { MediaMuteButton };

/** @type { import("react").HTMLElement } */
const MediaPipButton = React.forwardRef(({ children = [], ...props }, ref) => {
  return React.createElement('media-pip-button', toNativeProps({ ...props, ref }), ...children);
});

export { MediaPipButton };

/** @type { import("react").HTMLElement } */
const MediaPlayButton = React.forwardRef(({ children = [], ...props }, ref) => {
  return React.createElement('media-play-button', toNativeProps({ ...props, ref }), ...children);
});

export { MediaPlayButton };

/** @type { import("react").HTMLElement } */
const MediaPlaybackRateButton = React.forwardRef(({ children = [], ...props }, ref) => {
  return React.createElement('media-playback-rate-button', toNativeProps({ ...props, ref }), ...children);
});

export { MediaPlaybackRateButton };

/** @type { import("react").HTMLElement } */
const MediaPosterImage = React.forwardRef(({ children = [], ...props }, ref) => {
  return React.createElement('media-poster-image', toNativeProps({ ...props, ref }), ...children);
});

export { MediaPosterImage };

/** @type { import("react").HTMLElement } */
const MediaSeekBackwardButton = React.forwardRef(({ children = [], ...props }, ref) => {
  return React.createElement('media-seek-backward-button', toNativeProps({ ...props, ref }), ...children);
});

export { MediaSeekBackwardButton };

/** @type { import("react").HTMLElement } */
const MediaPreviewTimeDisplay = React.forwardRef(({ children = [], ...props }, ref) => {
  return React.createElement('media-preview-time-display', toNativeProps({ ...props, ref }), ...children);
});

export { MediaPreviewTimeDisplay };

/** @type { import("react").HTMLElement } */
const MediaPreviewThumbnail = React.forwardRef(({ children = [], ...props }, ref) => {
  return React.createElement('media-preview-thumbnail', toNativeProps({ ...props, ref }), ...children);
});

export { MediaPreviewThumbnail };

/** @type { import("react").HTMLElement } */
const MediaTimeRange = React.forwardRef(({ children = [], ...props }, ref) => {
  return React.createElement('media-time-range', toNativeProps({ ...props, ref }), ...children);
});

export { MediaTimeRange };

/** @type { import("react").HTMLElement } */
const MediaLoadingIndicator = React.forwardRef(({ children = [], ...props }, ref) => {
  return React.createElement('media-loading-indicator', toNativeProps({ ...props, ref }), ...children);
});

export { MediaLoadingIndicator };

/** @type { import("react").HTMLElement } */
const MediaVolumeRange = React.forwardRef(({ children = [], ...props }, ref) => {
  return React.createElement('media-volume-range', toNativeProps({ ...props, ref }), ...children);
});

export { MediaVolumeRange };
