import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';

import { QuickMenuService} from './services/quick-menu.service';
import { TextAnimationContainerModule } from './textAnimation/textAnimationContainer.module'

import { QuickMenuModule } from './quick-menu/quick-menu.module';

import { AnimationBuilderModule } from './animation-builder/animation-builder.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    TextAnimationContainerModule,
    BrowserAnimationsModule,
    QuickMenuModule,
    AnimationBuilderModule
  ],
  providers: [QuickMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
