import { Component, OnInit, Input, OnDestroy, HostBinding, HostListener, ElementRef, AfterViewInit } from '@angular/core';
import { Convert2Boolean } from '../../../utils/public_api';
import { ScrimService } from '../../scrims/public_api';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  host: {
    '[class.tcs-drawer]': 'true',
    '[class.tcs-drawer--position-left]': 'true',
  },
  selector: 'tcs-drawer',
  styleUrls: ['./drawer.component.scss'],
  templateUrl: './drawer.component.html',
})
export class DrawerComponent implements OnInit, OnDestroy, AfterViewInit {
  private _visible: boolean = false;
  private scrimClickSubscription: Subscription;

  @Input()
  public width: number = 250;

  @Input()
  @Convert2Boolean()
  public modal: boolean = true;

  @Input()
  public position: 'top' | 'left' | 'right' | 'bottom' = 'left'

  @HostBinding('class.tcs-drawer--visible')
  get visible() {
    return this._visible;
  }
  set visible(visible) {
    this._visible = visible;
    if(this._visible) {
      this.scrimService.show();
    } else {
      this.scrimService.hide();
    }
  }

  @HostBinding('style.width')
  get hostWidth() {
    if(['left', 'right'].includes(this.position)) {
      return `${ this.width }px`;
    } else {
      return `auto`;
    }
  }

  constructor(
      private readonly elementRef: ElementRef<HTMLElement>,
      private readonly scrimService: ScrimService) {

  }

  public ngOnInit() {
    this.scrimClickSubscription = this.scrimService.click
      .pipe(tap(() => this.visible = false))
      .subscribe();
  }

  public ngOnDestroy() {
    this.scrimClickSubscription.unsubscribe();
  }

  public ngAfterViewInit() {
    this.elementRef.nativeElement.style.display = 'block';
  }

  @HostListener('panleft', ['$event'])
  public onHostPanLeft(event: HammerInput) {
    this.visible = false;
  }

  @HostListener('panright', ['$event'])
  public onHostPanRight(event: HammerInput) {
    this.visible = true;
  }

}
