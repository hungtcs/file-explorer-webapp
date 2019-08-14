import { Component, OnInit } from '@angular/core';

@Component({
  host: {
    '[class.tcs-list-item]': 'true',
  },
  selector: 'tcs-list-item',
  styleUrls: ['./list-item.component.scss'],
  templateUrl: './list-item.component.html',
})
export class ListItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
