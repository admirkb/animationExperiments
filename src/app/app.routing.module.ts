import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextAnimationContainerComponent } from './textAnimation/textAnimationContainer.component';

import { QuickMenuComponent } from './quick-menu/quick-menu.component';
import { AnimationBuilderComponent } from './animation-builder/animation-builder.component';

const appRoutes: Routes = [
    {
        path: '',
        component: QuickMenuComponent,
    },
        {
        path: 'an1',
        component: TextAnimationContainerComponent,
    },

        {
        path: 'an2',
        component: AnimationBuilderComponent,
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
export class AppRoutingModule { }
