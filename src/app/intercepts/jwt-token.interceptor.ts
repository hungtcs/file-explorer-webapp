import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { LocalStorageService } from '../shared/public_api';
import { UNAUTHORIZED, NOT_FOUND } from 'http-status';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class JWTTokenInterceptor implements HttpInterceptor {

  constructor(
      private readonly router: Router,
      private readonly localStorageService: LocalStorageService) {

  }

  public intercept(request: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {
    if(request.params.get('non_jwt_verification')) {
      return handler.handle(request);
    }
    let next: Observable<HttpEvent<any>>;
    const token = this.localStorageService.getItem<string>('token');
    const payload = jwtDecode<any>(token);
    if(new Date(0).setUTCSeconds(payload.exp) < Date.now()) {
      next = throwError(new HttpErrorResponse({
        status: UNAUTHORIZED,
        statusText: 'UNAUTHORIZED',
      }));
    } else {
      const newRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${ token }`,
        },
      });
      next = handler.handle(newRequest);
    }
    return next.pipe(catchError((err) => {
      if(err instanceof HttpErrorResponse) {
        switch (err.status) {
          case UNAUTHORIZED: {
            this.router.navigate(['/passport']);
            break;
          }
          case NOT_FOUND: {
            this.router.navigate(['/']);
            break;
          }
          default: {
            break;
          }
        }
      }
      throw err;
    }));
  }

}
