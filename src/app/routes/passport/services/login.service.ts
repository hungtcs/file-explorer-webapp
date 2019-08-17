import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
      private readonly http: HttpClient) {

  }

  public login(username: string, password: string) {
    return this.http.post<any>('/api/auth', { username, password }, {
      params: {
        'non_jwt_verification': `${ true }`,
      },
    });
  }


}
