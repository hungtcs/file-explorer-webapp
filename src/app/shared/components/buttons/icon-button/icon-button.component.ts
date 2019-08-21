import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Convert2Boolean } from '../../../utils/public_api';

@Component({
  selector: 'tcs-icon-button',
  styleUrls: ['./icon-button.component.scss'],
  templateUrl: './icon-button.component.html',
})
export class IconButtonComponent implements OnInit {

  @Input()
  public svg: string;

  @Input()
  @Convert2Boolean()
  public outlined: boolean;

  @Input()
  @Convert2Boolean()
  public round: boolean;

  @Input()
  @Convert2Boolean()
  public sharp: boolean;

  @Input()
  @Convert2Boolean()
  public twoTone: boolean;

  @HostBinding('class.tcs-icon-button--svg')
  get svgIcon() {
    return !!this.svg;
  }

  constructor() { }

  ngOnInit() {
  }

}
