import { Component } from '@angular/core';

@Component({
  selector: 'fe-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'file-explorer-webapp';
}
