import {
  Component, OnChanges, Input, OnInit, ElementRef,
  trigger, state, animate, transition, style
} from '@angular/core';

@Component({
  selector: 'resizer',
  animations: [
    trigger('isVisibleChanged', [
      // state('true', style({ opacity: 1, transform: 'scale(1.0)' })),
      // state('false', style({ opacity: 0, transform: 'scale(0.0)' })),

      // state('true', style({ opacity: 1, width: '*', height: '*' })),
      // state('false', style({ opacity: 1, width: '400px', height: '100px' })),

      state('true', style({ opacity: 1, width: '*', height: '*' })),
      state('false', style({ opacity: 1, width: '800px', height: '200px' })),

      transition('1 => 0', animate('300ms ease-out')),
      transition('0 => 1', animate('300ms ease-in'))
    ])
  ],
  template: `

<div [@isVisibleChanged]="isVisible"  
[style.height]="_parentClientHeight" 
[style.width]="_parentClientWidth" 
style="background:orange;">
    <ng-content></ng-content>
</div>


  `
})
export class ResizerComponent implements OnInit {
  @Input() isVisible: boolean = true;
  private height: string = "";
  @Input() maxWidth: string = "600px";

  private _element: any;
  private _parentClientHeight: any;
  private _parentClientWidth: any;

  animString: string = '300ms ease-out';

  constructor(elementRef: ElementRef) {



    this._element = elementRef.nativeElement;
    this._parentClientHeight = this._element.parentElement.clientHeight;


  }
  ngOnInit() {

    console.dir(this.height)
    console.dir(this._element)
    this._parentClientHeight = this._element.parentElement.clientHeight;
    this._parentClientWidth = this._element.parentElement.clientWidth;
    console.log(this._parentClientHeight);
    console.log(this._parentClientWidth);





  }
}

    // <div [@isVisibleChanged]="isVisible" >
    //   <ng-content></ng-content>    
    //   <p>Can you see me? I should fade in or out...</p>
    // </div>

        // <button [style.height]="height"  [@isVisibleChanged]="isVisible" >Click Here</button>