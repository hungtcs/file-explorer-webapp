import { NgModule } from '@angular/core';
import { ViewerComponent } from './viewer/viewer.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ViewerComponent,
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
export class PictureViewerRoutingModule {

}
