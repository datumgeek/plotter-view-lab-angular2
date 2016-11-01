var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", '@angular/core'], function (require, exports, core_1) {
    "use strict";
    var LeftRightSplitterComponent = (function () {
        function LeftRightSplitterComponent(el) {
            this.el = el;
            this.leftWidth = 300;
            this.splitterWidth = 20;
            this.originalX = 0;
            this.originalY = 0;
            this.originalleftWidth = 300;
            this.inDrag = false;
        }
        LeftRightSplitterComponent.prototype.clickIt = function () {
            this.leftWidth += 20;
        };
        LeftRightSplitterComponent.prototype.collapseLeft = function () {
            this.leftWidth = 0;
        };
        LeftRightSplitterComponent.prototype.collapseRight = function () {
            this.leftWidth = (this.el.nativeElement).clientWidth - this.splitterWidth;
        };
        LeftRightSplitterComponent.prototype.onDragStart = function ($event) {
            this.originalX = $event.x;
            this.originalY = $event.y;
            this.originalleftWidth = this.leftWidth;
            this.inDrag = true;
        };
        LeftRightSplitterComponent.prototype.onDragEnd = function ($event) {
            this.inDrag = false;
        };
        LeftRightSplitterComponent.prototype.onDrag = function ($event) {
            if (this.inDrag) {
                var newPaneWidth = this.originalleftWidth + $event.x - this.originalX;
                if (newPaneWidth < 0) {
                    newPaneWidth = 0;
                }
                if (newPaneWidth > (this.el.nativeElement).clientWidth - this.splitterWidth) {
                    newPaneWidth = (this.el.nativeElement).clientWidth - this.splitterWidth;
                }
                this.leftWidth = newPaneWidth > 0 ? newPaneWidth : 0;
            }
        };
        LeftRightSplitterComponent.prototype.onDragOver = function ($event) {
            $event.preventDefault();
        };
        LeftRightSplitterComponent = __decorate([
            core_1.Component({
                selector: 'p-left-right-splitter',
                host: {
                    '(dragstart)': 'onDragStart($event)',
                    '(dragend)': 'onDragEnd($event)',
                    '(drag)': 'onDrag($event)'
                },
                template: "\n        <div left [style.width.px]=\"leftWidth\" droppable=\"true\" (dragover)=\"onDragOver($event)\">\n            <ng-content select=\"[left-pane]\"></ng-content>\n        </div>\n        <div splitter [style.width.px]=\"splitterWidth\" draggable=\"true\" (dragover)=\"onDragOver($event)\">\n            <i \n                class=\"button-collapse-left fa fa-arrow-circle-left\" \n                (click)=\"collapseLeft()\"\n                [style.font-size.px]=\"splitterWidth + 2\" \n                aria-hidden=\"true\">\n            </i>\n            <i \n                class=\"button-collapse-right fa fa-arrow-circle-right\"\n                (click)=\"collapseRight()\"\n                [style.font-size.px]=\"splitterWidth + 2\" \n                aria-hidden=\"true\">\n            </i>\n        </div>\n        <div right (dragover)=\"$event\">\n            <ng-content select=\"[right-pane]\"></ng-content>\n        </div>\n    ",
                styles: ["\n        :host {\n            position: absolute;\n            left: 0;\n            top: 0;\n            right: 0;\n            bottom: 0;\n            margin: 0;\n            padding: 0;\n            display: flex;\n            flex-direction: row;\n            flex 1 0 auto;\n            overflow: hidden;\n        }\n\n        :host [left] {\n            position: relative;\n            background-color: green;\n            flex: 0 0 auto;\n            width: 270px;\n            overflow: auto;\n        }\n\n        :host [splitter] {\n            position: relative;\n            background-color: silver;\n            flex: 0 0 auto;\n            width: 15px;\n        }\n\n        :host .button-collapse-right {\n            position: absolute;\n            bottom: 0;\n            left: 0;\n        }\n\n        :host .button-collapse-left {\n            position: absolute;\n            top: 0;\n            left: 0;\n        }\n\n        :host [right] {\n            position: relative;\n            background-color: blue;\n            flex: 1 1 auto;\n            overflow:auto;\n        }\n\n        :host ng-content {\n            position: absolute;\n            left: 0;\n            top: 0;\n            right: 0;\n            bottom: 0;\n            margin: 0;\n            padding: 0;\n            overflow: scroll;\n        }\n    "]
            }), 
            __metadata('design:paramtypes', [core_1.ElementRef])
        ], LeftRightSplitterComponent);
        return LeftRightSplitterComponent;
    }());
    exports.LeftRightSplitterComponent = LeftRightSplitterComponent;
});
//# sourceMappingURL=leftRightSplitter.component.js.map