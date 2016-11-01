import { ElementRef } from '@angular/core';
export declare class LeftRightSplitterComponent {
    private el;
    leftWidth: number;
    splitterWidth: number;
    private originalX;
    private originalY;
    private originalleftWidth;
    private inDrag;
    constructor(el: ElementRef);
    clickIt(): void;
    collapseLeft(): void;
    collapseRight(): void;
    onDragStart($event: DragEvent): void;
    onDragEnd($event: DragEvent): void;
    onDrag($event: DragEvent): void;
    onDragOver($event: DragEvent): void;
}
