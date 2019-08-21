import { Component, OnInit } from '@angular/core';
import { FileExplorerComponent } from '../../file-explorer/file-explorer.component';

@Component({
  selector: 'fe-default-menu',
  templateUrl: './default-menu.component.html',
  styleUrls: ['./default-menu.component.scss']
})
export class DefaultMenuComponent implements OnInit {
  public fileExplorerComponent: FileExplorerComponent;

  constructor() {

  }

  public ngOnInit() {

  }

  public onUploadFileClick() {
    this.fileExplorerComponent.onUploadFile();
  }

}
