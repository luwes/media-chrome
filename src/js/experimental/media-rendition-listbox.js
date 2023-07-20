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
  #autoOption;
  #renditionList = [];
  #prevState;

  constructor() {
    super();

    this.#selectedIndicator = this.getSlottedIndicator('selected-indicator');

    const autoOption = createOption('Auto', 'auto');
    autoOption.prepend(this.#selectedIndicator.cloneNode(true));
    this.#autoOption = autoOption;
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
    this.addEventListener('change', this.#onChange);

    super.connectedCallback();
  }

  disconnectedCallback() {
    this.removeEventListener('change', this.#onChange);

    super.disconnectedCallback();
  }

  get mediaRenditionList() {
    return this.#renditionList;
  }

  set mediaRenditionList(list) {
    this.removeAttribute(MediaUIAttributes.MEDIA_RENDITION_LIST);

    this.#renditionList = list;
    this.#render();
  }

  get mediaRenditionSelected() {
    return this.mediaRenditionList.find(({ id }) => id == this.value);
  }

  set mediaRenditionSelected(rendition) {
    this.removeAttribute(MediaUIAttributes.MEDIA_RENDITION_SELECTED);

    this.value = rendition?.id;
  }

  #render() {
    if (this.#prevState === JSON.stringify(this.mediaRenditionList)) return;
    this.#prevState = JSON.stringify(this.mediaRenditionList);

    const renditionList = this.mediaRenditionList
      .sort((a, b) => b.height - a.height);

    const container = this.shadowRoot.querySelector('slot');
    container.textContent = '';

    if (!container.contains(this.#autoOption)) {
      container.append(this.#autoOption);
    }

    let isAuto = !this.mediaRenditionSelected;
    if (isAuto) {
      this.#autoOption.setAttribute('aria-selected', 'true');
      this.#autoOption.setAttribute('tabindex', '0');
    } else {
      this.#autoOption.setAttribute('aria-selected', 'false');
      this.#autoOption.setAttribute('tabindex', '-1');
    }

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
