import { FileCarte } from '../models/file-carte';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FileExplorerService {

  constructor(
      private readonly http: HttpClient) {

  }

  public getFile(path: string) {
    return this.http.get<FileCarte>(`/api/explorer/${ encodeURIComponent(path) }`);
  }

  public downloadFile(path: string) {
    return this.http.get(`/api/explorer/file/${ encodeURIComponent(path) }`, {
      responseType: 'blob',
    });
  }

  public deleteFiles(files: Array<string>) {
    return this.http.delete(`/api/explorer`, {
      params: {
        files
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

  public uploadFiles(files: Array<File> | FileList, target: string) {
    const formData = new FormData();
    formData.append('target', target);
    Array.from(files).forEach(file => {
      formData.append('files', file);
    });
    return this.http.post<any>('/api/explorer/upload', formData);
  }

}
