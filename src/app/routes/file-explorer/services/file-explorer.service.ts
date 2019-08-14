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

  public deleteFiles(files: Array<string>) {
    return this.http.delete(`/api/file-traversal`, {
      params: {
        files: files,
      },
    });
  }

  public createFile(path: string, type: 'file'|'folder') {
    return this.http.put('/api/file-traversal', { path, type });
  }

  public copyFiles(sources: Array<string>, target: string) {
    return this.http.put(`/api/file-traversal/copy`, { sources, target });
  }


}
