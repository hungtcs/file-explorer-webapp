import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileExplorerComponent } from './file-explorer/file-explorer.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: encodeURIComponent('/home/hungtcs'),
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
