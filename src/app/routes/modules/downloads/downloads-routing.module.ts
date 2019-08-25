import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DownloadingComponent } from './downloading/downloading.component';


const routes: Routes = [
  {
    path: '',
    component: DownloadingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DownloadsRoutingModule { }
