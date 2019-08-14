import { Themeable, Themes } from '../../themes/public_api';
import { Component, Input, HostBinding, ElementRef } from '@angular/core';
import { Convert2Boolean } from '../../../utils/public_api';

@Component({
  host: {
    '[class.tcs-app-bar]': 'true',
  },
  selector: 'tcs-app-bar',
  styleUrls: ['./app-bar.component.scss'],
  templateUrl: './app-bar.component.html',
})
export class AppBarComponent extends Themeable {

  @Input()
  @Convert2Boolean()
  @HostBinding('class.tcs-app-bar--raised')
  public raised: boolean = true;

  constructor(
      public readonly themes: Themes,
      public readonly elementRef: ElementRef<HTMLElement>) {
    super();
  }

}
