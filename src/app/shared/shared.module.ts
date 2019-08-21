import { NgModule } from '@angular/core';
import { UtilsModule } from './utils/public_api';
import { CommonModule } from '@angular/common';
import { MomentModule } from './moment/public_api';
import { ComponentsModule } from './components/public_api';

@NgModule({
  imports: [
    UtilsModule,
    CommonModule,
    MomentModule,
    ComponentsModule,
  ],
  exports: [
    UtilsModule,
    MomentModule,
    ComponentsModule,
  ],
})
export class SharedModule {

}
