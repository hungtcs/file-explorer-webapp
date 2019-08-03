import { NgModule } from '@angular/core';
import { IconsModule } from './icons/icons.module';
import { CommonModule } from '@angular/common';
import { AppBarsModule } from './app-bars/public_api';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  imports: [
    IconsModule,
    CommonModule,
    AppBarsModule,
  ],
  exports: [
    IconsModule,
    AppBarsModule,
    ToolbarComponent,
    ContentComponent,
  ],
  declarations: [
    ToolbarComponent,
    ContentComponent,
  ],
})
export class ComponentsModule {

}
