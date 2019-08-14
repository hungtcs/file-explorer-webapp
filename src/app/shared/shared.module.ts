import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentModule } from './moment/public_api';
import { ComponentsModule } from './components/public_api';
import { LongPressDirective } from './long-press.directive';

@NgModule({
  imports: [
    CommonModule,
    MomentModule,
    ComponentsModule,
  ],
  exports: [
    MomentModule,
    ComponentsModule,
    LongPressDirective,
  ],
  declarations: [
    LongPressDirective,
  ],
})
export class SharedModule {

}
