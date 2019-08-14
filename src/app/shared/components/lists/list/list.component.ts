import { Convert2Boolean } from '../../../utils/public_api';
import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  host: {
    '[class.tcs-list]': 'true',
  },
  selector: 'tcs-list',
  styleUrls: ['./list.component.scss'],
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {

  @Input()
  @Convert2Boolean()
  @HostBinding('class.tcs-list--avatar')
  public avatar: boolean = false;

  @Input()
  @Convert2Boolean()
  @HostBinding('class.tcs-list--multiline')
  public multiline: boolean = false;


  constructor() {

  }

  public ngOnInit() {

  }

}
