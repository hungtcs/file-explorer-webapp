import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrimsModule } from '../scrims/public_api';
import { DrawerComponent } from './drawer/drawer.component';

@NgModule({
  imports: [
    CommonModule,
    ScrimsModule,
  ],
  exports: [
    DrawerComponent,
  ],
  declarations: [
    DrawerComponent,
  ],
})
export class DrawersModule {

}
