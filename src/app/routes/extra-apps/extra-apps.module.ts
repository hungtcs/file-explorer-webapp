import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/public_api';
import { ExtraAppsComponent } from './extra-apps.component';
import { ExtraAppsRoutingModule } from './extra-apps-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ExtraAppsRoutingModule,
  ],
  declarations: [
    ExtraAppsComponent,
  ],
})
export class ExtraAppsModule {

}
