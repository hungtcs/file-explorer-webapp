import { NgModule } from '@angular/core';
import { IconsModule } from '../icons/public_api';
import { CommonModule } from '@angular/common';
import { ThemesModule } from '../themes/public_api';
import { ButtonComponent } from './button/button.component';
import { IconButtonComponent } from './icon-button/icon-button.component';

@NgModule({
  imports: [
    IconsModule,
    CommonModule,
    ThemesModule,
  ],
  exports: [
    ButtonComponent,
    IconButtonComponent,
  ],
  declarations: [
    ButtonComponent,
    IconButtonComponent,
  ],
})
export class ButtonsModule {

}
