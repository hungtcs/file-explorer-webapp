import jwtDecode from 'jwt-decode';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageService } from '../../../shared/public_api';

@Injectable()
export class HomeFolderGuard implements CanActivate  {

  constructor(
      private readonly router: Router,
      private readonly localStorageService: LocalStorageService) {

  }

  public canActivate(): boolean {
    const token = this.localStorageService.getItem<string>('token');
    const payload = jwtDecode<any>(token);
    this.router.navigate(['/explorer', payload.home]);
    return false;
  }

}
