import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {

  public setItem(key: string, value: any): void {
    let json = JSON.stringify(value);
    window.localStorage.setItem(key, json);
  }

  public getItem<T>(key: string): T {
    let value: string = window.localStorage.getItem(key);
    if(value !== null) {
      try {
        return JSON.parse(value) as T;
      } catch (err) {
        return null;
      }
    } else {
      return null;
    }
  }

  public removeItem(key: string): void {
    window.localStorage.removeItem(key);
  }

  public clear(): void {
    window.localStorage.clear();
  }

  get length(): number {
    return window.localStorage.length;
  }

}
