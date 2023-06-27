/** @implements {Pick<DOMTokenList, 'length' | 'value' | 'toString' | 'item' | 'add' | 'remove' | 'contains' | 'toggle' | 'replace'>} */
export class AttributeTokenList implements Pick<DOMTokenList, 'length' | 'value' | 'toString' | 'item' | 'add' | 'remove' | 'contains' | 'toggle' | 'replace'> {
    constructor(el: any, attr: any, { defaultValue }?: {
        defaultValue: any;
    });
    get length(): number;
    set value(arg: string);
    get value(): string;
    toString(): string;
    item(index: any): any;
    values(): IterableIterator<any>;
    forEach(callback: any): void;
    add(...tokens: any[]): void;
    remove(...tokens: any[]): void;
    contains(token: any): boolean;
    toggle(token: any, force: any): boolean;
    replace(oldToken: any, newToken: any): boolean;
    [Symbol.iterator](): IterableIterator<any>;
    #private;
}
