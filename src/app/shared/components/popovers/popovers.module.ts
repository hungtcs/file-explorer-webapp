import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverService } from './popover.service';
import { PopoverComponent } from './popover/popover.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    PopoverService,
  ],
  declarations: [
    PopoverComponent,
  ],
  entryComponents: [
    PopoverComponent,
  ],
})
export class PopoversModule {

}
