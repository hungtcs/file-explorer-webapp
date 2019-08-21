import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LongPressDirective } from './directives/long-press.directive';
import { HumanReadableFileSizePipe } from './pipes/file-size/human-readable-file-size.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    LongPressDirective,
    HumanReadableFileSizePipe,
  ],
  declarations: [
    LongPressDirective,
    HumanReadableFileSizePipe,
  ],
})
export class UtilsModule {

}
