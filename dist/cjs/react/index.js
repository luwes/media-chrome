var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var react_exports = {};
__export(react_exports, {
  MediaAirplayButton: () => MediaAirplayButton,
  MediaCaptionsButton: () => MediaCaptionsButton,
  MediaCastButton: () => MediaCastButton,
  MediaChromeButton: () => MediaChromeButton,
  MediaChromeRange: () => MediaChromeRange,
  MediaControlBar: () => MediaControlBar,
  MediaController: () => MediaController,
  MediaDurationDisplay: () => MediaDurationDisplay,
  MediaFullscreenButton: () => MediaFullscreenButton,
  MediaGestureReceiver: () => MediaGestureReceiver,
  MediaLiveButton: () => MediaLiveButton,
  MediaLoadingIndicator: () => MediaLoadingIndicator,
  MediaMuteButton: () => MediaMuteButton,
  MediaPipButton: () => MediaPipButton,
  MediaPlayButton: () => MediaPlayButton,
  MediaPlaybackRateButton: () => MediaPlaybackRateButton,
  MediaPosterImage: () => MediaPosterImage,
  MediaPreviewThumbnail: () => MediaPreviewThumbnail,
  MediaPreviewTimeDisplay: () => MediaPreviewTimeDisplay,
  MediaSeekBackwardButton: () => MediaSeekBackwardButton,
  MediaSeekForwardButton: () => MediaSeekForwardButton,
  MediaTextDisplay: () => MediaTextDisplay,
  MediaTimeDisplay: () => MediaTimeDisplay,
  MediaTimeRange: () => MediaTimeRange,
  MediaVolumeRange: () => MediaVolumeRange
});
module.exports = __toCommonJS(react_exports);
var import_react = __toESM(require("react"), 1);
var import__ = require("../index.js");
var import_utils = require("./common/utils.js");
const MediaChromeButton = import_react.default.forwardRef(({ children = [], ...props }, ref) => {
  return import_react.default.createElement("media-chrome-button", (0, import_utils.toNativeProps)({ ...props, ref }), ...children);
});
const MediaAirplayButton = import_react.default.forwardRef(({ children = [], ...props }, ref) => {
  return import_react.default.createElement("media-airplay-button", (0, import_utils.toNativeProps)({ ...props, ref }), ...children);
});
const MediaCastButton = import_react.default.forwardRef(({ children = [], ...props }, ref) => {
  return import_react.default.createElement("media-cast-button", (0, import_utils.toNativeProps)({ ...props, ref }), ...children);
});
const MediaGestureReceiver = import_react.default.forwardRef(({ children = [], ...props }, ref) => {
  return import_react.default.createElement("media-gesture-receiver", (0, import_utils.toNativeProps)({ ...props, ref }), ...children);
});
const MediaController = import_react.default.forwardRef(({ children = [], ...props }, ref) => {
  return import_react.default.createElement("media-controller", (0, import_utils.toNativeProps)({ ...props, ref }), ...children);
});
const MediaChromeRange = import_react.default.forwardRef(({ children = [], ...props }, ref) => {
  return import_react.default.createElement("media-chrome-range", (0, import_utils.toNativeProps)({ ...props, ref }), ...children);
});
const MediaControlBar = import_react.default.forwardRef(({ children = [], ...props }, ref) => {
  return import_react.default.createElement("media-control-bar", (0, import_utils.toNativeProps)({ ...props, ref }), ...children);
});
const MediaTextDisplay = import_react.default.forwardRef(({ children = [], ...props }, ref) => {
  return import_react.default.createElement("media-text-display", (0, import_utils.toNativeProps)({ ...props, ref }), ...children);
});
const MediaDurationDisplay = import_react.default.forwardRef(({ children = [], ...props }, ref) => {
  return import_react.default.createElement("media-duration-display", (0, import_utils.toNativeProps)({ ...props, ref }), ...children);
});
const MediaTimeDisplay = import_react.default.forwardRef(({ children = [], ...props }, ref) => {
  return import_react.default.createElement("media-time-display", (0, import_utils.toNativeProps)({ ...props, ref }), ...children);
});
const MediaCaptionsButton = import_react.default.forwardRef(({ children = [], ...props }, ref) => {
  return import_react.default.createElement("media-captions-button", (0, import_utils.toNativeProps)({ ...props, ref }), ...children);
});
const MediaSeekForwardButton = import_react.default.forwardRef(({ children = [], ...props }, ref) => {
  return import_react.default.createElement("media-seek-forward-button", (0, import_utils.toNativeProps)({ ...props, ref }), ...children);
});
const MediaFullscreenButton = import_react.default.forwardRef(({ children = [], ...props }, ref) => {
  return import_react.default.createElement("media-fullscreen-button", (0, import_utils.toNativeProps)({ ...props, ref }), ...children);
});
const MediaLiveButton = import_react.default.forwardRef(({ children = [], ...props }, ref) => {
  return import_react.default.createElement("media-live-button", (0, import_utils.toNativeProps)({ ...props, ref }), ...children);
});
const MediaMuteButton = import_react.default.forwardRef(({ children = [], ...props }, ref) => {
  return import_react.default.createElement("media-mute-button", (0, import_utils.toNativeProps)({ ...props, ref }), ...children);
});
const MediaPipButton = import_react.default.forwardRef(({ children = [], ...props }, ref) => {
  return import_react.default.createElement("media-pip-button", (0, import_utils.toNativeProps)({ ...props, ref }), ...children);
});
const MediaPlayButton = import_react.default.forwardRef(({ children = [], ...props }, ref) => {
  return import_react.default.createElement("media-play-button", (0, import_utils.toNativeProps)({ ...props, ref }), ...children);
});
const MediaPlaybackRateButton = import_react.default.forwardRef(({ children = [], ...props }, ref) => {
  return import_react.default.createElement("media-playback-rate-button", (0, import_utils.toNativeProps)({ ...props, ref }), ...children);
});
const MediaPosterImage = import_react.default.forwardRef(({ children = [], ...props }, ref) => {
  return import_react.default.createElement("media-poster-image", (0, import_utils.toNativeProps)({ ...props, ref }), ...children);
});
const MediaSeekBackwardButton = import_react.default.forwardRef(({ children = [], ...props }, ref) => {
  return import_react.default.createElement("media-seek-backward-button", (0, import_utils.toNativeProps)({ ...props, ref }), ...children);
});
const MediaPreviewTimeDisplay = import_react.default.forwardRef(({ children = [], ...props }, ref) => {
  return import_react.default.createElement("media-preview-time-display", (0, import_utils.toNativeProps)({ ...props, ref }), ...children);
});
const MediaPreviewThumbnail = import_react.default.forwardRef(({ children = [], ...props }, ref) => {
  return import_react.default.createElement("media-preview-thumbnail", (0, import_utils.toNativeProps)({ ...props, ref }), ...children);
});
const MediaTimeRange = import_react.default.forwardRef(({ children = [], ...props }, ref) => {
  return import_react.default.createElement("media-time-range", (0, import_utils.toNativeProps)({ ...props, ref }), ...children);
});
const MediaLoadingIndicator = import_react.default.forwardRef(({ children = [], ...props }, ref) => {
  return import_react.default.createElement("media-loading-indicator", (0, import_utils.toNativeProps)({ ...props, ref }), ...children);
});
const MediaVolumeRange = import_react.default.forwardRef(({ children = [], ...props }, ref) => {
  return import_react.default.createElement("media-volume-range", (0, import_utils.toNativeProps)({ ...props, ref }), ...children);
});
