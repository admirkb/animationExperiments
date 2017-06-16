import { RouterModule }  from '@angular/router';


import {TextAnimationContainerComponent } from './textAnimationContainer.component';

export const routingTextAnimationComponent = RouterModule.forChild([
  { path: 'textAnimation', component: TextAnimationContainerComponent }
]);
