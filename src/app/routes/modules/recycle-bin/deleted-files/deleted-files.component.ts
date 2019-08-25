import { Component, OnInit } from '@angular/core';
import { DrawerWrapperComponent } from '../../../components/drawer-wrapper/drawer-wrapper.component';

@Component({
  selector: 'fe-deleted-files',
  styleUrls: ['./deleted-files.component.scss'],
  templateUrl: './deleted-files.component.html',
})
export class DeletedFilesComponent implements OnInit {

  constructor(
      public readonly drawerWrapperComponent: DrawerWrapperComponent) {

  }

  public ngOnInit() {

  }

}
