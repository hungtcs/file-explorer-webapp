import { Component, OnInit, Input, HostBinding, HostListener, EventEmitter, Output } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Convert2Boolean } from '../../../utils/public_api';

@Component({
  host: {
    '[class.tcs-scrim]': 'true',
  },
  selector: 'tcs-scrim',
  styleUrls: ['./scrim.component.scss'],
  animations: [
    trigger('display', [
      state('visible', style({
        opacity: 1,
        display: '*'
      })),
      state('hidden', style({
        opacity: 0,
        display: 'none',
      })),
      transition('visible => hidden', [
        animate('200ms ease-out'),
      ]),
      transition('hidden => visible', [
        style({ display: 'block' }),
        animate('200ms ease-out'),
      ]),
    ]),
  ],
  templateUrl: './scrim.component.html',
})
export class ScrimComponent implements OnInit {

  @Input()
  @Convert2Boolean()
  public visible: boolean = false;

  @HostBinding('@display')
  get visibleS() {
    return this.visible ? 'visible' : 'hidden';
  }

  constructor() {

  }

  public ngOnInit() {

  }

}
