import { Injectable } from '@angular/core';
import { PopoverService } from '../popovers/public_api';
import { LoadingComponent } from './loading/loading.component';
import { LoadingOptions } from './loading/loading-options';

@Injectable()
export class LoadingService {

  constructor(
      private readonly popoverService: PopoverService) {

  }

  public create(options: LoadingOptions = {}) {
    options = { ...{ scrim: true }, ...options };
    const popover = this.popoverService.create({
      scrim: options.scrim,
      present: options.present,
      component: LoadingComponent,
      componentAttrs: {
        message: options.message,
      },
    });
    return popover;
  }

  public show(popover) {
    this.popoverService.present(popover);
  }

  public hide(popover) {
    this.popoverService.hide(popover);
  }


}
