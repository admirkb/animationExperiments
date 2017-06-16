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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var alpha_module_1 = require("./alpha/alpha.module");
var beta_module_1 = require("./beta/beta.module");
var menu_module_1 = require("./menu/menu.module");
var containerResizeToChild_module_1 = require("./containerResizeToChild/containerResizeToChild.module");
var app_routing_1 = require('./app.routing');
var menuFlyout_component_1 = require("./components/menuFlyout/menuFlyout.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, alpha_module_1.AlphaModule, beta_module_1.BetaModule, app_routing_1.routing, containerResizeToChild_module_1.ContainerResizeToChildModule, menu_module_1.MenuModule],
            declarations: [app_component_1.AppComponent, menuFlyout_component_1.MenuFlyoutComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map