import { NgModule } from '@angular/core';
import { IconsModule } from '../icons/public_api';
import { CommonModule } from '@angular/common';
import { LoadingService } from './loading.service';
import { PopoversModule } from '../popovers/public_api';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  imports: [
    IconsModule,
    CommonModule,
    PopoversModule,
  ],
  exports: [

  ],
  providers: [
    LoadingService,
  ],
  declarations: [
    LoadingComponent,
  ],
  entryComponents: [
    LoadingComponent,
  ],
})
export class LoadingsModule {

}
