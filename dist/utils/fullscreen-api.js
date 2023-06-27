import { document } from "./server-safe-globals.js";
const fullscreenApi = {
  enter: "requestFullscreen",
  exit: "exitFullscreen",
  rootEvents: ["fullscreenchange"],
  mediaEvents: [],
  element: "fullscreenElement",
  error: "fullscreenerror",
  enabled: "fullscreenEnabled"
};
if (document.fullscreenElement === void 0) {
  fullscreenApi.enter = "webkitRequestFullScreen";
  fullscreenApi.exit = document.webkitExitFullscreen != null ? "webkitExitFullscreen" : "webkitCancelFullScreen";
  fullscreenApi.rootEvents = ["webkitfullscreenchange"];
  fullscreenApi.mediaEvents = ["webkitbeginfullscreen", "webkitendfullscreen"], fullscreenApi.element = "webkitFullscreenElement";
  fullscreenApi.error = "webkitfullscreenerror";
  fullscreenApi.enabled = "webkitFullscreenEnabled";
}
export {
  fullscreenApi
};
