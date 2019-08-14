import { Manager, Press } from 'hammerjs';
import { Directive, EventEmitter, Output, ElementRef, OnInit, NgZone, Input, OnDestroy } from '@angular/core';

@Directive({
  selector: '[longPress]'
})
export class LongPressDirective implements OnInit, OnDestroy {
  private manager: HammerManager;

  @Input()
  public lonePressTime: number = 500;

  @Output()
  public longPress: EventEmitter<HammerInput> = new EventEmitter();

  constructor(
      private readonly zone: NgZone,
      private readonly elementRef: ElementRef<HTMLElement>) {

  }

  public ngOnInit() {
    this.zone.run(() => {
      this.manager = new Manager(this.elementRef.nativeElement);
      this.manager.add(new Press({
        time: this.lonePressTime,
      }));
      this.manager.on('press', event => {
        this.longPress.emit(event);
      });
    });
  }

  public ngOnDestroy() {
    this.manager.destroy();
  }

}
