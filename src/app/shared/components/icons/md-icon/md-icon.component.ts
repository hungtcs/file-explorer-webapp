import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Convert2Boolean } from '../../../utils/public_api';

@Component({
  host: {
    '[class.tcs-md-icon]': 'true',
  },
  selector: 'tcs-md-icon',
  styleUrls: ['./md-icon.component.scss'],
  templateUrl: './md-icon.component.html',
})
export class MdIconComponent implements OnInit {

  @Input()
  @HostBinding('class.tcs-md-icon--outlined')
  @Convert2Boolean()
  public outlined: boolean;

  @Input()
  @HostBinding('class.tcs-md-icon--round')
  @Convert2Boolean()
  public round: boolean;

  @Input()
  @HostBinding('class.tcs-md-icon--sharp')
  @Convert2Boolean()
  public sharp: boolean;

  @Input()
  @HostBinding('class.tcs-md-icon--two-tone')
  @Convert2Boolean()
  public twoTone: boolean;

  constructor() {

  }

  public ngOnInit() {

  }

}
