export function splitTextTracksStr(textTracksStr?: string): Array<string>;
export function parseTextTrackStr(textTrackStr?: string): any;
export function parseTextTracksStr(textTracksStr?: string, textTrackLikeObj?: any): Array<any>;
export function parseTracks(trackOrTracks: Array<string | any> | string | any): Array<any>;
export function formatTextTrackObj({ kind, label, language }?: {
    kind: string;
    label?: string;
    language?: string;
}): string;
export function stringifyTextTrackList(textTracks?: Array<TextTrack | object> | TextTrackList): any;
export function isMatchingPropOf(key: string | number, value: any): Function;
export function textTrackObjAsPred(filterObj: object): Function;
export function updateTracksModeTo(mode: string, tracks?: TextTrackList | Array<TextTrack | any>, tracksToUpdate?: Array<string | any> | string | any): void;
export function getTextTracksList(media: HTMLMediaElement, filterPredOrObj?: Function | any): Array<TextTrack>;
export function areSubsOn(el: HTMLElement): boolean;
export function toggleSubsCaps(el: HTMLElement, force?: boolean): void;
