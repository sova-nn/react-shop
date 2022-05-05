import React from "react";

export type LayoutItem = {
    w: number,
    h: number,
    x: number,
    y: number,
    i: string,
    minW?: number,
    minH?: number,
    maxW?: number,
    maxH?: number,
    moved?: boolean,
    static?: boolean,
    isDraggable?: boolean,
    isResizable?: boolean,
    resizeHandles?: Array<"s" | "w" | "e" | "n" | "sw" | "nw" | "se" | "ne">,
    isBounded?: boolean
};
export type Layout = ReadonlyArray<LayoutItem>;

export type CompactType = ('vertical' | 'horizontal' | null | undefined);