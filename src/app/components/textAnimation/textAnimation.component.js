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
var TextAnimationComponent = (function () {
    function TextAnimationComponent() {
        this.isVisible = true;
        this.objects = [];
        this.startX = 0;
    }
    TextAnimationComponent.prototype.ngOnInit = function () {
    };
    TextAnimationComponent.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            console.log(key);
            if (key == 'zIndexer') {
            }
        }
    };
    TextAnimationComponent.prototype.animationStarted = function () { console.info("animationStarted"); };
    TextAnimationComponent.prototype.animationDone = function () { console.info("animationDone"); };
    return TextAnimationComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], TextAnimationComponent.prototype, "isVisible", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], TextAnimationComponent.prototype, "objects", void 0);
TextAnimationComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'textAnimation',
        animations: [
            core_1.trigger('isVisibleChanged', [
                core_1.state('true', core_1.style({ opacity: 1, transform: 'translateX(00px)' })),
                core_1.state('false', core_1.style({ opacity: 0, transform: 'translateX(100px)' })),
                // state('true', style({ opacity: 1, width: '*', height: '*' })),
                // state('false', style({ opacity: 1, width: '400px', height: '100px' })),
                // state('true', style({ opacity: 1, width: '*', height: '*' })),
                // state('false', style({ opacity: 1, width: '400px', height: '30px' })),
                core_1.transition('1 => 0', core_1.animate('300ms')),
                core_1.transition('0 => 1', core_1.animate('100ms 1000ms ease-out'))
            ]),
            core_1.trigger('isVisibleChanged2', [
                // state('true', style({ opacity: 0, transform: 'translateX(00px)' })),
                // state('false', style({ opacity: 1, transform: 'translateX(100px)' })),
                core_1.transition('1 => 0', core_1.animate(1000, core_1.keyframes([
                    core_1.style({ opacity: 1, transform: 'translateX(0px) translateY(0px)', offset: 0 }),
                    core_1.style({ opacity: 1, transform: 'translateX(100px) translateY(0px)', offset: 0.25 }),
                    core_1.style({ opacity: 1, transform: 'translateX(100px) translateY(100px)', offset: 0.5 }),
                    core_1.style({ opacity: 1, transform: 'translateX(0px) translateY(100px)', offset: 0.75 }),
                    core_1.style({ opacity: 1, transform: 'translateX(0px) translateY(0px)', offset: 1.0 })
                ]))),
                core_1.transition('0 => 1', core_1.animate(1000, core_1.keyframes([
                    core_1.style({ opacity: 1, transform: 'translateX(0px) translateY(0px)', offset: 0 }),
                    core_1.style({ opacity: 1, transform: 'translateX(0px) translateY(100px)', offset: 0.25 }),
                    core_1.style({ opacity: 1, transform: 'translateX(100px) translateY(100px)', offset: 0.5 }),
                    core_1.style({ opacity: 1, transform: 'translateX(100px) translateY(0px)', offset: 0.75 }),
                    core_1.style({ opacity: 1, transform: 'translateX(0px) translateY(0px)', offset: 1.0 })
                ])))
                // transition('0 => 1', animate('100ms 1000ms ease-out'))
            ]),
            core_1.trigger('flyInOut', [
                core_1.state('in', core_1.style({ transform: 'translateX(0)' })),
                core_1.transition('void => *', [
                    core_1.animate(300, core_1.keyframes([
                        core_1.style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                        core_1.style({ opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
                        core_1.style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
                    ]))
                ]),
                core_1.transition('* => void', [
                    core_1.animate(300, core_1.keyframes([
                        core_1.style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                        core_1.style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
                        core_1.style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
                    ]))
                ])
            ]),
            // trigger('zIndexerChanged', [
            //   state('0', style({ opacity: 1, transform: 'scale(0.0)' })),
            //   state('1', style({ opacity: 1, transform: 'scale(1.0)' })),
            //   // state('true', style({ opacity: 1, width: '*', height: '*' })),
            //   // state('false', style({ opacity: 1, width: '400px', height: '100px' })),
            //   // state('true', style({ opacity: 1, width: '*', height: '*' })),
            //   // state('false', style({ opacity: 1, width: '400px', height: '30px' })),
            //   transition('1 => 0', animate('300ms')),
            //   transition('0 => 1', animate('300ms'))
            // ]),
            core_1.trigger('isVisibleChanged_1', [
                core_1.state('true', core_1.style({ opacity: 1, transform: 'scale(1.0)' })),
                core_1.state('false', core_1.style({ opacity: 0, transform: 'scale(1.0)' })),
            ])
        ],
        template: "\n\n<div >\n\n \n \n<div [@isVisibleChanged2]=\"isVisible\"  \n   (@isVisibleChanged2.start)=\"animationStarted($event)\"\n        (@isVisibleChanged2.done)=\"animationDone($event)\"\n[style.height]=\"'100px'\" \n[style.width]=\"'100px'\" \nstyle=\"background:orange;\">\n\n</div>\n     \n\n</div>\n\n\n \n\n  "
    }),
    __metadata("design:paramtypes", [])
], TextAnimationComponent);
exports.TextAnimationComponent = TextAnimationComponent;
// <img src='app/textAnimation/media/Koala.jpg' width="100" height="100" />
//  <img *ngIf="(i  % 2) == 0" style="position:relative" [@isVisibleChanged_0]="isVisible" [src]=o.src width="100" height="100" />
//  <img *ngIf="(i  % 2) == 1" style="position:absolute" [@isVisibleChanged_1]="isVisible" [src]=o.src width="100" height="100" />
// [@isVisibleChanged_0]="isVisible" 
//# sourceMappingURL=textAnimation.component.js.map