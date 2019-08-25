import { Component, OnInit } from '@angular/core';
import { DrawerWrapperComponent } from '../../../components/drawer-wrapper/drawer-wrapper.component';

@Component({
  selector: 'fe-downloading',
  templateUrl: './downloading.component.html',
  styleUrls: ['./downloading.component.scss'],
})
export class DownloadingComponent implements OnInit {

  constructor(
      public readonly drawerWrapperComponent: DrawerWrapperComponent) {

  }

  ngOnInit() {
  }

}
