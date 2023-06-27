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
var captions_exports = {};
__export(captions_exports, {
  areSubsOn: () => areSubsOn,
  formatTextTrackObj: () => formatTextTrackObj,
  getTextTracksList: () => getTextTracksList,
  isMatchingPropOf: () => isMatchingPropOf,
  parseTextTrackStr: () => parseTextTrackStr,
  parseTextTracksStr: () => parseTextTracksStr,
  parseTracks: () => parseTracks,
  splitTextTracksStr: () => splitTextTracksStr,
  stringifyTextTrackList: () => stringifyTextTrackList,
  textTrackObjAsPred: () => textTrackObjAsPred,
  toggleSubsCaps: () => toggleSubsCaps,
  updateTracksModeTo: () => updateTracksModeTo
});
module.exports = __toCommonJS(captions_exports);
var import_server_safe_globals = require("./server-safe-globals.js");
var import_constants = require("../constants.js");
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
    import_constants.MediaUIAttributes.MEDIA_SUBTITLES_SHOWING
  );
  return showingSubtitles;
};
const toggleSubsCaps = (el, force) => {
  var _a, _b;
  const subsOn = areSubsOn(el);
  if (subsOn || force === false) {
    const subtitlesShowingStr = el.getAttribute(
      import_constants.MediaUIAttributes.MEDIA_SUBTITLES_SHOWING
    );
    if (subtitlesShowingStr) {
      const evt = new import_server_safe_globals.globalThis.CustomEvent(
        import_constants.MediaUIEvents.MEDIA_DISABLE_SUBTITLES_REQUEST,
        { composed: true, bubbles: true, detail: subtitlesShowingStr }
      );
      el.dispatchEvent(evt);
    }
  } else if (!subsOn || force === true) {
    const [subTrackStr] = (_b = splitTextTracksStr(
      (_a = el.getAttribute(import_constants.MediaUIAttributes.MEDIA_SUBTITLES_LIST)) != null ? _a : ""
    )) != null ? _b : [];
    if (subTrackStr) {
      const evt = new import_server_safe_globals.globalThis.CustomEvent(
        import_constants.MediaUIEvents.MEDIA_SHOW_SUBTITLES_REQUEST,
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
