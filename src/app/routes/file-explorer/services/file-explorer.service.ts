import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileCarte } from '../models/file-carte';

@Injectable()
export class FileExplorerService {

  constructor(
      private readonly http: HttpClient) {

  }

  public getFile(path: string) {
    return this.http.get<FileCarte>(`/api/file-traversal/${ encodeURIComponent(path) }`);
  }


}
