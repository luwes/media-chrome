export function tokenizeExpression(expr: any): ({
    token: any;
    type: any;
    matches?: undefined;
} | {
    token: any;
    type: string;
    matches: any;
})[];
export function evaluateExpression(expr: any, state?: {}): any;
export function getParamValue(raw: any, state: any): any;
export namespace processor {
    function processCallback(instance: any, parts: any, state: any): void;
    function processCallback(instance: any, parts: any, state: any): void;
}
