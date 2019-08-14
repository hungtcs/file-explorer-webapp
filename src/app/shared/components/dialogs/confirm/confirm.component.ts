import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';

@Component({
  selector: 'fe-confirm',
  styleUrls: ['./confirm.component.scss'],
  templateUrl: './confirm.component.html',
})
export class ConfirmComponent implements OnInit {

  @Input()
  public title?: string | TemplateRef<void>;

  @Input()
  public message?: string | TemplateRef<void>;

  @Input()
  public okButtonText: string = '确认';

  @Input()
  public cancelButtonText: string = '取消';

  @Output()
  public buttonClick: EventEmitter<any> = new EventEmitter();

  get richTitle() {
    return this.title instanceof TemplateRef;
  }

  get richMessage() {
    return this.message instanceof TemplateRef;
  }

  constructor() {

  }

  public ngOnInit() {

  }

}
