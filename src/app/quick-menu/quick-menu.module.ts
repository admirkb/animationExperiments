import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickMenuComponent } from './quick-menu.component';
import { QuickMenuRoutingModule } from './quick-menu.routing.module';
// import { AnimationBuilderModule } from '../animation-builder/animation-builder.module';


@NgModule({
  imports: [
    QuickMenuRoutingModule,
    // AnimationBuilderModule
  ],
  declarations: [QuickMenuComponent]
})
export class QuickMenuModule { }
