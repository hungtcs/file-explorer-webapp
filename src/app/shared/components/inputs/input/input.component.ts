import { Convert2Boolean } from 'src/app/shared/utils/public_api';
import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'tcs-input',
  providers: [
    {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
    },
  ],
  styleUrls: ['./input.component.scss'],
  templateUrl: './input.component.html',
})
export class InputComponent implements OnInit, ControlValueAccessor {
  private _value: string;

  public onValueChange: (value: string) => void;
  public onValueTouched: (value: string) => void;

  @Input()
  @Convert2Boolean()
  public disabled: boolean = false;

  @Input()
  @Convert2Boolean()
  public password: boolean = false;

  get value() {
    return this._value;
  }
  set value(value: string) {
    this._value = value;
    this.onValueChange && this.onValueChange(this.value);
  }

  constructor() {

  }

  public ngOnInit() {

  }

  public writeValue(value: string) {
    this.value = value;
  }

  public registerOnChange(callback: any) {
    this.onValueChange = callback;
  }

  public registerOnTouched(callback: any): void {
    this.onValueTouched = callback;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
