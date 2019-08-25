import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewerComponent } from './viewer/viewer.component';
import { PictureViewerRoutingModule } from './picture-viewer-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PictureViewerRoutingModule,
  ],
  declarations: [
    ViewerComponent,
  ],
})
export class PictureViewerModule {

}
