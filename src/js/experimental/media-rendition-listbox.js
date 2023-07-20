import { MediaChromeListbox, createOption } from './media-chrome-listbox.js';
import './media-chrome-option.js';
import { globalThis } from '../utils/server-safe-globals.js';
import { parseRenditionList } from '../utils/utils.js';
import { MediaUIAttributes, MediaUIEvents } from '../constants.js';

/**
 * @attr {string} mediarenditionselected - (read-only) Set to the enabled rendition.
 * @attr {string} mediarenditionlist - (read-only) Set to the rendition list.
 *
 * @cssproperty --media-rendition-listbox-white-space - `white-space` of playback rate list item.
 */
class MediaRenditionListbox extends MediaChromeListbox {
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_RENDITION_LIST,
      MediaUIAttributes.MEDIA_RENDITION_SELECTED,
    ];
  }

  /** @type {Element} */
  #selectedIndicator;
  #renditionList = [];
  #prevState;

  constructor() {
    super();

    this.#selectedIndicator = this.getSlottedIndicator('selected-indicator');
  }

  attributeChangedCallback(attrName, oldValue, newValue) {

    if (attrName === MediaUIAttributes.MEDIA_RENDITION_SELECTED && oldValue !== newValue) {
      this.value = parseRenditionList(newValue)[0];

    } else if (attrName === MediaUIAttributes.MEDIA_RENDITION_LIST && oldValue !== newValue) {

      this.#renditionList = parseRenditionList(newValue);
      this.#render();
    }

    super.attributeChangedCallback(attrName, oldValue, newValue);
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('change', this.#onChange);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('change', this.#onChange);
  }

  get mediaRenditionList() {
    return this.#renditionList;
  }

  set mediaRenditionList(list) {
    this.#renditionList = list;
    this.#render();
  }

  get mediaRenditionSelected() {
    return this.mediaRenditionList.find(({ id }) => id == this.value);
  }

  set mediaRenditionSelected(rendition) {
    this.value = rendition?.id;
  }

  #render() {
    if (this.#prevState === JSON.stringify(this.mediaRenditionList)) return;
    this.#prevState = JSON.stringify(this.mediaRenditionList);

    const renditionList = this.mediaRenditionList
      .sort((a, b) => b.height - a.height);

    const container = this.shadowRoot.querySelector('slot');
    container.textContent = '';

    let isAuto = !this.mediaRenditionSelected;

    const option = createOption('Auto', 'auto', isAuto);
    option.prepend(this.#selectedIndicator.cloneNode(true));
    container.append(option);

    for (const rendition of renditionList) {

      /** @type {HTMLOptionElement} */
      const option = createOption(
        `${Math.min(rendition.width, rendition.height)}p`,
        `${rendition.id}`,
        rendition.enabled && !isAuto
      );
      option.prepend(this.#selectedIndicator.cloneNode(true));
      container.append(option);
    }
  }

  #onChange() {
    const selectedOption = this.selectedOptions[0]?.value;

    if (selectedOption == null) return;

    const event = new globalThis.CustomEvent(
      MediaUIEvents.MEDIA_RENDITION_REQUEST,
      {
        composed: true,
        bubbles: true,
        detail: selectedOption,
      }
    );
    this.dispatchEvent(event);
  }
}

if (!globalThis.customElements.get('media-rendition-listbox')) {
  globalThis.customElements.define('media-rendition-listbox', MediaRenditionListbox);
}

export default MediaRenditionListbox;
