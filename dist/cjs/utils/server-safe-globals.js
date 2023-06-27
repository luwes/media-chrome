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
var server_safe_globals_exports = {};
__export(server_safe_globals_exports, {
  Document: () => Document,
  GlobalThis: () => GlobalThis,
  document: () => Document,
  globalThis: () => GlobalThis,
  isServer: () => isServer
});
module.exports = __toCommonJS(server_safe_globals_exports);
class EventTarget {
  addEventListener() {
  }
  removeEventListener() {
  }
  dispatchEvent() {
    return true;
  }
}
class ResizeObserver {
  observe() {
  }
}
const documentShim = {
  createElement: function() {
    return new globalThisShim.HTMLElement();
  },
  addEventListener() {
  },
  removeEventListener() {
  }
};
const globalThisShim = {
  ResizeObserver,
  document: documentShim,
  HTMLElement: class HTMLElement extends EventTarget {
  },
  DocumentFragment: class DocumentFragment extends EventTarget {
  },
  customElements: {
    get: function() {
    },
    define: function() {
    },
    whenDefined: function() {
    }
  },
  CustomEvent: function CustomEvent() {
  },
  getComputedStyle: function() {
  },
  requestAnimationFrame: function(_cb) {
    return 1;
  },
  queueMicrotask: function(_cb) {
  }
};
const isServer = typeof window === "undefined" || typeof window.customElements === "undefined";
const isShimmed = Object.keys(globalThisShim).every((key) => key in globalThis);
const GlobalThis = isServer && !isShimmed ? globalThisShim : globalThis;
const Document = isServer && !isShimmed ? documentShim : globalThis.document;
