import {
  Component, SimpleChange, OnInit, OnChanges, Input, keyframes,
  trigger, state, animate, transition, style
} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'textAnimation',
  animations: [
    trigger('isVisibleChanged', [
      state('true', style({ opacity: 1, transform: 'translateX(00px)' })),
      state('false', style({ opacity: 0, transform: 'translateX(100px)' })),

      // state('true', style({ opacity: 1, width: '*', height: '*' })),
      // state('false', style({ opacity: 1, width: '400px', height: '100px' })),

      // state('true', style({ opacity: 1, width: '*', height: '*' })),
      // state('false', style({ opacity: 1, width: '400px', height: '30px' })),

      transition('1 => 0', animate('300ms')),
      transition('0 => 1', animate('100ms 1000ms ease-out'))
    ]),

    trigger('isVisibleChanged2', [
      // state('true', style({ opacity: 0, transform: 'translateX(00px)' })),
      // state('false', style({ opacity: 1, transform: 'translateX(100px)' })),

      transition('1 => 0',
        animate(1000, keyframes([
          style({ opacity: 1, transform: 'translateX(0px) translateY(0px)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(100px) translateY(0px)', offset: 0.25 }),
          style({ opacity: 1, transform: 'translateX(100px) translateY(100px)', offset: 0.5 }),
          style({ opacity: 1, transform: 'translateX(0px) translateY(100px)', offset: 0.75 }),
          style({ opacity: 1, transform: 'translateX(0px) translateY(0px)', offset: 1.0 })
        ]))
      ),
      transition('0 => 1',
        animate(1000, keyframes([
          style({ opacity: 1, transform: 'translateX(0px) translateY(0px)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(0px) translateY(100px)', offset: 0.25 }),
          style({ opacity: 1, transform: 'translateX(100px) translateY(100px)', offset: 0.5 }),
          style({ opacity: 1, transform: 'translateX(100px) translateY(0px)', offset: 0.75 }),
          style({ opacity: 1, transform: 'translateX(0px) translateY(0px)', offset: 1.0 })
        ]))
      )
      // transition('0 => 1', animate('100ms 1000ms ease-out'))


    ]),
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        animate(300, keyframes([
          style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
          style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
        ]))
      ]),
      transition('* => void', [
        animate(300, keyframes([
          style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
          style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
        ]))
      ])
    ]),
    // trigger('zIndexerChanged', [
    //   state('0', style({ opacity: 1, transform: 'scale(0.0)' })),
    //   state('1', style({ opacity: 1, transform: 'scale(1.0)' })),

    //   // state('true', style({ opacity: 1, width: '*', height: '*' })),
    //   // state('false', style({ opacity: 1, width: '400px', height: '100px' })),

    //   // state('true', style({ opacity: 1, width: '*', height: '*' })),
    //   // state('false', style({ opacity: 1, width: '400px', height: '30px' })),

    //   transition('1 => 0', animate('300ms')),
    //   transition('0 => 1', animate('300ms'))
    // ]),

    trigger('isVisibleChanged_1', [
      state('true', style({ opacity: 1, transform: 'scale(1.0)' })),
      state('false', style({ opacity: 0, transform: 'scale(1.0)' })),

      // state('true', style({ opacity: 1, width: '*', height: '*' })),
      // state('false', style({ opacity: 1, width: '400px', height: '100px' })),

      // state('true', style({ opacity: 1, width: '*', height: '*' })),
      // state('false', style({ opacity: 1, width: '400px', height: '30px' })),

      // transition('true => false', animate('300ms')),
      // transition('0 => 1', animate('300ms'))
    ])
  ],
  template: `

<div >

 
 
<div [@isVisibleChanged2]="isVisible"  
   (@isVisibleChanged2.start)="animationStarted($event)"
        (@isVisibleChanged2.done)="animationDone($event)"
[style.height]="'100px'" 
[style.width]="'100px'" 
style="background:orange;">

</div>
     

</div>


 

  `
})
export class TextAnimationComponent implements OnInit {
  @Input() isVisible: boolean = true;
  @Input() objects: any[] = [];
  public startX: number = 0;


  constructor() {


  }

  ngOnInit() {


  }

  ngOnChanges(changes: { [key: string]: SimpleChange }) {

    for (var key in changes) {

      console.log(key)
      if (key == 'zIndexer') {



      }
    }
  }
  animationStarted() { console.info("animationStarted") }
  animationDone() { console.info("animationDone") }

}


      // <img src='app/textAnimation/media/Koala.jpg' width="100" height="100" />
          //  <img *ngIf="(i  % 2) == 0" style="position:relative" [@isVisibleChanged_0]="isVisible" [src]=o.src width="100" height="100" />
    //  <img *ngIf="(i  % 2) == 1" style="position:absolute" [@isVisibleChanged_1]="isVisible" [src]=o.src width="100" height="100" />

    // [@isVisibleChanged_0]="isVisible"