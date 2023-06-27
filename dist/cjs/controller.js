var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var controller_exports = {};
__export(controller_exports, {
  MediaUIRequestHandlers: () => MediaUIRequestHandlers,
  MediaUIStates: () => MediaUIStates,
  volumeSupportPromise: () => volumeSupportPromise
});
module.exports = __toCommonJS(controller_exports);
var import_server_safe_globals = require("./utils/server-safe-globals.js");
var import_fullscreen_api = require("./utils/fullscreen-api.js");
var import_element_utils = require("./utils/element-utils.js");
var import_platform_tests = require("./utils/platform-tests.js");
var import_constants = require("./constants.js");
var import_captions = require("./utils/captions.js");
let volumeSupported;
const volumeSupportPromise = (0, import_platform_tests.hasVolumeSupportAsync)().then((supported) => {
  volumeSupported = supported;
  return volumeSupported;
});
const StreamTypeValues = Object.values(import_constants.StreamTypes);
const getSubtitleTracks = (controller) => {
  return (0, import_captions.getTextTracksList)(controller.media, (textTrack) => {
    return [import_constants.TextTrackKinds.SUBTITLES, import_constants.TextTrackKinds.CAPTIONS].includes(textTrack.kind);
  }).sort((a, b) => a.kind >= b.kind ? 1 : -1);
};
const getShowingSubtitleTracks = (controller) => {
  return (0, import_captions.getTextTracksList)(controller.media, (textTrack) => {
    return textTrack.mode === import_constants.TextTrackModes.SHOWING && [import_constants.TextTrackKinds.SUBTITLES, import_constants.TextTrackKinds.CAPTIONS].includes(textTrack.kind);
  });
};
const MediaUIStates = {
  MEDIA_PAUSED: {
    get: function(controller) {
      const { media } = controller;
      return media ? media.paused : true;
    },
    mediaEvents: ["play", "playing", "pause", "emptied"]
  },
  MEDIA_HAS_PLAYED: {
    get: function(controller) {
      const { media } = controller;
      if (!media)
        return false;
      return !media.paused;
    },
    mediaEvents: ["playing", "emptied"]
  },
  MEDIA_ENDED: {
    get: function(controller) {
      const { media } = controller;
      return media ? media.ended : false;
    },
    mediaEvents: ["seeked", "ended", "emptied"]
  },
  MEDIA_PLAYBACK_RATE: {
    get: function(controller) {
      const { media } = controller;
      if (!media || typeof media.playbackRate == "undefined") {
        return 1;
      }
      return media.playbackRate;
    },
    mediaEvents: ["ratechange", "loadstart"]
  },
  MEDIA_MUTED: {
    get: function(controller) {
      const { media } = controller;
      if (!media || typeof media.muted == "undefined") {
        return false;
      }
      return media.muted;
    },
    mediaEvents: ["volumechange"]
  },
  MEDIA_VOLUME: {
    get: function(controller) {
      const { media } = controller;
      if (!media || typeof media.volume == "undefined") {
        return 1;
      }
      return Number(media.volume);
    },
    mediaEvents: ["volumechange"]
  },
  MEDIA_VOLUME_LEVEL: {
    get: function(controller) {
      const { media } = controller;
      let level = "high";
      if (!media || typeof media.volume == "undefined") {
        return level;
      }
      const { muted, volume } = media;
      if (volume === 0 || muted) {
        level = "off";
      } else if (volume < 0.5) {
        level = "low";
      } else if (volume < 0.75) {
        level = "medium";
      }
      return level;
    },
    mediaEvents: ["volumechange"]
  },
  MEDIA_CURRENT_TIME: {
    get: function(controller) {
      const { media } = controller;
      if (!media || typeof media.currentTime == "undefined") {
        return 0;
      }
      return media.currentTime;
    },
    mediaEvents: ["timeupdate", "loadedmetadata"]
  },
  MEDIA_DURATION: {
    get: function(controller) {
      const { media } = controller;
      if (!media || !Number.isFinite(media.duration)) {
        return NaN;
      }
      return media.duration;
    },
    mediaEvents: ["durationchange", "loadedmetadata", "emptied"]
  },
  MEDIA_SEEKABLE: {
    get: function(controller) {
      var _a;
      const { media } = controller;
      if (!((_a = media == null ? void 0 : media.seekable) == null ? void 0 : _a.length))
        return void 0;
      const start = media.seekable.start(0);
      const end = media.seekable.end(media.seekable.length - 1);
      if (!start && !end)
        return void 0;
      return [Number(start.toFixed(3)), Number(end.toFixed(3))];
    },
    mediaEvents: ["loadedmetadata", "emptied", "progress"]
  },
  MEDIA_LOADING: {
    get: function(controller) {
      var _a;
      return !!(((_a = controller.media) == null ? void 0 : _a.readyState) < 3);
    },
    mediaEvents: ["waiting", "playing", "emptied"]
  },
  MEDIA_BUFFERED: {
    get: function(controller) {
      var _a, _b, _c;
      const timeRanges = (_a = controller.media) == null ? void 0 : _a.buffered;
      return Array.from((_c = (_b = controller.media) == null ? void 0 : _b.buffered) != null ? _c : []).map((_, i) => [
        Number(timeRanges.start(i)).toFixed(3),
        Number(timeRanges.end(i)).toFixed(3)
      ]);
    },
    mediaEvents: ["progress", "emptied"]
  },
  MEDIA_STREAM_TYPE: {
    get: function(controller) {
      const { media } = controller;
      if (!media)
        return void 0;
      const { streamType } = media;
      if (StreamTypeValues.includes(streamType)) {
        if (streamType === import_constants.StreamTypes.UNKNOWN) {
          const defaultType = controller.getAttribute("defaultstreamtype");
          if ([import_constants.StreamTypes.LIVE, import_constants.StreamTypes.ON_DEMAND].includes(defaultType)) {
            return defaultType;
          }
          return void 0;
        }
        return streamType;
      }
      const duration = media.duration;
      if (duration === Infinity) {
        return import_constants.StreamTypes.LIVE;
      } else if (Number.isFinite(duration)) {
        return import_constants.StreamTypes.ON_DEMAND;
      } else {
        const defaultType = controller.getAttribute("defaultstreamtype");
        if ([import_constants.StreamTypes.LIVE, import_constants.StreamTypes.ON_DEMAND].includes(defaultType)) {
          return defaultType;
        }
      }
      return void 0;
    },
    mediaEvents: [
      "emptied",
      "durationchange",
      "loadedmetadata",
      "streamtypechange"
    ]
  },
  MEDIA_TARGET_LIVE_WINDOW: {
    get: function(controller) {
      const { media } = controller;
      if (!media)
        return Number.NaN;
      const { targetLiveWindow } = media;
      const streamType = MediaUIStates.MEDIA_STREAM_TYPE.get(controller);
      if ((targetLiveWindow == null || Number.isNaN(targetLiveWindow)) && streamType === import_constants.StreamTypes.LIVE) {
        return 0;
      }
      return targetLiveWindow;
    },
    mediaEvents: [
      "emptied",
      "durationchange",
      "loadedmetadata",
      "streamtypechange",
      "targetlivewindowchange"
    ]
  },
  MEDIA_TIME_IS_LIVE: {
    get: function(controller) {
      const { media } = controller;
      if (!media)
        return false;
      if (typeof media.liveEdgeStart === "number") {
        if (Number.isNaN(media.liveEdgeStart))
          return false;
        return media.currentTime >= media.liveEdgeStart;
      }
      const live = MediaUIStates.MEDIA_STREAM_TYPE.get(controller) === "live";
      if (!live)
        return false;
      const seekable = media.seekable;
      if (!seekable)
        return true;
      if (!seekable.length)
        return false;
      const liveEdgeStartOffset = controller.hasAttribute("liveedgeoffset") ? Number(controller.getAttribute("liveedgeoffset")) : 10;
      const liveEdgeStart = seekable.end(seekable.length - 1) - liveEdgeStartOffset;
      return media.currentTime >= liveEdgeStart;
    },
    mediaEvents: ["playing", "timeupdate", "progress", "waiting", "emptied"]
  },
  MEDIA_IS_FULLSCREEN: {
    get: function(controller, event) {
      var _a;
      const media = controller.media;
      if (media && import_server_safe_globals.document[import_fullscreen_api.fullscreenApi.element] === void 0 && "webkitDisplayingFullscreen" in media) {
        return media.webkitDisplayingFullscreen && media.webkitPresentationMode === "fullscreen";
      }
      let fullscreenEl;
      if (event) {
        const isSomeElementFullscreen = import_server_safe_globals.document[import_fullscreen_api.fullscreenApi.element];
        fullscreenEl = isSomeElementFullscreen ? event.target : null;
      } else {
        fullscreenEl = (_a = controller.getRootNode().fullscreenElement) != null ? _a : import_server_safe_globals.document[import_fullscreen_api.fullscreenApi.element];
      }
      return (0, import_element_utils.containsComposedNode)(controller.fullscreenElement, fullscreenEl);
    },
    rootEvents: import_fullscreen_api.fullscreenApi.rootEvents,
    mediaEvents: import_fullscreen_api.fullscreenApi.mediaEvents
  },
  MEDIA_IS_PIP: {
    get: function(controller, e) {
      var _a;
      const media = controller.media;
      if (!media)
        return false;
      if (e) {
        return e.type == "enterpictureinpicture";
      } else {
        const pipElement = (_a = controller.getRootNode().pictureInPictureElement) != null ? _a : import_server_safe_globals.document.pictureInPictureElement;
        return (0, import_element_utils.containsComposedNode)(media, pipElement);
      }
    },
    mediaEvents: ["enterpictureinpicture", "leavepictureinpicture"]
  },
  MEDIA_IS_CASTING: {
    get: function(controller, e) {
      var _a;
      const { media } = controller;
      if (!media)
        return false;
      const castElement = (_a = import_server_safe_globals.globalThis.CastableVideoElement) == null ? void 0 : _a.castElement;
      let castState = (0, import_element_utils.containsComposedNode)(media, castElement);
      if ((e == null ? void 0 : e.type) === "castchange" && (e == null ? void 0 : e.detail) === "CONNECTING") {
        castState = "connecting";
      }
      return castState;
    },
    mediaEvents: ["entercast", "leavecast", "castchange"]
  },
  MEDIA_AIRPLAY_UNAVAILABLE: {
    get: function(controller, e) {
      if (!import_platform_tests.airplaySupported)
        return import_constants.AvailabilityStates.UNSUPPORTED;
      if (!e)
        return void 0;
      if (e.availability === "available") {
        return void 0;
      } else if (e.availability === "not-available") {
        return import_constants.AvailabilityStates.UNAVAILABLE;
      }
    },
    mediaEvents: ["webkitplaybacktargetavailabilitychanged"]
  },
  MEDIA_CAST_UNAVAILABLE: {
    get: function() {
      var _a;
      const castState = (_a = import_server_safe_globals.globalThis.CastableVideoElement) == null ? void 0 : _a.castState;
      if (!import_platform_tests.castSupported || !castState) {
        return import_constants.AvailabilityStates.UNSUPPORTED;
      }
      if (castState.includes("CONNECT")) {
        return void 0;
      } else {
        return import_constants.AvailabilityStates.UNAVAILABLE;
      }
    },
    mediaEvents: ["castchange"]
  },
  MEDIA_FULLSCREEN_UNAVAILABLE: {
    get: function() {
      return import_platform_tests.fullscreenSupported ? void 0 : import_constants.AvailabilityStates.UNAVAILABLE;
    }
  },
  MEDIA_PIP_UNAVAILABLE: {
    get: function() {
      return import_platform_tests.pipSupported ? void 0 : import_constants.AvailabilityStates.UNSUPPORTED;
    }
  },
  MEDIA_VOLUME_UNAVAILABLE: {
    get: function(controller) {
      if (volumeSupported !== void 0 && !volumeSupported) {
        return import_constants.AvailabilityStates.UNSUPPORTED;
      }
      const { media } = controller;
      if (media && typeof media.volume == "undefined") {
        return import_constants.AvailabilityStates.UNAVAILABLE;
      }
      return void 0;
    },
    mediaEvents: ["loadstart"]
  },
  MEDIA_SUBTITLES_LIST: {
    get: function(controller) {
      return getSubtitleTracks(controller).map(({ kind, label, language }) => ({ kind, label, language }));
    },
    mediaEvents: ["loadstart"],
    trackListEvents: ["addtrack", "removetrack"]
  },
  MEDIA_SUBTITLES_SHOWING: {
    get: function(controller) {
      if (controller.hasAttribute("defaultsubtitles") && !controller.hasAttribute(import_constants.MediaUIAttributes.MEDIA_HAS_PLAYED) && !controller.hasAttribute(import_constants.MediaUIAttributes.MEDIA_SUBTITLES_SHOWING)) {
        (0, import_captions.toggleSubsCaps)(controller, true);
      }
      return getShowingSubtitleTracks(controller).map(({ kind, label, language }) => ({ kind, label, language }));
    },
    mediaEvents: ["loadstart"],
    trackListEvents: ["addtrack", "removetrack", "change"]
  }
};
const MediaUIRequestHandlers = {
  MEDIA_PLAY_REQUEST: (media, e, controller) => {
    var _a;
    const streamType = MediaUIStates.MEDIA_STREAM_TYPE.get(controller);
    const autoSeekToLive = controller.getAttribute("noautoseektolive") === null;
    if (streamType == import_constants.StreamTypes.LIVE && autoSeekToLive) {
      MediaUIRequestHandlers["MEDIA_SEEK_TO_LIVE_REQUEST"](media);
    }
    (_a = media.play()) == null ? void 0 : _a.catch(() => {
    });
  },
  MEDIA_PAUSE_REQUEST: (media) => media.pause(),
  MEDIA_MUTE_REQUEST: (media) => media.muted = true,
  MEDIA_UNMUTE_REQUEST: (media) => {
    media.muted = false;
    if (media.volume === 0) {
      media.volume = 0.25;
    }
  },
  MEDIA_VOLUME_REQUEST: (media, e, mediaController) => {
    const volume = e.detail;
    media.volume = volume;
    if (volume > 0 && media.muted) {
      media.muted = false;
    }
    if (!mediaController.hasAttribute("novolumepref")) {
      try {
        import_server_safe_globals.globalThis.localStorage.setItem(
          "media-chrome-pref-volume",
          volume.toString()
        );
      } catch (err) {
      }
    }
  },
  MEDIA_ENTER_FULLSCREEN_REQUEST: (media, e, controller) => {
    if (!import_platform_tests.fullscreenSupported) {
      console.warn(
        "Fullscreen support is unavailable; not entering fullscreen"
      );
      return;
    }
    if (import_server_safe_globals.document.pictureInPictureElement) {
      import_server_safe_globals.document.exitPictureInPicture();
    }
    if (controller[import_fullscreen_api.fullscreenApi.enter]) {
      controller.fullscreenElement[import_fullscreen_api.fullscreenApi.enter]();
    } else if (media.webkitEnterFullscreen) {
      media.webkitEnterFullscreen();
    } else if (media.requestFullscreen) {
      media.requestFullscreen();
    } else {
      console.warn("MediaChrome: Fullscreen not supported");
    }
  },
  MEDIA_EXIT_FULLSCREEN_REQUEST: () => {
    import_server_safe_globals.document[import_fullscreen_api.fullscreenApi.exit]();
  },
  MEDIA_ENTER_PIP_REQUEST: (media) => {
    if (!import_server_safe_globals.document.pictureInPictureEnabled) {
      console.warn("MediaChrome: Picture-in-picture is not enabled");
      return;
    }
    if (!media.requestPictureInPicture) {
      console.warn(
        "MediaChrome: The current media does not support picture-in-picture"
      );
      return;
    }
    if (import_server_safe_globals.document[import_fullscreen_api.fullscreenApi.element]) {
      import_server_safe_globals.document[import_fullscreen_api.fullscreenApi.exit]();
    }
    const warnNotReady = () => {
      console.warn(
        "MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0."
      );
    };
    media.requestPictureInPicture().catch((err) => {
      if (err.code === 11) {
        if (media.readyState === 0 && media.preload === "none") {
          const cleanup = () => {
            media.removeEventListener("loadedmetadata", tryPip);
            media.preload = "none";
          };
          const tryPip = () => {
            media.requestPictureInPicture().catch(warnNotReady);
            cleanup();
          };
          media.addEventListener("loadedmetadata", tryPip);
          media.preload = "metadata";
          setTimeout(() => {
            if (media.readyState === 0)
              warnNotReady();
            cleanup();
          }, 1e3);
        } else {
          throw err;
        }
      } else {
        throw err;
      }
    });
  },
  MEDIA_EXIT_PIP_REQUEST: () => {
    if (import_server_safe_globals.document.pictureInPictureElement) {
      import_server_safe_globals.document.exitPictureInPicture();
    }
  },
  MEDIA_ENTER_CAST_REQUEST: (media) => {
    var _a;
    if (!((_a = import_server_safe_globals.globalThis.CastableVideoElement) == null ? void 0 : _a.castEnabled))
      return;
    if (import_server_safe_globals.document[import_fullscreen_api.fullscreenApi.element]) {
      import_server_safe_globals.document[import_fullscreen_api.fullscreenApi.exit]();
    }
    media.requestCast();
  },
  MEDIA_EXIT_CAST_REQUEST: async () => {
    var _a;
    if ((_a = import_server_safe_globals.globalThis.CastableVideoElement) == null ? void 0 : _a.castElement) {
      import_server_safe_globals.globalThis.CastableVideoElement.exitCast();
    }
  },
  MEDIA_SEEK_REQUEST: (media, e) => {
    const time = e.detail;
    if (media.readyState > 0 || media.readyState === void 0) {
      media.currentTime = time;
    }
  },
  MEDIA_PLAYBACK_RATE_REQUEST: (media, e) => {
    media.playbackRate = e.detail;
  },
  MEDIA_PREVIEW_REQUEST: (media, e, controller) => {
    var _a;
    if (!media)
      return;
    const time = e.detail;
    if (time === null) {
      controller.propagateMediaState(
        import_constants.MediaUIAttributes.MEDIA_PREVIEW_TIME,
        void 0
      );
    }
    controller.propagateMediaState(import_constants.MediaUIAttributes.MEDIA_PREVIEW_TIME, time);
    const [track] = (0, import_captions.getTextTracksList)(media, {
      kind: import_constants.TextTrackKinds.METADATA,
      label: "thumbnails"
    });
    if (!(track && track.cues))
      return;
    if (time === null) {
      controller.propagateMediaState(
        import_constants.MediaUIAttributes.MEDIA_PREVIEW_IMAGE,
        void 0
      );
      controller.propagateMediaState(
        import_constants.MediaUIAttributes.MEDIA_PREVIEW_COORDS,
        void 0
      );
      return;
    }
    const cue = Array.prototype.find.call(
      track.cues,
      (c) => c.startTime >= time
    );
    if (!cue)
      return;
    const base = !/'^(?:[a-z]+:)?\/\//i.test(cue.text) ? (_a = media.querySelector('track[label="thumbnails"]')) == null ? void 0 : _a.src : void 0;
    const url = new URL(cue.text, base);
    const previewCoordsStr = new URLSearchParams(url.hash).get("#xywh");
    controller.propagateMediaState(
      import_constants.MediaUIAttributes.MEDIA_PREVIEW_IMAGE,
      url.href
    );
    controller.propagateMediaState(
      import_constants.MediaUIAttributes.MEDIA_PREVIEW_COORDS,
      previewCoordsStr.split(",")
    );
  },
  MEDIA_SHOW_SUBTITLES_REQUEST: (media, e, controller) => {
    const tracks = getSubtitleTracks(controller);
    const { detail: tracksToUpdate = [] } = e;
    (0, import_captions.updateTracksModeTo)(import_constants.TextTrackModes.SHOWING, tracks, tracksToUpdate);
  },
  MEDIA_DISABLE_SUBTITLES_REQUEST: (media, e, controller) => {
    const tracks = getSubtitleTracks(controller);
    const { detail: tracksToUpdate = [] } = e;
    (0, import_captions.updateTracksModeTo)(import_constants.TextTrackModes.DISABLED, tracks, tracksToUpdate);
  },
  MEDIA_AIRPLAY_REQUEST: (media) => {
    if (!media)
      return;
    if (!(media.webkitShowPlaybackTargetPicker && import_server_safe_globals.globalThis.WebKitPlaybackTargetAvailabilityEvent)) {
      console.warn(
        "received a request to select AirPlay but AirPlay is not supported in this environment"
      );
      return;
    }
    media.webkitShowPlaybackTargetPicker();
  },
  MEDIA_SEEK_TO_LIVE_REQUEST: (media) => {
    const seekable = media.seekable;
    if (!seekable) {
      console.warn(
        "MediaController: Media element does not support seeking to live."
      );
      return;
    }
    if (!seekable.length) {
      console.warn("MediaController: Media is unable to seek to live.");
      return;
    }
    media.currentTime = seekable.end(seekable.length - 1);
  }
};
