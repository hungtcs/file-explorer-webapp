import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/public_api';
import { FileListComponent } from './components/file-list/file-list.component';
import { FileExplorerService } from './services/file-explorer.service';
import { FileExplorerComponent } from './file-explorer.component';
import { PathBreadcrumbComponent } from './components/path-breadcrumb/path-breadcrumb.component';
import { FileExplorerRoutingModule } from './file-explorer-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FileExplorerRoutingModule,
  ],
  providers: [
    FileExplorerService,
  ],
  declarations: [
    FileListComponent,
    FileExplorerComponent,
    PathBreadcrumbComponent,
  ],
})
export class FileExplorerModule {

}
