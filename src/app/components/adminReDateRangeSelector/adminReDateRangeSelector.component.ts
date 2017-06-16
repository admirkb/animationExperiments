import {NgModule, Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SelectItem} from '../../components/common/api';

@Component({
    // moduleId: module.id,
    selector: 'admir-daterange-selector',
    templateUrl: 'app/components/adminReDateRangeSelector/adminReDateRangeSelector.component.html',
})
export class AdminReDateRangeSelectorComponent implements OnInit {
    @Output() dateChangeEventAdminReDateRangeSelector: EventEmitter<any> = new EventEmitter();
    @Output() componentReady: EventEmitter<any> = new EventEmitter();
    @Input() dateRange: SelectItem[];
    @Input() heading: string;

    private dates: SelectItem[];
    // selectedDate: any;
    plusIndex: number = 0;
    maxPlusIndex: number = 0;
    maxMinusIndex: number = 0;

    private startDate: any; endDate: any;

    private _selectedDate: string = '';
    get selectedDate(): string {
        return this._selectedDate;
    }
    set selectedDate(theDate: string) {
        this._selectedDate = theDate;
    }

    private _firstRange: any;
    get firstRange(): any {
        return this._firstRange;
    }

    set firstRange(theFirstRange: any) {
        this._firstRange = theFirstRange;
    }
    constructor() {


    }


    makeUKDate(d: any) {

        return new Date(d.split('/')[2], d.split('/')[1] - 1, d.split('/')[0]);
    }
    selectItemChanged(e: any) {

        // Assuming UK format date here!

        this.startDate = this.makeUKDate(e.value.startDate);
        this.endDate = this.makeUKDate(e.value.endDate);


        let b = new Object();
        b['date'] = new Date();
        b['startDate'] = this.startDate;
        b['endDate'] = this.endDate;
        this.dateChangeEventAdminReDateRangeSelector.emit(b);

        // find entry in dates so as to set plusIndex correctly for next key presses.
        this.dateRange.forEach((item, key) => {

            let itemStartDate = this.makeUKDate(item.value.startDate);
            let itemEndDate = this.makeUKDate(item.value.endDate);
            if (this.startDate.toString() === itemStartDate.toString() && this.endDate.toString() === itemEndDate.toString()) {
                this.plusIndex = key;
            }

        });

    }

    ngOnInit() {

        console.info('In ngOnInit');
        this.plusIndex = 0;
        this.selectedDate = this.dateRange[0].value;
        this.firstRange = this.dateRange[0].value;
        this.maxPlusIndex = this.dateRange.length - 1;
        console.info(this.maxPlusIndex);

        let b = new Object();
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

    }
    minus() {

        console.log(this.maxPlusIndex.toString() + this.plusIndex.toString());
        if (this.plusIndex === this.maxPlusIndex) { return; }
        this.selectedDate = this.dateRange[this.plusIndex + 1].value;
        this.plusIndex++;

        // Fire selectItemChanged event manually
        let startDate = this.selectedDate['startDate'];
        let endDate = this.selectedDate['endDate'];

        // var e = new Object();
        // e['value'] = new Object();
        // e['value']['startDate'] = startDate;
        // e['value']['endDate'] = endDate;
        let e = { value: { startDate: startDate, endDate: endDate } };
        this.selectItemChanged(e);





    }
    plus() {
        console.log(this.maxPlusIndex.toString() + this.plusIndex.toString());
        if (this.plusIndex === 0) { return; }
        this.selectedDate = this.dateRange[this.plusIndex - 1].value;
        this.plusIndex--;

        // Fire selectItemChanged event manually
        let startDate = this.selectedDate['startDate'];
        let endDate = this.selectedDate['endDate'];

        // var e = new Object();
        // e['value'] = new Object();
        // e['value']['startDate'] = startDate;
        // e['value']['endDate'] = endDate;
        let e = { value: { startDate: startDate, endDate: endDate } };
        this.selectItemChanged(e);
    }
}


