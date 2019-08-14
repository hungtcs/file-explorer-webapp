import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    ListComponent,
    ListItemComponent,
  ],
  declarations: [
    ListComponent,
    ListItemComponent,
  ],
})
export class ListsModule {

}
