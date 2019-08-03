import { Component, OnInit } from '@angular/core';

@Component({
  host: {
    '[class.tcs-app-bar__row]': 'true',
  },
  selector: 'tcs-app-bar-row',
  styleUrls: ['./app-bar-row.component.scss'],
  templateUrl: './app-bar-row.component.html',
})
export class AppBarRowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
