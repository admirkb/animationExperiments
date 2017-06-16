import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TextAnimationContainerComponent } from './textAnimationContainer.component';
import { TextAnimationComponent } from '../components/textAnimation/textAnimation.component';

import { routingTextAnimationComponent }            from './textAnimation.routing';

@NgModule({
  imports: [BrowserModule, routingTextAnimationComponent],
  declarations: [TextAnimationContainerComponent,TextAnimationComponent],

})
export class TextAnimationContainerModule {
  
}

