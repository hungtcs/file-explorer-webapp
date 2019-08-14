import { Component, OnInit, Input, TemplateRef, Output, EventEmitter, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';

@Component({
  selector: 'fe-prompt',
  styleUrls: ['./prompt.component.scss'],
  templateUrl: './prompt.component.html',
})
export class PromptComponent implements OnInit, AfterViewInit {

  @ViewChild('input', { read: ElementRef, static: false })
  public input: ElementRef<HTMLInputElement>;

  @Input()
  public value: string;

  @Input()
  public title?: string | TemplateRef<void>;

  @Input()
  public required: boolean = false;

  @Input()
  public okButtonText: string = '确认';

  @Input()
  public cancelButtonText: string = '取消';

  @Output()
  public buttonClick: EventEmitter<boolean|string> = new EventEmitter();

  get richTitle() {
    return this.title instanceof TemplateRef;
  }

  constructor() { }

  ngOnInit() {
  }

  public ngAfterViewInit() {
    setTimeout(() => {
      this.input.nativeElement.focus();
    });
  }

  public onButtonClick(choice: boolean, input: NgModel) {
    if(choice) {
      if(input.invalid) {
        return;
      } else {
        this.buttonClick.emit(this.value);
      }
    } else {
      this.buttonClick.emit(false);
    }
  }

}
