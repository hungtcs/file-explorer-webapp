import { Component, OnInit, Input } from '@angular/core';

@Component({
  host: {
    '[class.tcs-empty-placeholder]': 'true',
  },
  selector: 'tcs-empty-placeholder',
  styleUrls: ['./empty-placeholder.component.scss'],
  templateUrl: './empty-placeholder.component.html',
})
export class EmptyPlaceholderComponent implements OnInit {
  @Input()
  public icon: string = 'info';

  @Input()
  public message: string = '没有数据';

  constructor() {

  }

  public ngOnInit() {

  }

}
