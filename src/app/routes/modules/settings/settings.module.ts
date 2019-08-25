import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/public_api';
import { SettingsComponent } from './settings/settings.component';
import { SettingsRoutingModule } from './settings-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SettingsRoutingModule,
  ],
  declarations: [
    SettingsComponent,
  ],
})
export class SettingsModule {

}
