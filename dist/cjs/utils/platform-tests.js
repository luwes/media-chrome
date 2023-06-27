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
var platform_tests_exports = {};
__export(platform_tests_exports, {
  airplaySupported: () => airplaySupported,
  castSupported: () => castSupported,
  fullscreenSupported: () => fullscreenSupported,
  getTestMediaEl: () => getTestMediaEl,
  hasFullscreenSupport: () => hasFullscreenSupport,
  hasPipSupport: () => hasPipSupport,
  hasVolumeSupportAsync: () => hasVolumeSupportAsync,
  pipSupported: () => pipSupported
});
module.exports = __toCommonJS(platform_tests_exports);
var import_server_safe_globals = require("./server-safe-globals.js");
var import_utils = require("./utils.js");
var import_fullscreen_api = require("./fullscreen-api.js");
let testMediaEl;
const getTestMediaEl = () => {
  var _a, _b;
  if (testMediaEl)
    return testMediaEl;
  testMediaEl = (_b = (_a = import_server_safe_globals.document) == null ? void 0 : _a.createElement) == null ? void 0 : _b.call(_a, "video");
  return testMediaEl;
};
const hasVolumeSupportAsync = async (mediaEl = getTestMediaEl()) => {
  if (!mediaEl)
    return false;
  const prevVolume = mediaEl.volume;
  mediaEl.volume = prevVolume / 2 + 0.1;
  await (0, import_utils.delay)(0);
  return mediaEl.volume !== prevVolume;
};
const hasPipSupport = (mediaEl = getTestMediaEl()) => typeof (mediaEl == null ? void 0 : mediaEl.requestPictureInPicture) === "function";
const hasFullscreenSupport = (mediaEl = getTestMediaEl()) => {
  let fullscreenEnabled = import_server_safe_globals.document[import_fullscreen_api.fullscreenApi.enabled];
  if (!fullscreenEnabled && mediaEl) {
    fullscreenEnabled = "webkitSupportsFullscreen" in mediaEl;
  }
  return fullscreenEnabled;
};
const fullscreenSupported = hasFullscreenSupport();
const pipSupported = hasPipSupport();
const airplaySupported = !!import_server_safe_globals.globalThis.WebKitPlaybackTargetAvailabilityEvent;
const castSupported = !!import_server_safe_globals.globalThis.chrome;
