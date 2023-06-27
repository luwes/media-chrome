import { globalThis, document } from "./server-safe-globals.js";
import { delay } from "./utils.js";
import { fullscreenApi } from "./fullscreen-api.js";
let testMediaEl;
const getTestMediaEl = () => {
  var _a, _b;
  if (testMediaEl)
    return testMediaEl;
  testMediaEl = (_b = (_a = document) == null ? void 0 : _a.createElement) == null ? void 0 : _b.call(_a, "video");
  return testMediaEl;
};
const hasVolumeSupportAsync = async (mediaEl = getTestMediaEl()) => {
  if (!mediaEl)
    return false;
  const prevVolume = mediaEl.volume;
  mediaEl.volume = prevVolume / 2 + 0.1;
  await delay(0);
  return mediaEl.volume !== prevVolume;
};
const hasPipSupport = (mediaEl = getTestMediaEl()) => typeof (mediaEl == null ? void 0 : mediaEl.requestPictureInPicture) === "function";
const hasFullscreenSupport = (mediaEl = getTestMediaEl()) => {
  let fullscreenEnabled = document[fullscreenApi.enabled];
  if (!fullscreenEnabled && mediaEl) {
    fullscreenEnabled = "webkitSupportsFullscreen" in mediaEl;
  }
  return fullscreenEnabled;
};
const fullscreenSupported = hasFullscreenSupport();
const pipSupported = hasPipSupport();
const airplaySupported = !!globalThis.WebKitPlaybackTargetAvailabilityEvent;
const castSupported = !!globalThis.chrome;
export {
  airplaySupported,
  castSupported,
  fullscreenSupported,
  getTestMediaEl,
  hasFullscreenSupport,
  hasPipSupport,
  hasVolumeSupportAsync,
  pipSupported
};
