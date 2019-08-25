import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/public_api';
import { ExtraAppsModule } from './extra-apps/extra-apps.module';
import { RoutesRoutingModule } from './routes-routing.module';
import { DrawerWrapperComponent } from './components/drawer-wrapper/drawer-wrapper.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ExtraAppsModule,
    RoutesRoutingModule,
  ],
  declarations: [
    DrawerWrapperComponent,
  ],
})
export class RoutesModule {

}
