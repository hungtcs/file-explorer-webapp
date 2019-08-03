import { Component, Input, ElementRef, ViewChild, AfterViewInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'fe-path-breadcrumb',
  styleUrls: ['./path-breadcrumb.component.scss'],
  templateUrl: './path-breadcrumb.component.html',
})
export class PathBreadcrumbComponent implements AfterViewInit {
  private _path: string;
  private _panStartTranslateX: number = null;
  public slices: Array<string>;
  public panning: boolean = false;
  public translateX: number = 0;

  @ViewChild('wrapper', { read: ElementRef, static: true })
  public wrapper: ElementRef<HTMLDivElement>;

  @ViewChild('container', { read: ElementRef, static: true })
  public container: ElementRef<HTMLDivElement>;

  @Output()
  public sliceClick: EventEmitter<string> = new EventEmitter();

  @Input()
  get path() {
    return this._path;
  }
  set path(path: string) {
    this._path = path;
    this.slices = ['', ...this.path.split('/').filter(slice => slice !== '')];
    setTimeout(() => {
      this.checkTranslateX();
    });
  }

  get wrapperWidth() {
    return this.wrapper.nativeElement.clientWidth;
  }

  get containerWidth() {
    return this.container.nativeElement.clientWidth;
  }

  constructor() {

  }

  public ngAfterViewInit() {
    window.getComputedStyle(this.wrapper.nativeElement).width;
    setTimeout(() => {
      this.checkTranslateX();
    });
  }

  public onWrapperPan(event: any) {
    if(event.type === 'pansend') {
      this.panning = false;
    } else if(event.type === 'panmove') {
      let translateX = this._panStartTranslateX + event.deltaX;
      if(translateX > 0) {
        translateX = 0;
      } else if(translateX < this.getTranslateX()) {
        translateX = this.getTranslateX();
      }
      this.translateX = translateX;
    } else if(event.type === 'panstart') {
      this.panning = true;
      this._panStartTranslateX = this.translateX;
    } else {
      this.panning = false;
    }
  }

  public onSliceClick(index: number) {
    if(index === this.slices.length - 1) {
      return;
    } else {
      const path = index === 0 ? '/' : this.slices.slice(0, index+1).join('/');
      this.sliceClick.emit(path);
    }
  }

  private checkTranslateX() {
    const translateX = this.getTranslateX();
    if(this.translateX !== translateX) {
      this.translateX = translateX;
    }
  }

  private getTranslateX() {
    return this.containerWidth - this.wrapperWidth;
  }

}
