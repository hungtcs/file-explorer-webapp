import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/public_api';
import { FileListComponent } from './components/file-list/file-list.component';
import { DefaultMenuComponent } from './components/default-menu/default-menu.component';
import { FileExplorerComponent } from './file-explorer/file-explorer.component';
import { PathBreadcrumbComponent } from './components/path-breadcrumb/path-breadcrumb.component';
import { FileExplorerRoutingModule } from './file-explorer-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FileExplorerRoutingModule,
  ],
  declarations: [
    FileListComponent,
    DefaultMenuComponent,
    FileExplorerComponent,
    PathBreadcrumbComponent,
  ],
  entryComponents: [
    DefaultMenuComponent,
  ],
})
export class FileExplorerModule {

}
