import { Themes } from './themes';
import { Themeable } from './themeable';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: `tcs-theme`,
})
export class ThemeDirective extends Themeable {

  constructor(
      public readonly themes: Themes,
      public readonly elementRef: ElementRef<HTMLElement>) {
    super();
  }

}
