import { Themes } from './themes';
import { Input, ElementRef, OnInit } from '@angular/core';

export abstract class Themeable implements OnInit {
  private _theme: string;
  public abstract themes: Themes;
  public abstract elementRef: ElementRef<HTMLElement>;

  @Input('tcs-theme')
  public get theme() {
    return this._theme;
  }
  public set theme(theme) {
    this._theme = theme;
    this.setThemeVariables();
  }

  public ngOnInit() {
    this.setThemeVariables();
  }

  protected setThemeVariables() {
    this.elementRef.nativeElement.style.removeProperty('--tcs-theme-primary');
    this.elementRef.nativeElement.style.removeProperty('--tcs-theme-reverse');
    if(!this.themes) {
      console.warn('themes is not provided!');
      return;
    }
    if(this.theme in this.themes.colorMatchings) {
      this.elementRef.nativeElement.style.setProperty('--tcs-theme-primary', this.themes.colorMatchings[this.theme].primary);
      this.elementRef.nativeElement.style.setProperty('--tcs-theme-reverse', this.themes.colorMatchings[this.theme].reverse);
    } else if(this.themes.default in this.themes.colorMatchings) {
      // console.warn(`'${ this.theme }' theme is missing, using default theme instead`);
      this.elementRef.nativeElement.style.setProperty('--tcs-theme-primary', this.themes.colorMatchings[this.themes.default].primary);
      this.elementRef.nativeElement.style.setProperty('--tcs-theme-reverse', this.themes.colorMatchings[this.themes.default].reverse);
    } else {
      console.warn('themes is not provided!');
      return;
    }
  }

}
