import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './textAnimationContainer.component.html',

})
export class TextAnimationContainerComponent {
  isVisible: boolean = true;
  animation: number = 0;



  clicked() {

    console.log("this.isVisible: " + this.isVisible)
  }
}
