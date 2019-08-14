import { ComponentRef } from '@angular/core';
import { PopoverComponent } from './popover/popover.component';

export interface PopoverRef {
  element: HTMLElement;
  componentRef: ComponentRef<PopoverComponent>;
}
