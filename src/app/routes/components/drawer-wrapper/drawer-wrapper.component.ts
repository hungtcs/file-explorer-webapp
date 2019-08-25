import { DrawerComponent } from '../../../shared/public_api';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'fe-drawer-wrapper',
  templateUrl: './drawer-wrapper.component.html',
  styleUrls: ['./drawer-wrapper.component.scss'],
})
export class DrawerWrapperComponent implements OnInit {

  @ViewChild('drawer', { read: DrawerComponent, static: true })
  public drawer: DrawerComponent;

  constructor() {

  }

  public ngOnInit() {

  }

}
