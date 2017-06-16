"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// import {NgModule, Directive} from '@angular/core';
var button_1 = require("./button");
var core_1 = require("@angular/core");
var domhandler_1 = require("../dom/domhandler");
var common_1 = require("@angular/common");
var ButtonAdminRe = (function (_super) {
    __extends(ButtonAdminRe, _super);
    function ButtonAdminRe(el, domHandler) {
        var _this = _super.call(this, el, null) || this;
        _this.el = el;
        _this.domHandler = domHandler;
        console.info("in constructor");
        return _this;
    }
    ButtonAdminRe.prototype.onclick = function () {
        alert("Hello I am an AdminRe subclassed button!!");
    };
    return ButtonAdminRe;
}(button_1.Button));
ButtonAdminRe = __decorate([
    core_1.Directive({
        selector: '[adminReButton]',
        host: {
            '[class.ui-state-hover]': 'hover&&!isDisabled()',
            '[class.ui-state-focus]': 'focus',
            '[class.ui-state-active]': 'active',
            '[class.ui-state-disabled]': 'isDisabled()',
            '(click)': 'onclick()'
        },
        providers: [domhandler_1.DomHandler]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, domhandler_1.DomHandler])
], ButtonAdminRe);
exports.ButtonAdminRe = ButtonAdminRe;
var ButtonAdminReModule = (function () {
    function ButtonAdminReModule() {
    }
    return ButtonAdminReModule;
}());
ButtonAdminReModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        exports: [ButtonAdminRe],
        declarations: [ButtonAdminRe]
    })
], ButtonAdminReModule);
exports.ButtonAdminReModule = ButtonAdminReModule;
//# sourceMappingURL=buttonAdminRe.js.map