import { globalThis } from "./server-safe-globals.js";
import { MediaUIEvents, MediaUIAttributes } from "../constants.js";
const splitTextTracksStr = (textTracksStr = "") => textTracksStr.split(/\s+/);
const parseTextTrackStr = (textTrackStr = "") => {
  let [kind, language, encodedLabel] = textTrackStr.split(":");
  const label = encodedLabel ? decodeURIComponent(encodedLabel) : void 0;
  kind = kind === "cc" ? "captions" : "subtitles";
  return {
    kind,
    language,
    label
  };
};
const parseTextTracksStr = (textTracksStr = "", textTrackLikeObj = {}) => {
  return splitTextTracksStr(textTracksStr).map((textTrackStr) => {
    const textTrackObj = parseTextTrackStr(textTrackStr);
    return {
      ...textTrackLikeObj,
      ...textTrackObj
    };
  });
};
const parseTracks = (trackOrTracks) => {
  if (Array.isArray(trackOrTracks)) {
    return trackOrTracks.map((trackObjOrStr) => {
      if (typeof trackObjOrStr === "string") {
        return parseTextTrackStr(trackObjOrStr);
      }
      return trackObjOrStr;
    });
  }
  if (typeof trackOrTracks === "string") {
    return parseTextTracksStr(trackOrTracks);
  }
  return [trackOrTracks];
};
const formatTextTrackObj = ({ kind, label, language } = { kind: "subtitles" }) => {
  if (!label)
    return language;
  return `${kind === "captions" ? "cc" : "sb"}:${language}:${encodeURIComponent(label)}`;
};
const stringifyTextTrackList = (textTracks = []) => {
  return Array.prototype.map.call(textTracks, formatTextTrackObj).join(" ");
};
const isMatchingPropOf = (key, value) => (obj) => obj[key] === value;
const textTrackObjAsPred = (filterObj) => {
  const preds = Object.entries(filterObj).map(([key, value]) => {
    return isMatchingPropOf(key, value);
  });
  return (textTrack) => preds.every((pred) => pred(textTrack));
};
const updateTracksModeTo = (mode, tracks = [], tracksToUpdate = []) => {
  const preds = parseTracks(tracksToUpdate).map(textTrackObjAsPred);
  const isTrackToUpdate = (textTrack) => {
    return preds.some((pred) => pred(textTrack));
  };
  Array.from(tracks).filter(isTrackToUpdate).forEach((textTrack) => {
    textTrack.mode = mode;
  });
};
const getTextTracksList = (media, filterPredOrObj = () => true) => {
  if (!(media == null ? void 0 : media.textTracks))
    return [];
  const filterPred = typeof filterPredOrObj === "function" ? filterPredOrObj : textTrackObjAsPred(filterPredOrObj);
  return Array.from(media.textTracks).filter(filterPred);
};
const areSubsOn = (el) => {
  const showingSubtitles = !!el.getAttribute(
    MediaUIAttributes.MEDIA_SUBTITLES_SHOWING
  );
  return showingSubtitles;
};
const toggleSubsCaps = (el, force) => {
  var _a, _b;
  const subsOn = areSubsOn(el);
  if (subsOn || force === false) {
    const subtitlesShowingStr = el.getAttribute(
      MediaUIAttributes.MEDIA_SUBTITLES_SHOWING
    );
    if (subtitlesShowingStr) {
      const evt = new globalThis.CustomEvent(
        MediaUIEvents.MEDIA_DISABLE_SUBTITLES_REQUEST,
        { composed: true, bubbles: true, detail: subtitlesShowingStr }
      );
      el.dispatchEvent(evt);
    }
  } else if (!subsOn || force === true) {
    const [subTrackStr] = (_b = splitTextTracksStr(
      (_a = el.getAttribute(MediaUIAttributes.MEDIA_SUBTITLES_LIST)) != null ? _a : ""
    )) != null ? _b : [];
    if (subTrackStr) {
      const evt = new globalThis.CustomEvent(
        MediaUIEvents.MEDIA_SHOW_SUBTITLES_REQUEST,
        { composed: true, bubbles: true, detail: subTrackStr }
      );
      el.dispatchEvent(evt);
    }
  } else {
    console.error(
      "Attempting to enable captions or subtitles but none are available! Please verify your media content if this is unexpected."
    );
  }
};
export {
  areSubsOn,
  formatTextTrackObj,
  getTextTracksList,
  isMatchingPropOf,
  parseTextTrackStr,
  parseTextTracksStr,
  parseTracks,
  splitTextTracksStr,
  stringifyTextTrackList,
  textTrackObjAsPred,
  toggleSubsCaps,
  updateTracksModeTo
};
