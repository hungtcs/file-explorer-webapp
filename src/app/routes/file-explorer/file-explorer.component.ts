import { FileCarte } from './models/file-carte';
import { tap, mergeMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { FileExplorerService } from './services/file-explorer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'fe-file-explorer',
  templateUrl: './file-explorer.component.html',
  styleUrls: ['./file-explorer.component.scss'],
})
export class FileExplorerComponent implements OnInit {
  public fileCarte: FileCarte;
  public path: string;

  constructor(
      private readonly router: Router,
      private readonly activatedRoute: ActivatedRoute,
      private readonly fileExplorerService: FileExplorerService) {

  }

  public ngOnInit() {
    this.activatedRoute.paramMap
      .pipe(tap(paramMap => this.path = paramMap.get('path')))
      .pipe(mergeMap(() => this.fetchFiles(this.path)))
      .pipe(tap((data) => {
        if(data.directory) {
          data.files = data.files.sort((a, b) => {
            return b.name.localeCompare(a.name);
          });
          data.files = data.files.sort(fileCarte => {
            return fileCarte.directory ? -1 : 1;
          });
        }
        this.fileCarte = data;
      }))
      .subscribe();
  }

  public onBreadcrumbSliceClick(path: string) {
    this.router.navigate(['..', `${ path }`], {
      relativeTo: this.activatedRoute,
    });
  }

  public onFileClick(fileCarte: FileCarte) {
    if(fileCarte.directory) {
      this.router.navigate(['..', `${ this.path }/${ fileCarte.name }`], {
        relativeTo: this.activatedRoute,
      });
    } else {

    }
  }

  private fetchFiles(path: string) {
    return this.fileExplorerService.getFile(path);
  }

}
