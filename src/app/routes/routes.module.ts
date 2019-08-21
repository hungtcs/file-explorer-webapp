import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/public_api';
import { RoutesRoutingModule } from './routes-routing.module';
import { DrawerWrapperComponent } from './drawer-wrapper/drawer-wrapper.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RoutesRoutingModule,
  ],
  declarations: [
    DrawerWrapperComponent,
  ],
})
export class RoutesModule {

}
