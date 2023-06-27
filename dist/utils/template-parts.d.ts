export namespace defaultProcessor {
    function processCallback(instance: TemplateInstance, parts: [string, Part][], state: Record<string, any>): void;
    function processCallback(instance: TemplateInstance, parts: [string, Part][], state: Record<string, any>): void;
}
/**
 * @extends {DocumentFragment}
 */
export class TemplateInstance extends DocumentFragment {
    constructor(template: HTMLTemplateElement, state: Record<string, any>, processor?: {
        processCallback(instance: TemplateInstance, parts: [string, Part][], state: Record<string, any>): void;
    });
    update(state: Record<string, any>): void;
    #private;
}
export function parse(element: any, parts?: [string, Part][]): [string, Part][];
export function tokenize(text: string): [number, string][];
export class Part {
    set value(arg: string);
    get value(): string;
    toString(): string;
}
export class AttrPartList {
    get length(): number;
    item(index: number): string | AttrPart;
    append(...items: Array<AttrPart | string>): void;
    toString(): string;
    [Symbol.iterator](): IterableIterator<string | AttrPart>;
    #private;
}
export class AttrPart extends Part {
    constructor(element: Element, attributeName: string, namespaceURI: string);
    get attributeName(): string;
    get attributeNamespace(): string;
    get element(): Element;
    set booleanValue(arg: boolean);
    /** @type boolean */
    get booleanValue(): boolean;
    #private;
}
export class ChildNodePart extends Part {
    constructor(parentNode: Element, nodes: ChildNode[]);
    get replacementNodes(): ChildNode[];
    get parentNode(): Element;
    get nextSibling(): ChildNode;
    get previousSibling(): ChildNode;
    replace(...nodes: any[]): void;
    #private;
}
export class InnerTemplatePart extends ChildNodePart {
    constructor(parentNode: Element, template: HTMLTemplateElement);
    directive: string;
    expression: string;
    template: HTMLTemplateElement;
}
