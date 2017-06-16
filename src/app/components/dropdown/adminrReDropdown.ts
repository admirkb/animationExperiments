
import {Dropdown } from "./dropdown"
import {NgModule, Component, ElementRef, OnInit, AfterViewInit, AfterViewChecked, DoCheck, OnDestroy, Input, Output, Renderer, EventEmitter, ContentChild, TemplateRef, IterableDiffers, forwardRef} from '@angular/core';
import {DomHandler} from '../dom/domhandler';
import {CommonModule} from '@angular/common';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';


import {SelectItem} from '../common/api';
import {SharedModule} from '../common/shared';


export const DROPDOWN_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DropDownAdminRe),
    multi: true
};
@Component({
    selector: 'adminReDropdown',
    template: `
         <div [ngClass]="{'ui-dropdown ui-widget ui-state-default ui-corner-all ui-helper-clearfix':true,
            'ui-state-hover':hover&&!disabled,'ui-state-focus':focus,'ui-state-disabled':disabled,'ui-dropdown-open':panelVisible}" 
            (mouseenter)="onMouseenter($event)" (mouseleave)="onMouseleave($event)" (click)="onMouseclick($event,in)" [ngStyle]="style" [class]="styleClass">
            <div class="ui-helper-hidden-accessible">
                <select [required]="required" tabindex="-1">
                    <option *ngFor="let option of options" [value]="option.value" [selected]="selectedOption == option">{{option.label}}</option>
                </select>
            </div>
            <div class="ui-helper-hidden-accessible">
                <input #in type="text" readonly (focus)="onFocus($event)" (blur)="onBlur($event)" (keydown)="onKeydown($event)">
            </div>
            <label [ngClass]="{'ui-dropdown-label ui-inputtext ui-corner-all':true,'ui-dropdown-label-empty':!label}" *ngIf="!editable">{{label||'empty'}}</label>
            <input type="text" class="ui-dropdown-label ui-inputtext ui-corner-all" *ngIf="editable" [value]="label"
                        (click)="onInputClick($event)" (input)="onInputChange($event)" (focus)="hide()">
            <div class="ui-dropdown-trigger ui-state-default ui-corner-right" [ngClass]="{'ui-state-hover':hover&&!disabled,'ui-state-focus':focus}">
                <span class="fa fa-fw fa-caret-down ui-c"></span>
            </div>
            <div class="ui-dropdown-panel ui-widget-content ui-corner-all ui-helper-hidden ui-shadow" 
                [style.display]="panelVisible ? 'block' : 'none'">
                <div *ngIf="filter" class="ui-dropdown-filter-container" (input)="onFilter($event)" (click)="$event.stopPropagation()">
                    <input type="text" autocomplete="off" class="ui-dropdown-filter ui-inputtext ui-widget ui-state-default ui-corner-all">
                    <span class="fa fa-search"></span>
                </div>
                <div class="ui-dropdown-items-wrapper" [style.max-height]="scrollHeight||'auto'">
                    <ul class="ui-dropdown-items ui-dropdown-list ui-widget-content ui-widget ui-corner-all ui-helper-reset">
                        <li #item *ngFor="let option of optionsToDisplay;let i=index" 
                            [ngClass]="{'ui-dropdown-item ui-corner-all':true, 'ui-state-hover':hoveredItem == item,'ui-state-highlight':(selectedOption == option)}"
                            (click)="onItemClick($event, option)" (mouseenter)="hoveredItem=item" (mouseleave)="hoveredItem=null">
                            <span *ngIf="!itemTemplate">{{option.label}}</span>
                            <template [pTemplateWrapper]="itemTemplate" [item]="option" *ngIf="itemTemplate"></template>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `,
    providers: [DomHandler, DROPDOWN_VALUE_ACCESSOR, DropDownAdminRe]
})
export class DropDownAdminRe extends Dropdown {

    constructor(protected el: ElementRef, protected domHandler: DomHandler, protected renderer: Renderer, differs: IterableDiffers) {
        super(el, domHandler, renderer, differs);
        console.info("in constructor")

    }

// this subclassed version of dropdown remove the offsetWidth setting in its base class
// which was making the dropdown just 30px wide.
    updateDimensions() {
        console.log("DropDownAdminRe: updateDimensions")
    }
}

@NgModule({
    imports: [CommonModule, SharedModule],
    exports: [DropDownAdminRe, SharedModule],
    declarations: [DropDownAdminRe]
})
export class DropDownAdminReModule {


}