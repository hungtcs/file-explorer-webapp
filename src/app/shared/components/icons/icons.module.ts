import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconService } from './svg-icon/svg-icon.service';
import { MdIconComponent } from './md-icon/md-icon.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    MdIconComponent,
    SvgIconComponent,
  ],
  providers: [
    SvgIconService
  ],
  declarations: [
    MdIconComponent,
    SvgIconComponent,
  ],
})
export class IconsModule {

}
