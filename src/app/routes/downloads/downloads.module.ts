import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/public_api';
import { DownloadingComponent } from './downloading/downloading.component';
import { DownloadsRoutingModule } from './downloads-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DownloadsRoutingModule,
  ],
  declarations: [
    DownloadingComponent,
  ],
})
export class DownloadsModule {

}
