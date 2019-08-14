import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrimService } from './scrim.service';
import { ScrimComponent } from './scrim/scrim.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    ScrimComponent,
  ],
  providers: [
    ScrimService,
  ],
  declarations: [
    ScrimComponent,
  ],
  entryComponents: [
    ScrimComponent,
  ],
})
export class ScrimsModule {

}
