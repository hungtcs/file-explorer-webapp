import { HORIZONTAL_ALIGN_TYPE, ALIGN_LEFT, ALIGN_RIGHT } from '../../../constants/public_api';
import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  host: {
    '[class.tcs-app-bar__section]': 'true',
  },
  selector: 'tcs-app-bar-section',
  styleUrls: ['./app-bar-section.component.scss'],
  templateUrl: './app-bar-section.component.html',
})
export class AppBarSectionComponent implements OnInit {
  private static prefix = `tcs-app-bar__section`;

  @Input()
  public align: HORIZONTAL_ALIGN_TYPE = ALIGN_LEFT;

  @HostBinding(`class.${ AppBarSectionComponent.prefix }--align-left`)
  get alignLeft() { return this.align === ALIGN_LEFT };

  @HostBinding(`class.${ AppBarSectionComponent.prefix }--align-right`)
  get alignRight() { return this.align === ALIGN_RIGHT };

  constructor() {

  }

  public ngOnInit() {

  }

}
