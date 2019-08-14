import { Component, OnInit, TemplateRef, Input, EventEmitter, Output, ComponentRef, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'fe-alert',
  styleUrls: ['./alert.component.scss'],
  templateUrl: './alert.component.html',
})
export class AlertComponent implements OnInit {

  @Input()
  public title: string | TemplateRef<void>;

  @Input()
  public message: string | TemplateRef<void>;

  @Input()
  public buttonText: string = '确认';

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
