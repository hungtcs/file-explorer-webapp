import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileExplorerComponent } from './file-explorer/file-explorer.component';
import { HomeFolderGuard } from './guards/home-folder.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [HomeFolderGuard],
  },
  {
    path: ':path',
    component: FileExplorerComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class FileExplorerRoutingModule {

}
