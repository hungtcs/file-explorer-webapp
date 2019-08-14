import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesModule } from '../themes/public_api';
import { AppBarComponent } from './app-bar/app-bar.component';
import { AppBarRowComponent } from './app-bar-row/app-bar-row.component';
import { AppBarSectionComponent } from './app-bar-section/app-bar-section.component';

@NgModule({
  imports: [
    CommonModule,
    ThemesModule,
  ],
  exports: [
    AppBarComponent,
    AppBarRowComponent,
    AppBarSectionComponent,
  ],
  declarations: [
    AppBarComponent,
    AppBarRowComponent,
    AppBarSectionComponent,
  ],
})
export class AppBarsModule {

}
