/** @type {{ [k: string]: (x?: Partial<{ seekOffset: number; playbackRate: number; }>) => string; }} */
export const nouns: {
    [k: string]: (x?: Partial<{
        seekOffset: number;
        playbackRate: number;
    }>) => string;
};
/** @type {{ [k: string]: (x?: Partial<{ seekOffset: number; playbackRate: number; }>) => string; }} */
export const verbs: {
    [k: string]: (x?: Partial<{
        seekOffset: number;
        playbackRate: number;
    }>) => string;
};
declare const _default: {
    [x: string]: ((x?: Partial<{
        seekOffset: number;
        playbackRate: number;
    }>) => string) | ((x?: Partial<{
        seekOffset: number;
        playbackRate: number;
    }>) => string);
};
export default _default;
