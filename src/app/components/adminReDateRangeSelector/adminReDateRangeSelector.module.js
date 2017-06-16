"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var AdminReDateRangeSelector_component_1 = require("./AdminReDateRangeSelector.component");
var dropdown_1 = require("./../dropdown/dropdown");
var button_1 = require("./../button/button");
var forms_1 = require("@angular/forms");
var adminrReDropdown_1 = require("./../dropdown/adminrReDropdown");
var AdminReDateRangeSelectorModule = (function () {
    function AdminReDateRangeSelectorModule() {
    }
    return AdminReDateRangeSelectorModule;
}());
AdminReDateRangeSelectorModule = __decorate([
    core_1.NgModule({
        imports: [adminrReDropdown_1.DropDownAdminReModule, common_1.CommonModule, dropdown_1.DropdownModule, button_1.ButtonModule, forms_1.FormsModule],
        exports: [AdminReDateRangeSelector_component_1.AdminReDateRangeSelectorComponent],
        declarations: [AdminReDateRangeSelector_component_1.AdminReDateRangeSelectorComponent]
    })
], AdminReDateRangeSelectorModule);
exports.AdminReDateRangeSelectorModule = AdminReDateRangeSelectorModule;
//# sourceMappingURL=AdminReDateRangeSelector.module.js.map