import { Component, Input, ElementRef, ViewChild, AfterViewInit, EventEmitter, Output, AfterViewChecked, NgZone, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'fe-path-breadcrumb',
  styleUrls: ['./path-breadcrumb.component.scss'],
  templateUrl: './path-breadcrumb.component.html',
})
export class PathBreadcrumbComponent implements AfterViewInit, AfterViewChecked {
  private _path: string;
  private _panStartTranslateX: number = null;
  public slices: Array<string>;
  public panning: boolean = false;
  public wrapperTranslate: number = 0;

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
    this.panning = false;
    if(this.path) {
      this.slices = ['', ...this.path.split('/').filter(slice => slice !== '')];
    }
  }

  get translateX() {
    return this.containerWidth - this.wrapperWidth;
  }

  get wrapperWidth() {
    return this.wrapper.nativeElement.clientWidth;
  }

  get containerWidth() {
    return this.container.nativeElement.clientWidth;
  }


  constructor(
      private readonly ngZone: NgZone,
      private readonly changeDetectorRef: ChangeDetectorRef) {

  }

  public ngAfterViewInit() {

  }

  public ngAfterViewChecked() {
    this.ngZone.runOutsideAngular(() => {
      if(!this.panning) {
        if(this.wrapperTranslate !== this.translateX) {
          this.wrapperTranslate = this.translateX;
          this.changeDetectorRef.detectChanges();
        }
      }
    });
  }

  public onWrapperPan(event: any) {
    if(event.type === 'pansend') {
      // this.panning = false;
    } else if(event.type === 'panmove') {
      let translateX = this._panStartTranslateX + event.deltaX;
      if(translateX > 0) {
        translateX = 0;
      } else if(translateX < this.translateX) {
        translateX = this.translateX;
      }
      this.wrapperTranslate = translateX;
    } else if(event.type === 'panstart') {
      this.panning = true;
      this._panStartTranslateX = this.wrapperTranslate;
    } else {
      // this.panning = false;
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

}
