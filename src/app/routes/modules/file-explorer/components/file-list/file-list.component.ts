import { FileCarte } from '../../../../../models/file-carte';
import { FILE_LIST_MODES } from '../../../../../shared/public_api';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit, Input, EventEmitter, Output, HostListener } from '@angular/core';

@Component({
  selector: 'fe-file-list',
  styleUrls: ['./file-list.component.scss'],
  templateUrl: './file-list.component.html',
  animations: [
    trigger('checkboxStatus', [
      state('show', style({ })),
      state('hidden', style({
        width: '0px',
      })),
      transition('hidden => show', animate('200ms 0ms ease-in')),
      transition('show => hidden', animate('200ms 200ms ease-in')),
    ]),
  ],
})
export class FileListComponent implements OnInit {
  private _mode: FILE_LIST_MODES;
  private _selectedFileCartes: Array<FileCarte> = new Array();

  @Input()
  get mode() {
    return this._mode;
  }
  set mode(mode) {
    this._mode = mode;
    this.modeChange.emit(this.mode);
  }

  @Output()
  public modeChange: EventEmitter<string> = new EventEmitter();

  @Output()
  public selectModeChange: EventEmitter<boolean> = new EventEmitter();

  @Input()
  get selectedFileCartes() {
    return this._selectedFileCartes;
  }
  set selectedFileCartes(selectedFileCartes) {
    this._selectedFileCartes = selectedFileCartes;
    this.selectedFileCartesChange.emit(this.selectedFileCartes);
  }

  @Output()
  public selectedFileCartesChange: EventEmitter<Array<FileCarte>> = new EventEmitter();

  @Input()
  public fileCartes: Array<FileCarte>;

  @Output()
  public fileCarteTap: EventEmitter<FileCarte> = new EventEmitter();

  constructor() {

  }

  public ngOnInit() {

  }

  @HostListener('contextmenu', ['$event'])
  public onContextMenu(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  public onFileCarteTap(fileCarte: FileCarte) {
    if(this.mode === 'select') {
      if(this.selectedFileCartes.includes(fileCarte)) {
        this.selectedFileCartes.splice(this.selectedFileCartes.indexOf(fileCarte), 1);
        if(this.selectedFileCartes.length === 0) {
          this.mode = 'default';
        }
      } else {
        this.selectedFileCartes.push(fileCarte);
      }
    } else {
      this.fileCarteTap.emit(fileCarte);
    }
  }

  public onFileCarteLongPress(fileCarte: FileCarte, _event: HammerInput) {
    if(this.mode === 'select') {
      return;
    }
    this.mode = 'select';
    this.selectedFileCartes.push(fileCarte);
  }

  public selectAll() {
    this.selectedFileCartes = this.fileCartes;
  }

  public getImageType(fileCarte: FileCarte) {
    if(fileCarte.directory) {
      return 'folder';
    }
    if(fileCarte.name.endsWith('.png') || fileCarte.name.endsWith('.jpg') || fileCarte.name.endsWith('.git') || fileCarte.name.endsWith('.jpeg')) {
      return 'image_file';
    }
    if(fileCarte.name.endsWith('.mp4') || fileCarte.name.endsWith('.webm') || fileCarte.name.endsWith('.ogg')) {
      return 'video_file';
    }
    return 'file';
  }

}
