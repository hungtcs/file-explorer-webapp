import { Convert2Boolean } from '../../../utils/public_api';
import { Component, OnInit, Input, HostBinding, ElementRef } from '@angular/core';
import { Themeable, Themes } from '../../themes/public_api';

@Component({
  selector: 'tcs-button',
  styleUrls: ['./button.component.scss'],
  templateUrl: './button.component.html',
})
export class ButtonComponent extends Themeable implements OnInit {

  @Input()
  @Convert2Boolean()
  @HostBinding('class.tcs-button--text-button')
  public text: boolean = false;

  @Input()
  @Convert2Boolean()
  @HostBinding('class.tcs-button--outlined-button')
  public outlined: boolean = false;

  @Input('tabindex')
  @HostBinding('tabindex')
  public tabindex: number = 0;

  constructor(
      public readonly themes: Themes,
      public readonly elementRef: ElementRef) {
    super();
  }

  public ngOnInit() {
    super.ngOnInit();
  }

}
