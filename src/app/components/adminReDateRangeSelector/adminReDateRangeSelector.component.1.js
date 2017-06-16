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
const core_1 = require('@angular/core');
let AdminReDateRangeSelectorComponent = class AdminReDateRangeSelectorComponent {
    constructor() {
        this.dateChangeEventAdminReDateRangeSelector = new core_1.EventEmitter();
        this.plusIndex = 0;
        this.maxPlusIndex = 0;
        this.maxMinusIndex = 0;
    }
    makeUKDate(d) {
        return new Date(d.split('/')[2], d.split('/')[1] - 1, d.split('/')[0]);
    }
    selectItemChanged(e) {
        // Assuming UK format date here!
        this.startDate = this.makeUKDate(e.value.startDate);
        this.endDate = this.makeUKDate(e.value.endDate);
        var b = new Object();
        b['date'] = new Date();
        b['startDate'] = this.startDate;
        b['endDate'] = this.endDate;
        this.dateChangeEventAdminReDateRangeSelector.emit(b);
        // find entry in dates so as to set plusIndex correctly for next key presses.
        this.dateRange.forEach((item, key) => {
            var itemStartDate = this.makeUKDate(item.value.startDate);
            var itemEndDate = this.makeUKDate(item.value.endDate);
            if (this.startDate.toString() == itemStartDate.toString() && this.endDate.toString() == itemEndDate.toString()) {
                this.plusIndex = key;
            }
        });
    }
    ngOnInit() {
        console.info("In ngOnInit");
        this.plusIndex = 0;
        this.selectedDate = this.dateRange[0].value;
        this.maxPlusIndex = this.dateRange.length - 1;
        console.info(this.maxPlusIndex);
        this.dateChangeEventAdminReDateRangeSelector.subscribe((args) => {
            console.log("dateChangeEventAdminReDateRangeSelector in AdminReDateRangeSelector");
            console.dir(args.date);
            console.dir(args.startDate);
            console.dir(args.endDate);
        });
    }
    minus() {
        console.log(this.maxPlusIndex.toString() + this.plusIndex.toString());
        if (this.plusIndex == this.maxPlusIndex) {
            return;
        }
        this.selectedDate = this.dateRange[this.plusIndex + 1].value;
        this.plusIndex++;
    }
    plus() {
        console.log(this.maxPlusIndex.toString() + this.plusIndex.toString());
        if (this.plusIndex == 0) {
            return;
        }
        this.selectedDate = this.dateRange[this.plusIndex - 1].value;
        this.plusIndex--;
    }
};
__decorate([
    core_1.Output(), 
    __metadata('design:type', core_1.EventEmitter)
], AdminReDateRangeSelectorComponent.prototype, "dateChangeEventAdminReDateRangeSelector", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Array)
], AdminReDateRangeSelectorComponent.prototype, "dateRange", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', String)
], AdminReDateRangeSelectorComponent.prototype, "heading", void 0);
AdminReDateRangeSelectorComponent = __decorate([
    core_1.Component({
        selector: 'admir-daterange-selector',
        templateUrl: './app/components/adminReDateRangeSelector/adminReDateRangeSelector.component.html',
    }), 
    __metadata('design:paramtypes', [])
], AdminReDateRangeSelectorComponent);
exports.AdminReDateRangeSelectorComponent = AdminReDateRangeSelectorComponent;
//  this.selectedDate = ({ startDate: '1/1/2013', endDate: '31/12/2013' }); 
//# sourceMappingURL=adminReDateRangeSelector.component.1.js.map