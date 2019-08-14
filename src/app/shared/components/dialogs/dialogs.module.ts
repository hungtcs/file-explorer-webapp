import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DialogService } from './dialog.service';
import { ButtonsModule } from '../buttons/public_api';
import { PopoversModule } from '../popovers/public_api';
import { AlertComponent } from './alert/alert.component';
import { PromptComponent } from './prompt/prompt.component';
import { ConfirmComponent } from './confirm/confirm.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ButtonsModule,
    PopoversModule,
  ],
  providers: [
    DialogService,
  ],
  declarations: [
    AlertComponent,
    PromptComponent,
    ConfirmComponent,
  ],
  entryComponents: [
    AlertComponent,
    PromptComponent,
    ConfirmComponent,
  ],
})
export class DialogsModule {

}
