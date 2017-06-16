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
var dropdown_1 = require("./dropdown");
var core_1 = require("@angular/core");
var domhandler_1 = require("../dom/domhandler");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var shared_1 = require("../common/shared");
exports.DROPDOWN_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return DropDownAdminRe; }),
    multi: true
};
var DropDownAdminRe = DropDownAdminRe_1 = (function (_super) {
    __extends(DropDownAdminRe, _super);
    function DropDownAdminRe(el, domHandler, renderer, differs) {
        var _this = _super.call(this, el, domHandler, renderer, differs) || this;
        _this.el = el;
        _this.domHandler = domHandler;
        _this.renderer = renderer;
        console.info("in constructor");
        return _this;
    }
    // this subclassed version of dropdown remove the offsetWidth setting in its base class
    // which was making the dropdown just 30px wide.
    DropDownAdminRe.prototype.updateDimensions = function () {
        console.log("DropDownAdminRe: updateDimensions");
    };
    return DropDownAdminRe;
}(dropdown_1.Dropdown));
DropDownAdminRe = DropDownAdminRe_1 = __decorate([
    core_1.Component({
        selector: 'adminReDropdown',
        template: "\n         <div [ngClass]=\"{'ui-dropdown ui-widget ui-state-default ui-corner-all ui-helper-clearfix':true,\n            'ui-state-hover':hover&&!disabled,'ui-state-focus':focus,'ui-state-disabled':disabled,'ui-dropdown-open':panelVisible}\" \n            (mouseenter)=\"onMouseenter($event)\" (mouseleave)=\"onMouseleave($event)\" (click)=\"onMouseclick($event,in)\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <select [required]=\"required\" tabindex=\"-1\">\n                    <option *ngFor=\"let option of options\" [value]=\"option.value\" [selected]=\"selectedOption == option\">{{option.label}}</option>\n                </select>\n            </div>\n            <div class=\"ui-helper-hidden-accessible\">\n                <input #in type=\"text\" readonly (focus)=\"onFocus($event)\" (blur)=\"onBlur($event)\" (keydown)=\"onKeydown($event)\">\n            </div>\n            <label [ngClass]=\"{'ui-dropdown-label ui-inputtext ui-corner-all':true,'ui-dropdown-label-empty':!label}\" *ngIf=\"!editable\">{{label||'empty'}}</label>\n            <input type=\"text\" class=\"ui-dropdown-label ui-inputtext ui-corner-all\" *ngIf=\"editable\" [value]=\"label\"\n                        (click)=\"onInputClick($event)\" (input)=\"onInputChange($event)\" (focus)=\"hide()\">\n            <div class=\"ui-dropdown-trigger ui-state-default ui-corner-right\" [ngClass]=\"{'ui-state-hover':hover&&!disabled,'ui-state-focus':focus}\">\n                <span class=\"fa fa-fw fa-caret-down ui-c\"></span>\n            </div>\n            <div class=\"ui-dropdown-panel ui-widget-content ui-corner-all ui-helper-hidden ui-shadow\" \n                [style.display]=\"panelVisible ? 'block' : 'none'\">\n                <div *ngIf=\"filter\" class=\"ui-dropdown-filter-container\" (input)=\"onFilter($event)\" (click)=\"$event.stopPropagation()\">\n                    <input type=\"text\" autocomplete=\"off\" class=\"ui-dropdown-filter ui-inputtext ui-widget ui-state-default ui-corner-all\">\n                    <span class=\"fa fa-search\"></span>\n                </div>\n                <div class=\"ui-dropdown-items-wrapper\" [style.max-height]=\"scrollHeight||'auto'\">\n                    <ul class=\"ui-dropdown-items ui-dropdown-list ui-widget-content ui-widget ui-corner-all ui-helper-reset\">\n                        <li #item *ngFor=\"let option of optionsToDisplay;let i=index\" \n                            [ngClass]=\"{'ui-dropdown-item ui-corner-all':true, 'ui-state-hover':hoveredItem == item,'ui-state-highlight':(selectedOption == option)}\"\n                            (click)=\"onItemClick($event, option)\" (mouseenter)=\"hoveredItem=item\" (mouseleave)=\"hoveredItem=null\">\n                            <span *ngIf=\"!itemTemplate\">{{option.label}}</span>\n                            <template [pTemplateWrapper]=\"itemTemplate\" [item]=\"option\" *ngIf=\"itemTemplate\"></template>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    ",
        providers: [domhandler_1.DomHandler, exports.DROPDOWN_VALUE_ACCESSOR, DropDownAdminRe_1]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, domhandler_1.DomHandler, core_1.Renderer, core_1.IterableDiffers])
], DropDownAdminRe);
exports.DropDownAdminRe = DropDownAdminRe;
var DropDownAdminReModule = (function () {
    function DropDownAdminReModule() {
    }
    return DropDownAdminReModule;
}());
DropDownAdminReModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, shared_1.SharedModule],
        exports: [DropDownAdminRe, shared_1.SharedModule],
        declarations: [DropDownAdminRe]
    })
], DropDownAdminReModule);
exports.DropDownAdminReModule = DropDownAdminReModule;
var DropDownAdminRe_1;
//# sourceMappingURL=adminrReDropdown.js.map