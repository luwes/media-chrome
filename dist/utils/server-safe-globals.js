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
export {
  Document,
  GlobalThis,
  Document as document,
  GlobalThis as globalThis,
  isServer
};
