import { style, animate, sequence, AnimationBuilder, AnimationPlayer } from '@angular/animations';
import { Component, ViewChild, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'loader',
  templateUrl: './animation-builder.component.html',
  styleUrls: ['./animation-builder.component.css']
})

export class AnimationBuilderComponent implements OnInit {
  @ViewChild('loadingBar') loadingBar;

  public player: AnimationPlayer;
  private _percentage = 0;
  // public loadingBar;

  constructor(private _builder: AnimationBuilder) {

  }

  ngOnInit() {

    this.percentage = 0;

    let interval = setInterval(() => {

      if (this.percentage > 50) {
        clearInterval(interval);
      }
      else {
        this.percentage += 10;
      }



    }, 1000)

  }

  get percentage() { return this._percentage; }

  set percentage(p: number) {
    this._percentage = p;

    // if (this.player) {
    //   this.player.destroy();
    // }

    const factory = this._builder.build([
      style({ width: '*' }),
      animate('350ms cubic-bezier(.35, 0, .25, 1)', style({ width: (p * 10) + '%' }))
    ]);

    this.player = factory.create(this.loadingBar.nativeElement, {});
    this.player.play();
  }
}




// export class AnimationBuilderComponent implements OnInit {
//   private source = new Subject<string>();
//   public percentage: number = 0;

//   @ViewChild('loadingBar')
//   public loadingBar;

//   constructor(private _builder: AnimationBuilder) {

//   }

//   ngOnInit() {
//   }

//   getPercentage() {
//     return Math.ceil(this.percentage * 100);
//   }

//   animateTo(to: number) {
//     const loaderAnimation = this._builder.build(sequence([
//       style({ width: '*' }),
//       animate('350ms cubic-bezier(.35, 0, .25, 1)', style({ width: (to * 100) + '%' }))
//     ]));

//     return loaderAnimation.create(this.loadingBar.nativeElement, {});
//   }

//   get asObservable() {
//     return this.source.asObservable();
//   }

//   upload(file: any) {
//     this.percentage = 0;
//     this.animateLoop(() => {
//       this.source.next(file);
//     });
//   }

//   animateLoop(cb: Function) {
//     if (this.percentage >= 1) {
//       cb();
//       return;
//     }
//     const player = this.animateTo(this.percentage);
//     player.onDone(() => {
//       this.percentage += rand(0.03, 0.08);
//       this.animateLoop(cb);
//     });
//     player.play();
//   }
// }
function rand(min: number, max: number): number {
  return (Math.random() * max) + min;
}