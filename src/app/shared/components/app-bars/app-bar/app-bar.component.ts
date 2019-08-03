import { Component, OnInit } from '@angular/core';

@Component({
  host: {
    '[class.tcs-app-bar]': 'true',
  },
  selector: 'tcs-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
