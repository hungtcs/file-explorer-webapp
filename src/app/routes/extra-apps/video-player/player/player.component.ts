import { tap } from 'rxjs/operators';
import { join } from 'path';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'fe-video-player',
  styleUrls: ['./player.component.scss'],
  templateUrl: './player.component.html',
})
export class PlayerComponent implements OnInit {
  public videoSrc: SafeResourceUrl;

  constructor(
      private readonly domSanitizer: DomSanitizer,
      private readonly activatedRoute: ActivatedRoute) {

  }

  public ngOnInit() {
    this.activatedRoute.paramMap
      .pipe(tap(paramMap => this.videoSrc = this.domSanitizer.bypassSecurityTrustResourceUrl(join('/api/video-stream', paramMap.get('path')))))
      .subscribe();
  }

  public ngOnDestroy() {

  }

}
