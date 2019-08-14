import { Convert2Boolean } from '../../../utils/public_api';
import { Themeable, Themes } from '../../themes/public_api';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, HostListener, Input, EventEmitter, Output, forwardRef, ElementRef } from '@angular/core';

@Component({
  selector: 'tcs-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
    },
  ],
})
export class CheckboxComponent extends Themeable implements ControlValueAccessor {
  private _checked: boolean = false;
  private valueChangeCallback: Function;
  private valueTouchedCallback: Function;

  @Input()
  @Convert2Boolean()
  get checked() {
    return this._checked;
  }
  set checked(checked) {
    this._checked = checked;
    this.checkedChange.emit(this.checked);
  }

  @Output()
  public checkedChange: EventEmitter<boolean> = new EventEmitter();

  @Input()
  public disabled: boolean = false;

  constructor(
      public readonly themes: Themes,
      public readonly elementRef: ElementRef<HTMLElement>) {
    super();
  }

  public writeValue(checked: boolean): void {
    this.checked = checked;
  }

  public registerOnChange(callback: Function) {
    this.valueChangeCallback = callback;
  }

  public registerOnTouched(callback: Function) {
    this.valueTouchedCallback = callback;
  }

  public setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  @HostListener('click')
  public onClick() {
    this.checked = !this.checked;
    this.valueChangeCallback && this.valueChangeCallback(this.checked);
  }

  @HostListener('blur', [])
  public onBlur() {
    this.valueTouchedCallback && this.valueTouchedCallback();
  }

}
