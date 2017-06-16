// import {NgModule, Directive} from '@angular/core';
import {Button } from "./button"


import {NgModule, Directive, ElementRef, AfterViewInit, OnDestroy, HostBinding, HostListener, Input} from '@angular/core';
import {DomHandler} from '../dom/domhandler';
import {CommonModule} from '@angular/common';


@Directive({
    selector: '[adminReButton]',
    host: {
        '[class.ui-state-hover]': 'hover&&!isDisabled()',
        '[class.ui-state-focus]': 'focus',
        '[class.ui-state-active]': 'active',
        '[class.ui-state-disabled]': 'isDisabled()',
        '(click)': 'onclick()'
    },
    providers: [DomHandler]
})
export class ButtonAdminRe extends Button {

    constructor(protected el: ElementRef, protected domHandler: DomHandler) {
        super(el, null);
        console.info("in constructor")
    }
    onclick() {

        alert("Hello I am an AdminRe subclassed button!!");
    }
}

@NgModule({
    imports: [CommonModule],
    exports: [ButtonAdminRe],
    declarations: [ButtonAdminRe]
})
export class ButtonAdminReModule {


}