import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fe-loading',
  styleUrls: ['./loading.component.scss'],
  templateUrl: './loading.component.html',
})
export class LoadingComponent implements OnInit {

  @Input()
  public icon: string = 'disk';

  @Input()
  public message: string;

  constructor() {

  }

  public ngOnInit() {

  }

}
