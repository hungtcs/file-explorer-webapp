import { RouterOutlet } from '@angular/router';
import { routesAnimation } from './animations/routes-animation';
import { Component, ViewChild, HostBinding } from '@angular/core';

@Component({
  selector: 'fe-root',
  template: `<router-outlet #outlet></router-outlet>`,
  styleUrls: ['./app.component.scss'],
  animations: [ routesAnimation ],
})
export class AppComponent {

  @ViewChild('outlet', { read: RouterOutlet, static: true })
  public outlet: RouterOutlet;

  @HostBinding('@routesAnimation')
  get prepareRoute() {
    return this.outlet && this.outlet.activatedRouteData && this.outlet.activatedRouteData['animation'];
  }


}
