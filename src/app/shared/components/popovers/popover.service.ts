import { KVObject } from '../../utils/public_api';
import { ScrimService } from '../scrims/public_api';
import { PopoverOptions } from './popover-options';
import { PopoverComponent } from './popover/popover.component';
import { Injectable, ComponentFactoryResolver, Injector, ApplicationRef, Type } from '@angular/core';
import { take, tap } from 'rxjs/operators';

@Injectable()
export class PopoverService {
  private container: HTMLDivElement;

  constructor(
      private readonly injector: Injector,
      private readonly applicationRef: ApplicationRef,
      private readonly componentFactoryResolver: ComponentFactoryResolver) {
    this.container = document.createElement('div');
    this.container.classList.add(`tcs-popover-container`);
    document.body.appendChild(this.container);
  }

  public create<T>(options: PopoverOptions<T>) {
    options = { ...{ scrim: true }, ...options };
    const contentComponentRef = this.createComponent(options.component, [], options.componentAttrs);
    const popoverComponentRef = this.createComponent(PopoverComponent, [[contentComponentRef.location.nativeElement]]);
    this.container.appendChild(popoverComponentRef.location.nativeElement);

    popoverComponentRef.instance.scrim = options.scrim;

    contentComponentRef.onDestroy(() => {
      popoverComponentRef.destroy();
    });

    if(options.event) {
      console.log(event.currentTarget);

      popoverComponentRef.instance.bindElement = event.currentTarget as HTMLElement;
      popoverComponentRef.instance.absolute = true;
    }

    if(options.present) {
      this.present({ options, popoverComponentRef, contentComponentRef });
    }

    // 点击遮罩销毁
    if(options.fragile) {
      popoverComponentRef.instance.hostClick
      .pipe(take(1))
      .pipe(tap(() => popoverComponentRef.destroy()))
      .subscribe();
    }

    // 点击遮罩隐藏
    if(options.recluse) {
      popoverComponentRef.instance.hostClick
        .pipe(tap(() => popoverComponentRef.instance.present = false))
        .subscribe();
    }
    return {
      options,
      popoverComponentRef,
      contentComponentRef,
    };
  }

  public present(popover, event?: MouseEvent) {
    if(event) {
      popover.popoverComponentRef.instance.bindElement = event.currentTarget as HTMLElement;
      popover.popoverComponentRef.instance.absolute = true;
    }
    popover.popoverComponentRef.instance.present = true;
  }

  public hide(popover) {
    popover.popoverComponentRef.instance.present = false;
  }

  public async dismiss(popover) {
    popover.popoverComponentRef.destroy();
  }

  private createComponent<T>(component: Type<T>, projectableNodes: any[][]=[], attrs: KVObject = {}) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory<T>(component);
    const componentRef = componentFactory.create(this.injector, projectableNodes);
    Object.keys(attrs).forEach(key => {
      componentRef.instance[key] = attrs[key];
    });
    this.applicationRef.attachView(componentRef.hostView);
    return componentRef;
  }


}
