import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
  ],
  exports: [
    InputComponent,
  ],
  declarations: [
    InputComponent,
  ],
})
export class InputsModule {

}
