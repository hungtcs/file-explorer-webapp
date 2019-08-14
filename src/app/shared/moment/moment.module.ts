import { NgModule } from '@angular/core';
import { FormatPipe } from './format.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    FormatPipe,
  ],
  declarations: [
    FormatPipe,
  ],
})
export class MomentModule {

}
