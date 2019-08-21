import cookies from 'browser-cookies';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

@Injectable()
export class CSRFTokenInterceptor implements HttpInterceptor {

  constructor() {

  }

  public intercept(request: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {
    const newRequest = request.clone({
      setHeaders: {
        'CSRF-TOKEN': cookies.get('_csrf'),
      },
    });
    return handler.handle(newRequest);
  }

}
