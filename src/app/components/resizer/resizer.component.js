"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ResizerComponent = (function () {
    function ResizerComponent(elementRef) {
        this.isVisible = true;
        this.height = "";
        this.maxWidth = "600px";
        this.animString = '300ms ease-out';
        this._element = elementRef.nativeElement;
        this._parentClientHeight = this._element.parentElement.clientHeight;
    }
    ResizerComponent.prototype.ngOnInit = function () {
        console.dir(this.height);
        console.dir(this._element);
        this._parentClientHeight = this._element.parentElement.clientHeight;
        this._parentClientWidth = this._element.parentElement.clientWidth;
        console.log(this._parentClientHeight);
        console.log(this._parentClientWidth);
    };
    return ResizerComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ResizerComponent.prototype, "isVisible", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ResizerComponent.prototype, "maxWidth", void 0);
ResizerComponent = __decorate([
    core_1.Component({
        selector: 'resizer',
        animations: [
            core_1.trigger('isVisibleChanged', [
                // state('true', style({ opacity: 1, transform: 'scale(1.0)' })),
                // state('false', style({ opacity: 0, transform: 'scale(0.0)' })),
                // state('true', style({ opacity: 1, width: '*', height: '*' })),
                // state('false', style({ opacity: 1, width: '400px', height: '100px' })),
                core_1.state('true', core_1.style({ opacity: 1, width: '*', height: '*' })),
                core_1.state('false', core_1.style({ opacity: 1, width: '800px', height: '200px' })),
                core_1.transition('1 => 0', core_1.animate('300ms ease-out')),
                core_1.transition('0 => 1', core_1.animate('300ms ease-in'))
            ])
        ],
        template: "\n\n<div [@isVisibleChanged]=\"isVisible\"  \n[style.height]=\"_parentClientHeight\" \n[style.width]=\"_parentClientWidth\" \nstyle=\"background:orange;\">\n    <ng-content></ng-content>\n</div>\n\n\n  "
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], ResizerComponent);
exports.ResizerComponent = ResizerComponent;
// <div [@isVisibleChanged]="isVisible" >
//   <ng-content></ng-content>    
//   <p>Can you see me? I should fade in or out...</p>
// </div>
// <button [style.height]="height"  [@isVisibleChanged]="isVisible" >Click Here</button> 
//# sourceMappingURL=resizer.component.js.map