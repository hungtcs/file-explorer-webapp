import { FileService } from '../../../../services';
import { ActivatedRoute } from '@angular/router';
import { tap, mergeMap, map } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'fe-picture-viewer',
  styleUrls: ['./viewer.component.scss'],
  templateUrl: './viewer.component.html',
})
export class ViewerComponent implements OnInit, OnDestroy {
  public url: SafeResourceUrl;
  public objectURL: string;

  constructor(
      private readonly domSanitizer: DomSanitizer,
      private readonly fileService: FileService,
      private readonly activatedRoute: ActivatedRoute) {

  }

  public ngOnInit() {
    console.log(this.activatedRoute.parent.snapshot.params);

    this.activatedRoute.paramMap
      .pipe(mergeMap((paramMap) => this.fileService.downloadFile(paramMap.get('path'))))
      .pipe(map(data => URL.createObjectURL(data)))
      .pipe(tap(url => this.objectURL = url))
      .pipe(tap(url => this.url = this.domSanitizer.bypassSecurityTrustResourceUrl(url)))
      .subscribe();
  }

  public ngOnDestroy() {
    URL.revokeObjectURL(this.objectURL);
  }


}
