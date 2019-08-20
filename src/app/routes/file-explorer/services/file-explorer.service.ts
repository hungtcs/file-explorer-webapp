import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileCarte } from '../models/file-carte';

@Injectable()
export class FileExplorerService {

  constructor(
      private readonly http: HttpClient) {

  }

  public getFile(path: string) {
    return this.http.get<FileCarte>(`/api/explorer/${ encodeURIComponent(path) }`);
  }

  public deleteFiles(files: Array<string>) {
    return this.http.delete(`/api/explorer`, {
      params: {
        files: files,
      },
    });
  }

  public createFile(path: string, type: 'file'|'folder') {
    return this.http.put('/api/explorer', { path, type });
  }

  public copyFiles(sources: Array<string>, target: string) {
    return this.http.put(`/api/explorer/copy`, { sources, target });
  }

  public moveFiles(sources: Array<string>, target: string) {
    return this.http.put(`/api/explorer/move`, { sources, target });
  }

}
