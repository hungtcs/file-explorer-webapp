import { tap } from 'rxjs/operators';
import { SvgIconService } from './svg-icon.service';
import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'tcs-svg-icon',
  styleUrls: ['./svg-icon.component.scss'],
  templateUrl: './svg-icon.component.html',
})
export class SvgIconComponent implements OnInit {
  public svgElement: SVGSVGElement;
  private _name: string;

  @Input()
  get name() {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
    this.fetchSvg(this.name);
  }

  constructor(
      private readonly elementRef: ElementRef<HTMLElement>,
      private readonly svgIconService: SvgIconService) {

  }

  public ngOnInit() {

  }

  private fetchSvg(name: string) {
    this.svgIconService.getSvg(name)
      .pipe(tap(() => this.elementRef.nativeElement.innerHTML = ''))
      .pipe(tap(svgElement => this.elementRef.nativeElement.appendChild(svgElement)))
      .subscribe();
  }

}
