import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/public_api';
import { DeletedFilesComponent } from './deleted-files/deleted-files.component';
import { RecycleBinRoutingModule } from './recycle-bin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RecycleBinRoutingModule,
  ],
  declarations: [
    DeletedFilesComponent,
  ],
})
export class RecycleBinModule {

}
