export namespace Attributes {
    const PLACEHOLDER_SRC: string;
    const SRC: string;
}
export default MediaPosterImage;
declare const MediaPosterImage_base: any;
/**
 * @attr {string} placeholdersrc - Placeholder image source URL, often a blurhash data URL.
 * @attr {string} src - Poster image source URL.
 *
 * @cssproperty --media-poster-image-display - `display` property of poster image.
 * @cssproperty --media-poster-image-background-position - `background-position` of poster image.
 * @cssproperty --media-poster-image-background-size - `background-size` of poster image.
 * @cssproperty --media-object-fit - `object-fit` of poster image.
 * @cssproperty --media-object-position - `object-position` of poster image.
 */
declare class MediaPosterImage extends MediaPosterImage_base {
    [x: string]: any;
    static get observedAttributes(): string[];
    image: any;
    attributeChangedCallback(attrName: any, _oldValue: any, newValue: any): void;
    set placeholderSrc(arg: string);
    /**
     * @type {string | undefined}
     */
    get placeholderSrc(): string;
    set src(arg: string);
    /**
     * @type {string | undefined}
     */
    get src(): string;
}
