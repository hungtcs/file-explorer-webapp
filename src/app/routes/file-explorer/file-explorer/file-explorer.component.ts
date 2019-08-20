import { join } from 'path';
import { FileCarte } from '../models/file-carte';
import { Component, OnInit } from '@angular/core';
import { FileExplorerService } from '../services/file-explorer.service';
import { DefaultMenuComponent } from '../components/default-menu/default-menu.component';
import { ActivatedRoute, Router } from '@angular/router';
import { tap, mergeMap, delay, finalize } from 'rxjs/operators';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { DialogService, LoadingService, PopoverService, FILE_LIST_MODES } from '../../../shared/public_api';

/**
 * 文件浏览器组件
 *
 * @author 鸿则<hungtcs@163.com>
 * @export
 * @class FileExplorerComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'fe-file-explorer',
  templateUrl: './file-explorer.component.html',
  styleUrls: ['./file-explorer.component.scss'],
  animations: [
    trigger('selectionToolbar', [
      state('true', style({
        top: '0px',
        width: '100%',
        position: 'absolute',
      })),
      state('false', style({
        top: '-56px',
        width: '100%',
        position: 'absolute',
      })),
      transition('false <=> true', [
        animate('200ms'),
      ]),
    ]),
    trigger('bottomAppBar', [
      state('true', style({
        'transform': 'translateY(0%)',
      })),
      state('false', style({
        'transform': 'translateY(100%)',
      })),
      transition('*<=>*', [
        animate('200ms'),
      ]),
    ]),
  ]
})
export class FileExplorerComponent implements OnInit {
  private menuPopover: any;

  /**
   * 保存复制或者移动已经选中的文件
   *
   * @private
   * @type {Array<FileCarte>}
   * @memberof FileExplorerComponent
   */
  private chosenFileCartes: Array<FileCarte>;


  /**
   * 当前的文件夹对象
   *
   * @type {FileCarte}
   * @memberof FileExplorerComponent
   */
  public fileCarte: FileCarte;


  /**
   * 当前文件夹的路径
   *
   * @type {string}
   * @memberof FileExplorerComponent
   */
  public path: string;


  /**
   * 选择模式中实时选中的文件
   *
   * @type {Array<FileCarte>}
   * @memberof FileExplorerComponent
   */
  public selectedFileCartes: Array<FileCarte> = [];

  /**
   * 内容区域滚动的量
   *
   * @type {number}
   * @memberof FileExplorerComponent
   */
  public scrollCount: number = 0;

  /**
   * 页面上方部分向上的偏移量
   *
   * @type {number}
   * @memberof FileExplorerComponent
   */
  public topSectionTop: number = 0;

  public mode: FILE_LIST_MODES = 'default';

  constructor(
      private readonly router: Router,
      private readonly dialogService: DialogService,
      private readonly activatedRoute: ActivatedRoute,
      private readonly loadingService: LoadingService,
      private readonly popoverService: PopoverService,
      private readonly fileExplorerService: FileExplorerService) {

  }

  public ngOnInit() {
    this.menuPopover = this.popoverService.create({
      scrim: false,
      recluse: true,
      present: false,
      component: DefaultMenuComponent,
    });


    const loading = this.loadingService.create({ message: '正在读取文件列表' });
    this.activatedRoute.paramMap
      .pipe(tap(() => this.loadingService.show(loading)))
      .pipe(tap(paramMap => this.path = paramMap.get('path')))
      .pipe(mergeMap(() => {
        return this.fetchFiles(this.path)
          .pipe(delay(500))
          .pipe(tap(() => {
            if(this.mode === 'select') {
              this.mode = 'default';
            }
          }))
          .pipe(tap(() => this.selectedFileCartes = []))
          .pipe(tap((data) => this.fileCarte = data))
          .pipe(finalize(() => this.loadingService.hide(loading)));
      }))
      .subscribe();
  }


  /**
   * 内容区域滚动事件处理
   *
   * @author 鸿则<hungtcs@163.com>
   * @param {Event} event
   * @returns
   * @memberof FileExplorerComponent
   */
  public onContentScroll(event: Event) {
    if(this.mode === 'select') {
      return;
    }
    const scrollTop = (event.target as HTMLElement).scrollTop;
    const difference = this.scrollCount - scrollTop;
    let topSectionTop = this.topSectionTop;
    if(difference > 0) {
      if(topSectionTop < 0 && topSectionTop + difference < 0) {
        topSectionTop += difference;
      } else {
        topSectionTop = 0;
      }
    } else {
      if(topSectionTop > -56 && topSectionTop + difference > -56) {
        topSectionTop += difference;
      } else {
        topSectionTop = -56;
      }
    }
    this.topSectionTop = topSectionTop;
    this.scrollCount = scrollTop;
  }

  public onBreadcrumbSliceClick(path: string) {
    this.router.navigate(['..', `${ path }`], {
      relativeTo: this.activatedRoute,
    });
  }

  public onFileCarteTap(fileCarte: FileCarte) {
    if(fileCarte.directory) {
      this.router.navigate(['..', `${ this.path }/${ fileCarte.name }`], {
        relativeTo: this.activatedRoute,
      });
    } else if(fileCarte.name.endsWith('.mp4')) {
      window.open(`/api/video-stream/${ encodeURIComponent(`${ this.path }/${ fileCarte.name }`) }`);
    } else {
      window.open(`/api/file-traversal/file/${ encodeURIComponent(`${ this.path }/${ fileCarte.name }`) }`);
    }
  }

  public onCheckAllChange(checked: boolean) {
    if(checked) {
      this.selectedFileCartes = [...this.fileCarte.files];
    } else {
      this.mode = 'default';
      this.selectedFileCartes = [];
    }
  }

  public openMenuPopover(event: MouseEvent) {
    this.popoverService.present(this.menuPopover, event);
    event.stopPropagation();
    event.preventDefault();
  }

  public openCreateFolderPrompt() {
    this.dialogService.prompt({
      title: '新建文件夹',
      required: true,
    }).pipe(tap(data => {
        if(typeof(data) === 'string') {
          const loading = this.loadingService.create({
            scrim: true,
            message: '正在创建文件夹',
          });
          this.loadingService.show(loading);
          this.fileExplorerService.createFile(join(this.path, data), 'folder')
            .pipe(mergeMap(() => this.fetchFiles(this.path)))
            .pipe(delay(500))
            .pipe(tap(() => this.mode = this.mode === 'select' ? 'default' : this.mode))
            .pipe(tap(() => this.selectedFileCartes = []))
            .pipe(tap((data) => this.fileCarte = data))
            .pipe(finalize(() => this.loadingService.hide(loading)))
            .subscribe();
        }
      }))
      .subscribe();
  }

  public onDeleteButtonClick() {
    this.dialogService.confirm({
      title: '确认',
      message: '您确认删除选中的文件么？',
    }).pipe(tap((answer) => console.log(answer)))
      .pipe(tap((answer) => {
        if(answer) {
          this.deleteFiles(this.selectedFileCartes.map(fileCarte => join(this.path, fileCarte.name)));
        }
      }))
      .subscribe();
  }

  public onCopyButtonClick() {
    this.mode = 'copy';
    this.chosenFileCartes = [...this.selectedFileCartes].map(fileCarte => {
      fileCarte.absolutePath = join(this.path, fileCarte.name);
      return fileCarte;
    });
  }

  public onCopyToTargetButtonClick() {
    const loading = this.loadingService.create({
      scrim: true,
      message: '正在复制',
    });
    this.loadingService.show(loading);
    this.fileExplorerService.copyFiles(this.chosenFileCartes.map(fileCarte => fileCarte.absolutePath), this.path)
      .pipe(mergeMap(() => this.fetchFiles(this.path)))
      .pipe(delay(500))
      .pipe(tap(() => this.mode = 'default'))
      .pipe(tap(() => this.selectedFileCartes = []))
      .pipe(tap((data) => this.fileCarte = data))
      .pipe(finalize(() => this.loadingService.hide(loading)))
      .subscribe()
  }

  public onCopyCancelButtonClick() {
    this.mode = 'default';
    this.chosenFileCartes = null;
    this.selectedFileCartes = [];
  }

  public onMoveButtonClick() {
    this.mode = 'move';
    this.chosenFileCartes = [...this.selectedFileCartes].map(fileCarte => {
      fileCarte.absolutePath = `${ this.path }/${ fileCarte.name }`;
      return fileCarte;
    });
  }

  public onMoveToTargetButtonClick() {
    const loading = this.loadingService.create({
      scrim: true,
      message: '正在移动',
    });
    this.loadingService.show(loading);
    this.fileExplorerService.moveFiles(this.chosenFileCartes.map(fileCarte => fileCarte.absolutePath), this.path)
      .pipe(mergeMap(() => this.fetchFiles(this.path)))
      .pipe(delay(500))
      .pipe(tap(() => this.mode = 'default'))
      .pipe(tap(() => this.selectedFileCartes = []))
      .pipe(tap((data) => this.fileCarte = data))
      .pipe(finalize(() => this.loadingService.hide(loading)))
      .subscribe()
  }

  public onMoveCancelButtonClick() {
    this.mode = 'default';
    this.chosenFileCartes = null;
    this.selectedFileCartes = [];
  }

  private deleteFiles(files: Array<string>) {
    const loading = this.loadingService.create({
      scrim: true,
      message: '正在删除',
    });
    this.loadingService.show(loading);
    this.fileExplorerService.deleteFiles(files)
      .pipe(mergeMap(() => this.fetchFiles(this.path)))
      .pipe(delay(500))
      .pipe(tap(() => this.mode = 'default'))
      .pipe(tap(() => this.selectedFileCartes = []))
      .pipe(tap((data) => this.fileCarte = data))
      .pipe(finalize(() => this.loadingService.hide(loading)))
      .subscribe();
  }

  private fetchFiles(path: string) {
    return this.fileExplorerService.getFile(path)
      .pipe(tap((data) => {
        if(data.directory) {
          data.files = data.files.sort((a, b) => {
            if(a.directory && b.directory) {
              return a.name.localeCompare(b.name);
            } else if(a.directory || b.directory) {
              return b.directory ? 1 : -1;
            } else {
              b.name.localeCompare(a.name);
            }
          });
        }
        return data;
      }));
    }
}
