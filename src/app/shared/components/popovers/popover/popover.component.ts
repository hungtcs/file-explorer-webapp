import { trigger, state, style, transition, animate, group, query, animateChild, keyframes } from '@angular/animations';
import { Component, OnInit, HostBinding, ElementRef, ViewChild, ChangeDetectorRef, EventEmitter, HostListener, AfterViewChecked } from '@angular/core';

@Component({
  host: {
    '[class.tcs-popover]': 'true',
  },
  selector: 'tcs-popover',
  styleUrls: ['./popover.component.scss'],
  animations: [
    trigger('present', [
      state('true', style({
        'background-color': 'rgba(0, 0, 0, {{ alpha }})',
      }), { params: { alpha: 0 } }),
      state('false', style({
        display: 'none',
        'background-color': 'rgba(0, 0, 0, 0)',
      })),
      transition('true=>false', [
        group([
          query('@contentPresent', animateChild()),
          animate('200ms'),
        ]),
      ]),
      transition('false=>true', [
        style({
          display: '*',
        }),
        group([
          query('@contentPresent', animateChild()),
          animate('200ms'),
        ]),
      ]),
      transition('void => true', [
        animate('200ms', keyframes([
          style({ 'background-color': 'rgba(0, 0, 0, 0)' }),
          style({ 'background-color': 'rgba(0, 0, 0, {{ alpha }})' }),
        ])),
      ]),
      transition('true => void', [
        animate('200ms', keyframes([
          style({ 'background-color': 'rgba(0, 0, 0, {{ alpha }})' }),
          style({ 'background-color': 'rgba(0, 0, 0, 0)' }),
        ])),
      ]),
    ]),
    trigger('contentPresent', [
      transition('* => a', [
        animate('200ms', keyframes([
          style({ opacity: 0, 'transform': 'scale(0.5)', 'transform-origin': 'top right', }),
          style({ opacity: 1, 'transform': 'scale(1)', 'transform-origin': 'top right', }),
        ])),
      ]),
      transition('* => b', [
        animate('200ms', keyframes([
          style({ opacity: 1, 'transform': 'scale(1)', 'transform-origin': 'top right', }),
          style({ opacity: 0, 'transform': 'scale(0.5)', 'transform-origin': 'top right', }),
        ])),
      ]),
      transition('* => c', [
        animate('200ms', keyframes([
          style({ opacity: 0 }),
          style({ opacity: 1 }),
        ])),
      ]),
      transition('* => d', [
        animate('200ms', keyframes([
          style({ opacity: 1 }),
          style({ opacity: 0 }),
        ])),
      ]),
    ]),
  ],
  templateUrl: './popover.component.html',
})
export class PopoverComponent implements OnInit, AfterViewChecked {

  public present: boolean = false;

  @HostBinding('class.tcs-popover--absolute')
  public absolute: boolean = false;

  @HostBinding('class.tcs-popover--scrim')
  public scrim: boolean = false;

  public bindElement: HTMLElement;

  @ViewChild('content', { static: true })
  public content: ElementRef<HTMLElement>;

  public top: number;
  public right: number;

  public hostClick: EventEmitter<MouseEvent> = new EventEmitter();

  @HostBinding('@present')
  get presentAnimation() {
    return {
      value: this.present,
      params: {
        alpha: this.present ? (this.scrim ? 0.32 : 0) : 0,
      },
    }
  }

  get contentPresent() {
    return {
      value: this.bindElement ? (this.present ? 'a' : 'b') : (this.present ? 'c' : 'd'),
      params: {
        origin: this.bindElement ? 'top right' : 'center'
      },
    }
  }

  constructor(
      private readonly changeDetectorRef: ChangeDetectorRef) {

  }

  public ngOnInit() {

  }

  public ngAfterViewChecked() {
    if(this.bindElement) {
      this.top = this.bindElement.offsetTop;
      const boundingClientRect = this.bindElement.getBoundingClientRect();
      this.right = window.innerWidth - boundingClientRect.left - boundingClientRect.width;
      this.changeDetectorRef.detectChanges();
    }
  }

  @HostListener('click', ['$event'])
  public onClick(event: MouseEvent) {
    this.hostClick.emit(event);
  }

  public onContentClick(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

}
