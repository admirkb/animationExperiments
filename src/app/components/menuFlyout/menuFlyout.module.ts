import {NgModule,Component,ElementRef,AfterContentInit,Input,Output,EventEmitter,ContentChild,
trigger,state,transition,style,animate} from '@angular/core';

import { MenuFlyoutComponent }   from '../../../app/components/menuFlyout/menuFlyout.component';


import {AdmirReMenuComponent} from '../../../app/components/menuFlyout/menu/menu.component';
@NgModule({
    exports: [MenuFlyoutComponent],
    declarations: [MenuFlyoutComponent, AdmirReMenuComponent]
})
export class MenuFlyoutModule { }