const MediaUIEvents = {
  MEDIA_PLAY_REQUEST: "mediaplayrequest",
  MEDIA_PAUSE_REQUEST: "mediapauserequest",
  MEDIA_MUTE_REQUEST: "mediamuterequest",
  MEDIA_UNMUTE_REQUEST: "mediaunmuterequest",
  MEDIA_VOLUME_REQUEST: "mediavolumerequest",
  MEDIA_SEEK_REQUEST: "mediaseekrequest",
  MEDIA_AIRPLAY_REQUEST: "mediaairplayrequest",
  MEDIA_ENTER_FULLSCREEN_REQUEST: "mediaenterfullscreenrequest",
  MEDIA_EXIT_FULLSCREEN_REQUEST: "mediaexitfullscreenrequest",
  MEDIA_PREVIEW_REQUEST: "mediapreviewrequest",
  MEDIA_ENTER_PIP_REQUEST: "mediaenterpiprequest",
  MEDIA_EXIT_PIP_REQUEST: "mediaexitpiprequest",
  MEDIA_ENTER_CAST_REQUEST: "mediaentercastrequest",
  MEDIA_EXIT_CAST_REQUEST: "mediaexitcastrequest",
  MEDIA_SHOW_TEXT_TRACKS_REQUEST: "mediashowtexttracksrequest",
  MEDIA_HIDE_TEXT_TRACKS_REQUEST: "mediahidetexttracksrequest",
  MEDIA_SHOW_SUBTITLES_REQUEST: "mediashowsubtitlesrequest",
  MEDIA_DISABLE_SUBTITLES_REQUEST: "mediadisablesubtitlesrequest",
  MEDIA_PLAYBACK_RATE_REQUEST: "mediaplaybackraterequest",
  MEDIA_SEEK_TO_LIVE_REQUEST: "mediaseektoliverequest",
  REGISTER_MEDIA_STATE_RECEIVER: "registermediastatereceiver",
  UNREGISTER_MEDIA_STATE_RECEIVER: "unregistermediastatereceiver"
};
const MediaStateReceiverAttributes = {
  MEDIA_CHROME_ATTRIBUTES: "mediachromeattributes",
  MEDIA_CONTROLLER: "mediacontroller"
};
const MediaUIProps = {
  MEDIA_AIRPLAY_UNAVAILABLE: "mediaAirplayUnavailable",
  MEDIA_FULLSCREEN_UNAVAILABLE: "mediaFullscreenUnavailable",
  MEDIA_PIP_UNAVAILABLE: "mediaPipUnavailable",
  MEDIA_CAST_UNAVAILABLE: "mediaCastUnavailable",
  MEDIA_PAUSED: "mediaPaused",
  MEDIA_HAS_PLAYED: "mediaHasPlayed",
  MEDIA_ENDED: "mediaEnded",
  MEDIA_MUTED: "mediaMuted",
  MEDIA_VOLUME_LEVEL: "mediaVolumeLevel",
  MEDIA_VOLUME: "mediaVolume",
  MEDIA_VOLUME_UNAVAILABLE: "mediaVolumeUnavailable",
  MEDIA_IS_PIP: "mediaIsPip",
  MEDIA_IS_CASTING: "mediaIsCasting",
  MEDIA_SUBTITLES_LIST: "mediaSubtitlesList",
  MEDIA_SUBTITLES_SHOWING: "mediaSubtitlesShowing",
  MEDIA_IS_FULLSCREEN: "mediaIsFullscreen",
  MEDIA_PLAYBACK_RATE: "mediaPlaybackRate",
  MEDIA_CURRENT_TIME: "mediaCurrentTime",
  MEDIA_DURATION: "mediaDuration",
  MEDIA_SEEKABLE: "mediaSeekable",
  MEDIA_PREVIEW_TIME: "mediaPreviewTime",
  MEDIA_PREVIEW_IMAGE: "mediaPreviewImage",
  MEDIA_PREVIEW_COORDS: "mediaPreviewCoords",
  MEDIA_LOADING: "mediaLoading",
  MEDIA_BUFFERED: "mediaBuffered",
  MEDIA_STREAM_TYPE: "mediaStreamType",
  MEDIA_TARGET_LIVE_WINDOW: "mediaTargetLiveWindow",
  MEDIA_TIME_IS_LIVE: "mediaTimeIsLive"
};
const MediaUIPropsEntries = Object.entries(MediaUIProps);
const MediaUIAttributes = MediaUIPropsEntries.reduce((dictObj, [key, propName]) => {
  dictObj[key] = `${propName.toLowerCase()}`;
  return dictObj;
}, {});
const MediaStateChangeEvents = MediaUIPropsEntries.reduce(
  (dictObj, [key, propName]) => {
    dictObj[key] = `${propName.toLowerCase()}`;
    return dictObj;
  },
  {
    USER_INACTIVE: "userinactivechange",
    BREAKPOINTS_CHANGE: "breakpointchange"
  }
);
const StateChangeEventToAttributeMap = Object.entries(
  MediaStateChangeEvents
).reduce(
  (mapObj, [key, eventType]) => {
    const attrName = MediaUIAttributes[key];
    if (attrName) {
      mapObj[eventType] = attrName;
    }
    return mapObj;
  },
  { userinactivechange: "userinactive" }
);
const AttributeToStateChangeEventMap = Object.entries(
  MediaUIAttributes
).reduce(
  (mapObj, [key, attrName]) => {
    const evtType = MediaStateChangeEvents[key];
    if (evtType) {
      mapObj[attrName] = evtType;
    }
    return mapObj;
  },
  { userinactive: "userinactivechange" }
);
const TextTrackKinds = {
  SUBTITLES: "subtitles",
  CAPTIONS: "captions",
  DESCRIPTIONS: "descriptions",
  CHAPTERS: "chapters",
  METADATA: "metadata"
};
const TextTrackModes = {
  DISABLED: "disabled",
  HIDDEN: "hidden",
  SHOWING: "showing"
};
const ReadyStates = {
  HAVE_NOTHING: 0,
  HAVE_METADATA: 1,
  HAVE_CURRENT_DATA: 2,
  HAVE_FUTURE_DATA: 3,
  HAVE_ENOUGH_DATA: 4
};
const PointerTypes = {
  MOUSE: "mouse",
  PEN: "pen",
  TOUCH: "touch"
};
const AvailabilityStates = {
  UNAVAILABLE: "unavailable",
  UNSUPPORTED: "unsupported"
};
const StreamTypes = {
  LIVE: "live",
  ON_DEMAND: "on-demand",
  UNKNOWN: "unknown"
};
export {
  AttributeToStateChangeEventMap,
  AvailabilityStates,
  MediaStateChangeEvents,
  MediaStateReceiverAttributes,
  MediaUIAttributes,
  MediaUIEvents,
  MediaUIProps,
  PointerTypes,
  ReadyStates,
  StateChangeEventToAttributeMap,
  StreamTypes,
  TextTrackKinds,
  TextTrackModes
};
