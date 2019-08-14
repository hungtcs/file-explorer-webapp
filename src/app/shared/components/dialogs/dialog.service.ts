import { Injectable } from '@angular/core';
import { AlertOptions } from './alert/alert-options';
import { take, finalize, tap } from 'rxjs/operators';
import { PopoverService } from '../popovers/public_api';
import { AlertComponent } from './alert/alert.component';
import { ConfirmOptions } from './confirm/confirm-options';
import { ConfirmComponent } from './confirm/confirm.component';
import { of } from 'rxjs';
import { PromptOptions } from './prompt/prompt-options';
import { PromptComponent } from './prompt/prompt.component';

@Injectable()
export class DialogService {

  constructor(
      private readonly popoverService: PopoverService,) {

  }

  public alert(options: AlertOptions) {
    const popover = this.popoverService.create({
      component: AlertComponent,
      componentAttrs: {
        title: options.title,
        message: options.message,
        buttonText: options.buttonText,
      },
    });
    return popover.contentComponentRef.instance.buttonClick
      .pipe(take(1))
      .pipe(finalize(() => popover.contentComponentRef.destroy()));
  }

  public confirm(options: ConfirmOptions) {
    options = { ...{ okButtonText: '确认', cancelButtonText: '取消' }, ...options };
    const popover = this.popoverService.create({
      present: false,
      component: ConfirmComponent,
      componentAttrs: {
        title: options.title,
        message: options.message,
        okButtonText: options.okButtonText,
        cancelButtonText: options.cancelButtonText,
      },
    });
    this.popoverService.present(popover);
    return popover.contentComponentRef.instance.buttonClick
      .pipe(take(1))
      .pipe(finalize(() => popover.contentComponentRef.destroy()));
  }

  public prompt(options: PromptOptions = {}) {
    options = { ...{ okButtonText: '确认', cancelButtonText: '取消' }, ...options };
    const popover = this.popoverService.create({
      scrim: true,
      present: true,
      fragile: false,
      recluse: false,
      component: PromptComponent,
      componentAttrs: {
        title: options.title,
        required: options.required,
        okButtonText: options.okButtonText,
        cancelButtonText: options.cancelButtonText,
      },
    });
    return popover.contentComponentRef.instance.buttonClick
      .pipe(take(1))
      .pipe(finalize(() => popover.contentComponentRef.destroy()));
  }

}
