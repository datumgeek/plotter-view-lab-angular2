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
    var UpDownSplitterComponent = (function () {
        function UpDownSplitterComponent(el) {
            this.el = el;
            this.upHeight = 300;
            this.splitterHeight = 20;
            this.originalX = 0;
            this.originalY = 0;
            this.originalupHeight = 300;
            this.inDrag = false;
        }
        UpDownSplitterComponent.prototype.ngOnChanges = function () {
            var newPaneHeight = this.upHeight;
            if (newPaneHeight < 0) {
                newPaneHeight = 0;
            }
            if (newPaneHeight > (this.el.nativeElement).clientHeight - this.splitterHeight) {
                newPaneHeight = (this.el.nativeElement).clientHeight - this.splitterHeight;
            }
            this.upHeight = newPaneHeight;
        };
        UpDownSplitterComponent.prototype.clickIt = function () {
            this.upHeight += 20;
        };
        UpDownSplitterComponent.prototype.collapseUp = function () {
            this.upHeight = 0;
        };
        UpDownSplitterComponent.prototype.collapseDown = function () {
            this.upHeight = (this.el.nativeElement).clientHeight - this.splitterHeight;
        };
        UpDownSplitterComponent.prototype.onDragStart = function ($event) {
            this.originalX = $event.x;
            this.originalY = $event.y;
            this.originalupHeight = this.upHeight;
            this.inDrag = true;
        };
        UpDownSplitterComponent.prototype.onDragEnd = function ($event) {
            this.inDrag = false;
        };
        UpDownSplitterComponent.prototype.onDrag = function ($event) {
            if (this.inDrag) {
                var newPaneHeight = this.originalupHeight + $event.y - this.originalY;
                if (newPaneHeight < 0) {
                    newPaneHeight = 0;
                }
                if (newPaneHeight > (this.el.nativeElement).clientHeight - this.splitterHeight) {
                    newPaneHeight = (this.el.nativeElement).clientHeight - this.splitterHeight;
                }
                this.upHeight = newPaneHeight;
            }
        };
        UpDownSplitterComponent.prototype.onDragOver = function ($event) {
            $event.preventDefault();
        };
        __decorate([
            core_1.Input(), 
            __metadata('design:type', Number)
        ], UpDownSplitterComponent.prototype, "upHeight", void 0);
        __decorate([
            core_1.Input(), 
            __metadata('design:type', Number)
        ], UpDownSplitterComponent.prototype, "splitterHeight", void 0);
        UpDownSplitterComponent = __decorate([
            core_1.Component({
                selector: 'p-up-down-splitter',
                host: {
                    '(dragstart)': 'onDragStart($event)',
                    '(dragend)': 'onDragEnd($event)',
                    '(drag)': 'onDrag($event)'
                },
                template: "\n        <div up [style.height.px]=\"upHeight\" droppable=\"true\" (dragover)=\"onDragOver($event)\">\n            <ng-content select=\"[up-pane]\"></ng-content>\n        </div>\n        <div splitter [style.height.px]=\"splitterHeight\" draggable=\"true\" (dragover)=\"onDragOver($event)\">\n            <i \n                class=\"button-collapse-up fa fa-arrow-circle-up\" \n                (click)=\"collapseUp()\"\n                [style.font-size.px]=\"splitterHeight + 2\" \n                aria-hidden=\"true\">\n            </i>\n            <i \n                class=\"button-collapse-down fa fa-arrow-circle-down\"\n                (click)=\"collapseDown()\"\n                [style.font-size.px]=\"splitterHeight + 2\" \n                aria-hidden=\"true\">\n            </i>\n        </div>\n        <div down (dragover)=\"$event\">\n            <ng-content select=\"[down-pane]\"></ng-content>\n        </div>\n    ",
                styles: ["\n        :host {\n            position: absolute;\n            left: 0;\n            top: 0;\n            right: 0;\n            bottom: 0;\n            margin: 0;\n            padding: 0;\n            display: flex;\n            flex-direction: column;\n            flex 1 0 auto;\n            overflow: hidden;\n        }\n\n        :host [up] {\n            background-color: green;\n            flex: 0 0 auto;\n            height: 270px;\n            overflow: auto;\n        }\n\n        :host [splitter] {\n            position: relative;\n            background-color: silver;\n            flex: 0 0 auto;\n            height: 15px;\n        }\n\n        :host .button-collapse-down {\n            position: absolute;\n            top: 0;\n            right: 0;\n        }\n\n        :host .button-collapse-up {\n            position: absolute;\n            top: 0;\n            left: 0;\n        }\n\n        :host [down] {\n            background-color: blue;\n            flex: 1 1 auto;\n            overflow:auto;\n        }\n\n        :host ng-content {\n            position: absolute;\n            left: 0;\n            top: 0;\n            right: 0;\n            bottom: 0;\n            margin: 0;\n            padding: 0;\n            overflow: scroll;\n        }\n    "]
            }), 
            __metadata('design:paramtypes', [core_1.ElementRef])
        ], UpDownSplitterComponent);
        return UpDownSplitterComponent;
    }());
    exports.UpDownSplitterComponent = UpDownSplitterComponent;
});
//# sourceMappingURL=upDownSplitter.component.js.map