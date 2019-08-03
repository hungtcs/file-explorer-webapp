
export const ALIGN_TOP = 'top';
export const ALIGN_LEFT = 'left';
export const ALIGN_RIGHT = 'right';
export const ALIGN_BOTTOM = 'bottom';

export type VERTICAL_ALIGN_TYPE = typeof ALIGN_TOP | typeof ALIGN_BOTTOM;
export type HORIZONTAL_ALIGN_TYPE = typeof ALIGN_LEFT | typeof ALIGN_RIGHT;
export type ALIGN_TYPE = VERTICAL_ALIGN_TYPE | HORIZONTAL_ALIGN_TYPE;
