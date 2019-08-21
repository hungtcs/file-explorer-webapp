import { NgModule } from '@angular/core';
import { IconsModule } from './icons/icons.module';
import { ListsModule } from './lists/public_api';
import { CommonModule } from '@angular/common';
import { ScrimsModule } from './scrims/public_api';
import { ThemesModule } from './themes/public_api';
import { OthersModule } from './others/public_api';
import { InputsModule } from './inputs/public_api';
import { AppBarsModule } from './app-bars/public_api';
import { ButtonsModule } from './buttons/public_api';
import { DialogsModule } from './dialogs/public_api';
import { PopoversModule } from './popovers/public_api';
import { LoadingsModule } from './loadings/public_api';
import { CheckboxsModule } from './checkboxs/public_api';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContentComponent } from './content/content.component';
import { DrawersModule } from './drawers/public_api';

@NgModule({
  imports: [
    IconsModule,
    ListsModule,
    OthersModule,
    ScrimsModule,
    ThemesModule,
    CommonModule,
    InputsModule,
    AppBarsModule,
    ButtonsModule,
    DialogsModule,
    DrawersModule,
    LoadingsModule,
    PopoversModule,
    CheckboxsModule,
  ],
  exports: [
    IconsModule,
    ListsModule,
    OthersModule,
    ScrimsModule,
    ThemesModule,
    InputsModule,
    AppBarsModule,
    ButtonsModule,
    DialogsModule,
    DrawersModule,
    PopoversModule,
    LoadingsModule,
    CheckboxsModule,
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
