import { MediaStateReceiverAttributes } from './constants.js';
import { getOrInsertCSSRule } from './utils/element-utils.js';
import { window, document } from './utils/server-safe-globals.js';
// Todo: Use data locals: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString

const template = document.createElement('template');

template.innerHTML = /*html*/`
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
      padding: var(--media-control-padding, 10px);
      display: inline-flex;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
      box-sizing: border-box;
      text-align: center;
      pointer-events: auto;
    }

    ${/*
      Only show outline when keyboard focusing.
      https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo
    */''}
    :host(:focus-visible) {
      box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
      outline: 0;
    }

    ${/*
     * hide default focus ring, particularly when using mouse
     */''}
    :host(:where(:focus)) {
      box-shadow: none;
      outline: 0;
    }
  </style>
  <slot></slot>
`;

/**
 * @preserve
 *
 * @cssproperty --media-text-display-display
 * @cssproperty --media-control-display
 *
 * @cssproperty --media-font
 * @cssproperty --media-font-weight
 * @cssproperty --media-font-family
 * @cssproperty --media-font-size
 * @cssproperty --media-text-content-height
 *
 * @cssproperty --media-text-color
 * @cssproperty --media-icon-color
 * @cssproperty --media-control-background
 * @cssproperty --media-control-hover-background
 * @cssproperty --media-primary-color
 * @cssproperty --media-secondary-color
 *
 * @cssproperty --media-control-height
 * @cssproperty --media-control-padding
 */
class MediaTextDisplay extends window.HTMLElement {
  #mediaController;

  static get observedAttributes() {
    return [MediaStateReceiverAttributes.MEDIA_CONTROLLER];
  }

  constructor() {
    super();

    if (!this.shadowRoot) {
      // Set up the Shadow DOM if not using Declarative Shadow DOM.
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    const { style } = getOrInsertCSSRule(this.shadowRoot, ':host');
    style.setProperty('display', `var(--media-control-display, var(--${this.localName}-display, inline-flex))`);
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === MediaStateReceiverAttributes.MEDIA_CONTROLLER) {
      if (oldValue) {
        this.#mediaController?.unassociateElement?.(this);
        this.#mediaController = null;
      }
      if (newValue) {
        // @ts-ignore
        this.#mediaController = this.getRootNode()?.getElementById(newValue);
        this.#mediaController?.associateElement?.(this);
      }
    }
  }

  connectedCallback() {
    const mediaControllerId = this.getAttribute(
      MediaStateReceiverAttributes.MEDIA_CONTROLLER
    );
    if (mediaControllerId) {
      // @ts-ignore
      this.#mediaController = this.getRootNode()?.getElementById(mediaControllerId);
      this.#mediaController?.associateElement?.(this);
    }
  }

  disconnectedCallback() {
    // Use cached mediaController, getRootNode() doesn't work if disconnected.
    this.#mediaController?.unassociateElement?.(this);
    this.#mediaController = null;
  }
}

if (!window.customElements.get('media-text-display')) {
  window.customElements.define('media-text-display', MediaTextDisplay);
}

export default MediaTextDisplay;
