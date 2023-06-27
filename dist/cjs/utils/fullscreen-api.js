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
var fullscreen_api_exports = {};
__export(fullscreen_api_exports, {
  fullscreenApi: () => fullscreenApi
});
module.exports = __toCommonJS(fullscreen_api_exports);
var import_server_safe_globals = require("./server-safe-globals.js");
const fullscreenApi = {
  enter: "requestFullscreen",
  exit: "exitFullscreen",
  rootEvents: ["fullscreenchange"],
  mediaEvents: [],
  element: "fullscreenElement",
  error: "fullscreenerror",
  enabled: "fullscreenEnabled"
};
if (import_server_safe_globals.document.fullscreenElement === void 0) {
  fullscreenApi.enter = "webkitRequestFullScreen";
  fullscreenApi.exit = import_server_safe_globals.document.webkitExitFullscreen != null ? "webkitExitFullscreen" : "webkitCancelFullScreen";
  fullscreenApi.rootEvents = ["webkitfullscreenchange"];
  fullscreenApi.mediaEvents = ["webkitbeginfullscreen", "webkitendfullscreen"], fullscreenApi.element = "webkitFullscreenElement";
  fullscreenApi.error = "webkitfullscreenerror";
  fullscreenApi.enabled = "webkitFullscreenEnabled";
}
