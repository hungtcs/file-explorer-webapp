import { ScrimComponent } from './scrim/scrim.component';
import { Injectable, Injector, ApplicationRef, ComponentFactoryResolver, EventEmitter, ComponentRef, RendererFactory2 } from '@angular/core';

@Injectable()
export class ScrimService {
  private refCount = 0;
  public click: EventEmitter<MouseEvent> = new EventEmitter();
  public componentRef: ComponentRef<ScrimComponent>;

  constructor(
      private readonly injector: Injector,
      private readonly rendererFactory2: RendererFactory2,
      private readonly applicationRef: ApplicationRef,
      private readonly componentFactoryResolver: ComponentFactoryResolver) {
    this.create();
  }

  private create() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ScrimComponent);
    this.componentRef = componentFactory.create(this.injector, []);
    this.applicationRef.attachView(this.componentRef.hostView);
    document.body.appendChild(this.componentRef.location.nativeElement);
    const renderer2 =this.rendererFactory2.createRenderer(this.componentRef.location.nativeElement, null);
    renderer2.listen(this.componentRef.location.nativeElement, 'click', (event: MouseEvent) => this.click.emit(event));
  }

  public show() {
    this.componentRef.instance.visible = true;
    this.refCount++;
  }

  public hide() {
    this.componentRef.instance.visible = false;
    if(--this.refCount === 0) {
    }
  }

}
