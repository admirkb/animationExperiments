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
var common_1 = require("@angular/common");
var shared_1 = require("../common/shared");
var domhandler_1 = require("../dom/domhandler");
var forms_1 = require("@angular/forms");
exports.DROPDOWN_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return Dropdown; }),
    multi: true
};
var Dropdown = (function () {
    function Dropdown(el, domHandler, renderer, differs) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
        this.onChange = new core_1.EventEmitter();
        this.scrollHeight = '200px';
        this.autoWidth = true;
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
        this.panelVisible = false;
        this.differ = differs.find([]).create(null);
    }
    Dropdown.prototype.ngOnInit = function () {
        var _this = this;
        this.optionsToDisplay = this.options;
        this.documentClickListener = this.renderer.listenGlobal('body', 'click', function () {
            if (!_this.selfClick && !_this.itemClick) {
                _this.panelVisible = false;
            }
            _this.selfClick = false;
            _this.itemClick = false;
        });
    };
    Dropdown.prototype.ngDoCheck = function () {
        var changes = this.differ.diff(this.options);
        if (changes && this.initialized) {
            this.optionsToDisplay = this.options;
            this.updateSelectedOption(this.value);
            this.optionsChanged = true;
        }
    };
    Dropdown.prototype.ngAfterViewInit = function () {
        this.container = this.el.nativeElement.children[0];
        this.panel = this.domHandler.findSingle(this.el.nativeElement, 'div.ui-dropdown-panel');
        this.itemsWrapper = this.domHandler.findSingle(this.el.nativeElement, 'div.ui-dropdown-items-wrapper');
        this.updateDimensions();
        this.initialized = true;
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.container);
            else
                this.appendTo.appendChild(this.container);
        }
    };
    Object.defineProperty(Dropdown.prototype, "label", {
        get: function () {
            return this.selectedOption ? this.selectedOption.label : null;
        },
        enumerable: true,
        configurable: true
    });
    Dropdown.prototype.onItemClick = function (event, option) {
        this.itemClick = true;
        this.selectItem(event, option);
        this.hide();
    };
    Dropdown.prototype.selectItem = function (event, option) {
        this.selectedOption = option;
        this.value = option.value;
        this.onModelChange(this.value);
        this.onChange.emit({
            originalEvent: event,
            value: this.value
        });
    };
    Dropdown.prototype.ngAfterViewChecked = function () {
        if (this.optionsChanged) {
            this.domHandler.relativePosition(this.panel, this.container);
            this.optionsChanged = false;
        }
        if (this.selectedOptionUpdated && this.itemsWrapper) {
            var selectedItem = this.domHandler.findSingle(this.panel, 'li.ui-state-highlight');
            if (selectedItem) {
                this.domHandler.scrollInView(this.itemsWrapper, this.domHandler.findSingle(this.panel, 'li.ui-state-highlight'));
            }
            this.selectedOptionUpdated = false;
        }
    };
    Dropdown.prototype.writeValue = function (value) {
        this.value = value;
        this.updateSelectedOption(value);
    };
    Dropdown.prototype.updateSelectedOption = function (val) {
        this.selectedOption = this.findOption(val, this.optionsToDisplay);
        if (!this.selectedOption && this.optionsToDisplay && this.optionsToDisplay.length && !this.editable) {
            this.selectedOption = this.optionsToDisplay[0];
        }
        this.selectedOptionUpdated = true;
    };
    Dropdown.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    Dropdown.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    Dropdown.prototype.setDisabledState = function (val) {
        this.disabled = val;
    };
    Dropdown.prototype.updateDimensions = function () {
        console.log("DropDown: updateDimensions");
        // if(this.autoWidth) {
        //     let select = this.domHandler.findSingle(this.el.nativeElement, 'select');
        //     if(!this.style||(!this.style['width']&&!this.style['min-width'])) {
        //         this.el.nativeElement.children[0].style.width = select.offsetWidth + 30 + 'px';
        //     }
        // }
    };
    Dropdown.prototype.onMouseenter = function (event) {
        this.hover = true;
    };
    Dropdown.prototype.onMouseleave = function (event) {
        this.hover = false;
    };
    Dropdown.prototype.onMouseclick = function (event, input) {
        if (this.disabled) {
            return;
        }
        this.selfClick = true;
        if (!this.itemClick) {
            input.focus();
            if (this.panelVisible)
                this.hide();
            else {
                this.show(this.panel, this.container);
            }
        }
    };
    Dropdown.prototype.onInputClick = function (event) {
        this.itemClick = true;
    };
    Dropdown.prototype.onInputChange = function (event) {
        this.value = event.target.value;
        this.updateSelectedOption(this.value);
        this.onModelChange(this.value);
        this.onChange.emit({
            originalEvent: event,
            value: this.value
        });
    };
    Dropdown.prototype.show = function (panel, container) {
        if (this.options && this.options.length) {
            this.panelVisible = true;
            panel.style.zIndex = ++domhandler_1.DomHandler.zindex;
            this.domHandler.relativePosition(panel, container);
            this.domHandler.fadeIn(panel, 250);
        }
    };
    Dropdown.prototype.hide = function () {
        this.panelVisible = false;
    };
    Dropdown.prototype.onFocus = function (event) {
        this.focus = true;
    };
    Dropdown.prototype.onBlur = function (event) {
        this.focus = false;
        this.onModelTouched();
    };
    Dropdown.prototype.onKeydown = function (event) {
        var selectedItemIndex = this.findOptionIndex(this.selectedOption.value, this.optionsToDisplay);
        switch (event.which) {
            //down
            case 40:
                if (!this.panelVisible && event.altKey) {
                    this.show(this.panel, this.container);
                }
                else {
                    if (selectedItemIndex != -1) {
                        var nextItemIndex = selectedItemIndex + 1;
                        if (nextItemIndex != (this.optionsToDisplay.length)) {
                            this.selectedOption = this.optionsToDisplay[nextItemIndex];
                            this.selectedOptionUpdated = true;
                            this.selectItem(event, this.selectedOption);
                        }
                    }
                    else {
                        this.selectedOption = this.optionsToDisplay[0];
                    }
                }
                event.preventDefault();
                break;
            //up
            case 38:
                if (selectedItemIndex > 0) {
                    var prevItemIndex = selectedItemIndex - 1;
                    this.selectedOption = this.optionsToDisplay[prevItemIndex];
                    this.selectedOptionUpdated = true;
                    this.selectItem(event, this.selectedOption);
                }
                event.preventDefault();
                break;
            //enter
            case 13:
                this.hide();
                event.preventDefault();
                break;
            //escape and tab
            case 27:
            case 9:
                this.panelVisible = false;
                break;
        }
    };
    Dropdown.prototype.findListItem = function (element) {
        if (element.nodeName == 'LI') {
            return element;
        }
        else {
            var parent_1 = element.parentElement;
            while (parent_1.nodeName != 'LI') {
                parent_1 = parent_1.parentElement;
            }
            return parent_1;
        }
    };
    Dropdown.prototype.findOptionIndex = function (val, opts) {
        var index = -1;
        if (opts) {
            for (var i = 0; i < opts.length; i++) {
                if ((val == null && opts[i].value == null) || this.domHandler.equals(val, opts[i].value)) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    };
    Dropdown.prototype.findOption = function (val, opts) {
        var index = this.findOptionIndex(val, opts);
        return (index != -1) ? opts[index] : null;
    };
    Dropdown.prototype.onFilter = function (event) {
        if (this.options && this.options.length) {
            var val = event.target.value.toLowerCase();
            this.optionsToDisplay = [];
            for (var i = 0; i < this.options.length; i++) {
                var option = this.options[i];
                if (option.label.toLowerCase().startsWith(val)) {
                    this.optionsToDisplay.push(option);
                }
            }
            this.optionsChanged = true;
        }
    };
    Dropdown.prototype.applyFocus = function () {
        if (this.editable)
            this.domHandler.findSingle(this.el.nativeElement, '.ui-dropdown-label.ui-inputtext').focus();
        else
            this.domHandler.findSingle(this.el.nativeElement, 'input[readonly]').focus();
    };
    Dropdown.prototype.ngOnDestroy = function () {
        this.documentClickListener();
        this.initialized = false;
        if (this.appendTo) {
            this.el.nativeElement.appendChild(this.container);
        }
    };
    return Dropdown;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], Dropdown.prototype, "options", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], Dropdown.prototype, "onChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Dropdown.prototype, "scrollHeight", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], Dropdown.prototype, "filter", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Dropdown.prototype, "style", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Dropdown.prototype, "styleClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], Dropdown.prototype, "disabled", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], Dropdown.prototype, "autoWidth", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], Dropdown.prototype, "required", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], Dropdown.prototype, "editable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Dropdown.prototype, "appendTo", void 0);
__decorate([
    core_1.ContentChild(core_1.TemplateRef),
    __metadata("design:type", core_1.TemplateRef)
], Dropdown.prototype, "itemTemplate", void 0);
Dropdown = __decorate([
    core_1.Component({
        selector: 'p-dropdown',
        template: "\n         <div [ngClass]=\"{'ui-dropdown ui-widget ui-state-default ui-corner-all ui-helper-clearfix':true,\n            'ui-state-hover':hover&&!disabled,'ui-state-focus':focus,'ui-state-disabled':disabled,'ui-dropdown-open':panelVisible}\" \n            (mouseenter)=\"onMouseenter($event)\" (mouseleave)=\"onMouseleave($event)\" (click)=\"onMouseclick($event,in)\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <select [required]=\"required\" tabindex=\"-1\">\n                    <option *ngFor=\"let option of options\" [value]=\"option.value\" [selected]=\"selectedOption == option\">{{option.label}}</option>\n                </select>\n            </div>\n            <div class=\"ui-helper-hidden-accessible\">\n                <input #in type=\"text\" readonly (focus)=\"onFocus($event)\" (blur)=\"onBlur($event)\" (keydown)=\"onKeydown($event)\">\n            </div>\n            <label [ngClass]=\"{'ui-dropdown-label ui-inputtext ui-corner-all':true,'ui-dropdown-label-empty':!label}\" *ngIf=\"!editable\">{{label||'empty'}}</label>\n            <input type=\"text\" class=\"ui-dropdown-label ui-inputtext ui-corner-all\" *ngIf=\"editable\" [value]=\"label\"\n                        (click)=\"onInputClick($event)\" (input)=\"onInputChange($event)\" (focus)=\"hide()\">\n            <div class=\"ui-dropdown-trigger ui-state-default ui-corner-right\" [ngClass]=\"{'ui-state-hover':hover&&!disabled,'ui-state-focus':focus}\">\n                <span class=\"fa fa-fw fa-caret-down ui-c\"></span>\n            </div>\n            <div class=\"ui-dropdown-panel ui-widget-content ui-corner-all ui-helper-hidden ui-shadow\" \n                [style.display]=\"panelVisible ? 'block' : 'none'\">\n                <div *ngIf=\"filter\" class=\"ui-dropdown-filter-container\" (input)=\"onFilter($event)\" (click)=\"$event.stopPropagation()\">\n                    <input type=\"text\" autocomplete=\"off\" class=\"ui-dropdown-filter ui-inputtext ui-widget ui-state-default ui-corner-all\">\n                    <span class=\"fa fa-search\"></span>\n                </div>\n                <div class=\"ui-dropdown-items-wrapper\" [style.max-height]=\"scrollHeight||'auto'\">\n                    <ul class=\"ui-dropdown-items ui-dropdown-list ui-widget-content ui-widget ui-corner-all ui-helper-reset\">\n                        <li #item *ngFor=\"let option of optionsToDisplay;let i=index\" \n                            [ngClass]=\"{'ui-dropdown-item ui-corner-all':true, 'ui-state-hover':hoveredItem == item,'ui-state-highlight':(selectedOption == option)}\"\n                            (click)=\"onItemClick($event, option)\" (mouseenter)=\"hoveredItem=item\" (mouseleave)=\"hoveredItem=null\">\n                            <span *ngIf=\"!itemTemplate\">{{option.label}}</span>\n                            <template [pTemplateWrapper]=\"itemTemplate\" [item]=\"option\" *ngIf=\"itemTemplate\"></template>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    ",
        providers: [domhandler_1.DomHandler, exports.DROPDOWN_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, domhandler_1.DomHandler, core_1.Renderer, core_1.IterableDiffers])
], Dropdown);
exports.Dropdown = Dropdown;
var DropdownModule = (function () {
    function DropdownModule() {
    }
    return DropdownModule;
}());
DropdownModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, shared_1.SharedModule],
        exports: [Dropdown, shared_1.SharedModule],
        declarations: [Dropdown]
    })
], DropdownModule);
exports.DropdownModule = DropdownModule;
//# sourceMappingURL=dropdown.js.map