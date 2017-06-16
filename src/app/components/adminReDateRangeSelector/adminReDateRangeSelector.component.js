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
var AdminReDateRangeSelectorComponent = (function () {
    function AdminReDateRangeSelectorComponent() {
        this.dateChangeEventAdminReDateRangeSelector = new core_1.EventEmitter();
        this.componentReady = new core_1.EventEmitter();
        // selectedDate: any;
        this.plusIndex = 0;
        this.maxPlusIndex = 0;
        this.maxMinusIndex = 0;
        this._selectedDate = '';
    }
    Object.defineProperty(AdminReDateRangeSelectorComponent.prototype, "selectedDate", {
        get: function () {
            return this._selectedDate;
        },
        set: function (theDate) {
            this._selectedDate = theDate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdminReDateRangeSelectorComponent.prototype, "firstRange", {
        get: function () {
            return this._firstRange;
        },
        set: function (theFirstRange) {
            this._firstRange = theFirstRange;
        },
        enumerable: true,
        configurable: true
    });
    AdminReDateRangeSelectorComponent.prototype.makeUKDate = function (d) {
        return new Date(d.split('/')[2], d.split('/')[1] - 1, d.split('/')[0]);
    };
    AdminReDateRangeSelectorComponent.prototype.selectItemChanged = function (e) {
        // Assuming UK format date here!
        var _this = this;
        this.startDate = this.makeUKDate(e.value.startDate);
        this.endDate = this.makeUKDate(e.value.endDate);
        var b = new Object();
        b['date'] = new Date();
        b['startDate'] = this.startDate;
        b['endDate'] = this.endDate;
        this.dateChangeEventAdminReDateRangeSelector.emit(b);
        // find entry in dates so as to set plusIndex correctly for next key presses.
        this.dateRange.forEach(function (item, key) {
            var itemStartDate = _this.makeUKDate(item.value.startDate);
            var itemEndDate = _this.makeUKDate(item.value.endDate);
            if (_this.startDate.toString() === itemStartDate.toString() && _this.endDate.toString() === itemEndDate.toString()) {
                _this.plusIndex = key;
            }
        });
    };
    AdminReDateRangeSelectorComponent.prototype.ngOnInit = function () {
        console.info('In ngOnInit');
        this.plusIndex = 0;
        this.selectedDate = this.dateRange[0].value;
        this.firstRange = this.dateRange[0].value;
        this.maxPlusIndex = this.dateRange.length - 1;
        console.info(this.maxPlusIndex);
        var b = new Object();
        b['date'] = new Date();
        b['firstRangeStartDate'] = this.makeUKDate(this.firstRange.startDate);
        b['firstRangeEndDate'] = this.makeUKDate(this.firstRange.endDate);
        this.componentReady.emit(b);
        // this.dateChangeEventAdminReDateRangeSelector.subscribe((args: any) => {
        //     console.log("dateChangeEventAdminReDateRangeSelector in AdminReDateRangeSelector")
        //     console.dir(args.date)
        //     console.dir(args.startDate)
        //     console.dir(args.endDate)
        // });
    };
    AdminReDateRangeSelectorComponent.prototype.minus = function () {
        console.log(this.maxPlusIndex.toString() + this.plusIndex.toString());
        if (this.plusIndex === this.maxPlusIndex) {
            return;
        }
        this.selectedDate = this.dateRange[this.plusIndex + 1].value;
        this.plusIndex++;
        // Fire selectItemChanged event manually
        var startDate = this.selectedDate['startDate'];
        var endDate = this.selectedDate['endDate'];
        // var e = new Object();
        // e['value'] = new Object();
        // e['value']['startDate'] = startDate;
        // e['value']['endDate'] = endDate;
        var e = { value: { startDate: startDate, endDate: endDate } };
        this.selectItemChanged(e);
    };
    AdminReDateRangeSelectorComponent.prototype.plus = function () {
        console.log(this.maxPlusIndex.toString() + this.plusIndex.toString());
        if (this.plusIndex === 0) {
            return;
        }
        this.selectedDate = this.dateRange[this.plusIndex - 1].value;
        this.plusIndex--;
        // Fire selectItemChanged event manually
        var startDate = this.selectedDate['startDate'];
        var endDate = this.selectedDate['endDate'];
        // var e = new Object();
        // e['value'] = new Object();
        // e['value']['startDate'] = startDate;
        // e['value']['endDate'] = endDate;
        var e = { value: { startDate: startDate, endDate: endDate } };
        this.selectItemChanged(e);
    };
    return AdminReDateRangeSelectorComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], AdminReDateRangeSelectorComponent.prototype, "dateChangeEventAdminReDateRangeSelector", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], AdminReDateRangeSelectorComponent.prototype, "componentReady", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], AdminReDateRangeSelectorComponent.prototype, "dateRange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AdminReDateRangeSelectorComponent.prototype, "heading", void 0);
AdminReDateRangeSelectorComponent = __decorate([
    core_1.Component({
        // moduleId: module.id,
        selector: 'admir-daterange-selector',
        templateUrl: 'app/components/adminReDateRangeSelector/adminReDateRangeSelector.component.html',
    }),
    __metadata("design:paramtypes", [])
], AdminReDateRangeSelectorComponent);
exports.AdminReDateRangeSelectorComponent = AdminReDateRangeSelectorComponent;
//# sourceMappingURL=AdminReDateRangeSelector.component.js.map