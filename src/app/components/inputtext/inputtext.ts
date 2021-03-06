import {NgModule,Directive,ElementRef,HostListener,Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Directive({
    selector: '[pInputText]',
    host: {
        '[class.ui-inputtext]': 'true',
        '[class.ui-corner-all]': 'true',
        '[class.ui-state-default]': 'true',
        '[class.ui-widget]': 'true',
        '[class.ui-state-hover]': 'hover',
        '[class.ui-state-focus]': 'focus',
        '[class.ui-state-disabled]': 'isDisabled()'
    }
})
export class InputText {

    hover: boolean;
    
    focus: boolean;
    
    constructor(protected el: ElementRef) {}
    
    @HostListener('mouseover', ['$event']) 
    onMouseover(e:any) {
        this.hover = true;
    }
    
    @HostListener('mouseout', ['$event']) 
    onMouseout(e:any) {
        this.hover = false;
    }
    
    @HostListener('focus', ['$event']) 
    onFocus(e:any) {
        this.focus = true;
    }
    
    @HostListener('blur', ['$event']) 
    onBlur(e:any) {
        this.focus = false;
    }
    
    isDisabled() {
        return this.el.nativeElement.disabled;
    }
}

@NgModule({
    imports: [CommonModule],
    exports: [InputText],
    declarations: [InputText]
})
export class InputTextModule { }