import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminReDateRangeSelectorComponent} from './AdminReDateRangeSelector.component';

import {DropdownModule} from './../dropdown/dropdown';
import {ButtonModule} from './../button/button';
import {FormsModule} from '@angular/forms'

import {DropDownAdminReModule} from './../dropdown/adminrReDropdown';

@NgModule({
    imports: [DropDownAdminReModule,CommonModule, DropdownModule, ButtonModule, FormsModule],
    exports: [AdminReDateRangeSelectorComponent],
    declarations: [AdminReDateRangeSelectorComponent]
})
export class AdminReDateRangeSelectorModule { }