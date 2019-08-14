import { NgModule } from '@angular/core';
import { IconsModule } from '../icons/public_api';
import { CommonModule } from '@angular/common';
import { EmptyPlaceholderComponent } from './empty-placeholder/empty-placeholder.component';

@NgModule({
  imports: [
    IconsModule,
    CommonModule,
  ],
  exports: [
    EmptyPlaceholderComponent,
  ],
  declarations: [
    EmptyPlaceholderComponent,
  ],
})
export class OthersModule {

}
