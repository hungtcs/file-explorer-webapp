import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/public_api';
import { FileListComponent } from './components/file-list/file-list.component';
import { FileExplorerService } from './services/file-explorer.service';
import { FileExplorerComponent } from './file-explorer/file-explorer.component';
import { PathBreadcrumbComponent } from './components/path-breadcrumb/path-breadcrumb.component';
import { FileExplorerRoutingModule } from './file-explorer-routing.module';
import { DefaultMenuComponent } from './components/default-menu/default-menu.component';
import { HomeFolderGuard } from './guards/home-folder.guard';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FileExplorerRoutingModule,
  ],
  providers: [
    HomeFolderGuard,
    FileExplorerService,
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
