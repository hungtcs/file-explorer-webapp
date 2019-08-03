import moment from 'moment';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FileCarte } from '../../models/file-carte';

@Component({
  selector: 'fe-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss'],
})
export class FileListComponent implements OnInit {

  @Input()
  public fileCartes: Array<FileCarte>;

  @Output()
  public fileClick: EventEmitter<FileCarte> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public getFormattedString(time: number) {
    return moment(time).format('YYYY/MM/DD HH:MM');
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
