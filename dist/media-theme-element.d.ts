export * from "./utils/template-parts.js";
/**
 * @extends {HTMLElement}
 *
 * @attr {string} template - The element `id` of the template to render.
 */
export class MediaThemeElement extends HTMLElement {
    static template: any;
    static observedAttributes: string[];
    static processor: {
        processCallback(instance: any, parts: any, state: any): void;
    };
    renderRoot: ShadowRoot;
    renderer: any;
    get mediaController(): Element;
    set template(arg: any);
    get template(): any;
    get props(): {};
    attributeChangedCallback(attrName: any, oldValue: any, newValue: any): void;
    connectedCallback(): void;
    createRenderer(): void;
    render(): void;
    #private;
}
