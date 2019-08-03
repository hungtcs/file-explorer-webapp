import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/public_api';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [
    ComponentsModule,
  ],
})
export class SharedModule {

}
