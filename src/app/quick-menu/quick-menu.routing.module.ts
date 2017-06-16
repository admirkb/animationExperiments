import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { QuickMenuComponent } from './quick-menu.component';

const appRoutes: Routes = [
    {
        path: '',
        component: QuickMenuComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
        )
    ],
    exports: [
        RouterModule
    ],
    providers: [
        // CanDeactivateGuard,
        // PreloadSelectedModules
    ]
})
export class QuickMenuRoutingModule { }
