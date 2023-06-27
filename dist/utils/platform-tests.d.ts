export function getTestMediaEl(): any;
export function hasVolumeSupportAsync(mediaEl?: HTMLMediaElement): Promise<boolean>;
export function hasPipSupport(mediaEl?: HTMLVideoElement): boolean;
export function hasFullscreenSupport(mediaEl?: HTMLVideoElement): boolean;
export const fullscreenSupported: boolean;
export const pipSupported: boolean;
export const airplaySupported: boolean;
export const castSupported: boolean;
