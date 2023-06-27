import { globalThis, document } from "./utils/server-safe-globals.js";
import { fullscreenApi } from "./utils/fullscreen-api.js";
import { containsComposedNode } from "./utils/element-utils.js";
import {
  hasVolumeSupportAsync,
  fullscreenSupported,
  pipSupported,
  airplaySupported,
  castSupported
} from "./utils/platform-tests.js";
import {
  MediaUIAttributes,
  TextTrackKinds,
  TextTrackModes,
  AvailabilityStates,
  StreamTypes
} from "./constants.js";
import {
  getTextTracksList,
  updateTracksModeTo,
  toggleSubsCaps
} from "./utils/captions.js";
let volumeSupported;
const volumeSupportPromise = hasVolumeSupportAsync().then((supported) => {
  volumeSupported = supported;
  return volumeSupported;
});
const StreamTypeValues = Object.values(StreamTypes);
const getSubtitleTracks = (controller) => {
  return getTextTracksList(controller.media, (textTrack) => {
    return [TextTrackKinds.SUBTITLES, TextTrackKinds.CAPTIONS].includes(textTrack.kind);
  }).sort((a, b) => a.kind >= b.kind ? 1 : -1);
};
const getShowingSubtitleTracks = (controller) => {
  return getTextTracksList(controller.media, (textTrack) => {
    return textTrack.mode === TextTrackModes.SHOWING && [TextTrackKinds.SUBTITLES, TextTrackKinds.CAPTIONS].includes(textTrack.kind);
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
        if (streamType === StreamTypes.UNKNOWN) {
          const defaultType = controller.getAttribute("defaultstreamtype");
          if ([StreamTypes.LIVE, StreamTypes.ON_DEMAND].includes(defaultType)) {
            return defaultType;
          }
          return void 0;
        }
        return streamType;
      }
      const duration = media.duration;
      if (duration === Infinity) {
        return StreamTypes.LIVE;
      } else if (Number.isFinite(duration)) {
        return StreamTypes.ON_DEMAND;
      } else {
        const defaultType = controller.getAttribute("defaultstreamtype");
        if ([StreamTypes.LIVE, StreamTypes.ON_DEMAND].includes(defaultType)) {
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
      if ((targetLiveWindow == null || Number.isNaN(targetLiveWindow)) && streamType === StreamTypes.LIVE) {
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
      if (media && document[fullscreenApi.element] === void 0 && "webkitDisplayingFullscreen" in media) {
        return media.webkitDisplayingFullscreen && media.webkitPresentationMode === "fullscreen";
      }
      let fullscreenEl;
      if (event) {
        const isSomeElementFullscreen = document[fullscreenApi.element];
        fullscreenEl = isSomeElementFullscreen ? event.target : null;
      } else {
        fullscreenEl = (_a = controller.getRootNode().fullscreenElement) != null ? _a : document[fullscreenApi.element];
      }
      return containsComposedNode(controller.fullscreenElement, fullscreenEl);
    },
    rootEvents: fullscreenApi.rootEvents,
    mediaEvents: fullscreenApi.mediaEvents
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
        const pipElement = (_a = controller.getRootNode().pictureInPictureElement) != null ? _a : document.pictureInPictureElement;
        return containsComposedNode(media, pipElement);
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
      const castElement = (_a = globalThis.CastableVideoElement) == null ? void 0 : _a.castElement;
      let castState = containsComposedNode(media, castElement);
      if ((e == null ? void 0 : e.type) === "castchange" && (e == null ? void 0 : e.detail) === "CONNECTING") {
        castState = "connecting";
      }
      return castState;
    },
    mediaEvents: ["entercast", "leavecast", "castchange"]
  },
  MEDIA_AIRPLAY_UNAVAILABLE: {
    get: function(controller, e) {
      if (!airplaySupported)
        return AvailabilityStates.UNSUPPORTED;
      if (!e)
        return void 0;
      if (e.availability === "available") {
        return void 0;
      } else if (e.availability === "not-available") {
        return AvailabilityStates.UNAVAILABLE;
      }
    },
    mediaEvents: ["webkitplaybacktargetavailabilitychanged"]
  },
  MEDIA_CAST_UNAVAILABLE: {
    get: function() {
      var _a;
      const castState = (_a = globalThis.CastableVideoElement) == null ? void 0 : _a.castState;
      if (!castSupported || !castState) {
        return AvailabilityStates.UNSUPPORTED;
      }
      if (castState.includes("CONNECT")) {
        return void 0;
      } else {
        return AvailabilityStates.UNAVAILABLE;
      }
    },
    mediaEvents: ["castchange"]
  },
  MEDIA_FULLSCREEN_UNAVAILABLE: {
    get: function() {
      return fullscreenSupported ? void 0 : AvailabilityStates.UNAVAILABLE;
    }
  },
  MEDIA_PIP_UNAVAILABLE: {
    get: function() {
      return pipSupported ? void 0 : AvailabilityStates.UNSUPPORTED;
    }
  },
  MEDIA_VOLUME_UNAVAILABLE: {
    get: function(controller) {
      if (volumeSupported !== void 0 && !volumeSupported) {
        return AvailabilityStates.UNSUPPORTED;
      }
      const { media } = controller;
      if (media && typeof media.volume == "undefined") {
        return AvailabilityStates.UNAVAILABLE;
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
      if (controller.hasAttribute("defaultsubtitles") && !controller.hasAttribute(MediaUIAttributes.MEDIA_HAS_PLAYED) && !controller.hasAttribute(MediaUIAttributes.MEDIA_SUBTITLES_SHOWING)) {
        toggleSubsCaps(controller, true);
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
    if (streamType == StreamTypes.LIVE && autoSeekToLive) {
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
        globalThis.localStorage.setItem(
          "media-chrome-pref-volume",
          volume.toString()
        );
      } catch (err) {
      }
    }
  },
  MEDIA_ENTER_FULLSCREEN_REQUEST: (media, e, controller) => {
    if (!fullscreenSupported) {
      console.warn(
        "Fullscreen support is unavailable; not entering fullscreen"
      );
      return;
    }
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture();
    }
    if (controller[fullscreenApi.enter]) {
      controller.fullscreenElement[fullscreenApi.enter]();
    } else if (media.webkitEnterFullscreen) {
      media.webkitEnterFullscreen();
    } else if (media.requestFullscreen) {
      media.requestFullscreen();
    } else {
      console.warn("MediaChrome: Fullscreen not supported");
    }
  },
  MEDIA_EXIT_FULLSCREEN_REQUEST: () => {
    document[fullscreenApi.exit]();
  },
  MEDIA_ENTER_PIP_REQUEST: (media) => {
    if (!document.pictureInPictureEnabled) {
      console.warn("MediaChrome: Picture-in-picture is not enabled");
      return;
    }
    if (!media.requestPictureInPicture) {
      console.warn(
        "MediaChrome: The current media does not support picture-in-picture"
      );
      return;
    }
    if (document[fullscreenApi.element]) {
      document[fullscreenApi.exit]();
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
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture();
    }
  },
  MEDIA_ENTER_CAST_REQUEST: (media) => {
    var _a;
    if (!((_a = globalThis.CastableVideoElement) == null ? void 0 : _a.castEnabled))
      return;
    if (document[fullscreenApi.element]) {
      document[fullscreenApi.exit]();
    }
    media.requestCast();
  },
  MEDIA_EXIT_CAST_REQUEST: async () => {
    var _a;
    if ((_a = globalThis.CastableVideoElement) == null ? void 0 : _a.castElement) {
      globalThis.CastableVideoElement.exitCast();
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
        MediaUIAttributes.MEDIA_PREVIEW_TIME,
        void 0
      );
    }
    controller.propagateMediaState(MediaUIAttributes.MEDIA_PREVIEW_TIME, time);
    const [track] = getTextTracksList(media, {
      kind: TextTrackKinds.METADATA,
      label: "thumbnails"
    });
    if (!(track && track.cues))
      return;
    if (time === null) {
      controller.propagateMediaState(
        MediaUIAttributes.MEDIA_PREVIEW_IMAGE,
        void 0
      );
      controller.propagateMediaState(
        MediaUIAttributes.MEDIA_PREVIEW_COORDS,
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
      MediaUIAttributes.MEDIA_PREVIEW_IMAGE,
      url.href
    );
    controller.propagateMediaState(
      MediaUIAttributes.MEDIA_PREVIEW_COORDS,
      previewCoordsStr.split(",")
    );
  },
  MEDIA_SHOW_SUBTITLES_REQUEST: (media, e, controller) => {
    const tracks = getSubtitleTracks(controller);
    const { detail: tracksToUpdate = [] } = e;
    updateTracksModeTo(TextTrackModes.SHOWING, tracks, tracksToUpdate);
  },
  MEDIA_DISABLE_SUBTITLES_REQUEST: (media, e, controller) => {
    const tracks = getSubtitleTracks(controller);
    const { detail: tracksToUpdate = [] } = e;
    updateTracksModeTo(TextTrackModes.DISABLED, tracks, tracksToUpdate);
  },
  MEDIA_AIRPLAY_REQUEST: (media) => {
    if (!media)
      return;
    if (!(media.webkitShowPlaybackTargetPicker && globalThis.WebKitPlaybackTargetAvailabilityEvent)) {
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
export {
  MediaUIRequestHandlers,
  MediaUIStates,
  volumeSupportPromise
};
