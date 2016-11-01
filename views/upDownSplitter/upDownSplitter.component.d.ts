import { ElementRef, OnChanges } from '@angular/core';
export declare class UpDownSplitterComponent implements OnChanges {
    private el;
    upHeight: number;
    splitterHeight: number;
    private originalX;
    private originalY;
    private originalupHeight;
    private inDrag;
    constructor(el: ElementRef);
    ngOnChanges(): void;
    clickIt(): void;
    collapseUp(): void;
    collapseDown(): void;
    onDragStart($event: DragEvent): void;
    onDragEnd($event: DragEvent): void;
    onDrag($event: DragEvent): void;
    onDragOver($event: DragEvent): void;
}
