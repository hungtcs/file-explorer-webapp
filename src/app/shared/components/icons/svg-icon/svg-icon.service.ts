import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SvgIconService {
  private readonly svgCache = new Map<string, SVGSVGElement>();

  constructor(
      private readonly http: HttpClient) {

  }

  public getSvg(name: string) {
    if(this.svgCache.get(name)) {
      return of(this.svgCache.get(name).cloneNode(true));
    } else {
      return this.http.get(`/assets/icons/${ name }.svg`, { responseType: 'text', params: { 'non_jwt_verification': 'true' } })
        .pipe(map(svgSource => new DOMParser().parseFromString(svgSource, 'image/svg+xml')))
        .pipe(map(document => document.querySelector('svg')))
        .pipe(tap(svgElement => this.svgCache.set(name, svgElement)));
    }
  }

}
