import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fe-extra-apps',
  templateUrl: './extra-apps.component.html',
  styleUrls: ['./extra-apps.component.scss'],
})
export class ExtraAppsComponent implements OnInit {

  constructor(
      public readonly location: Location) {

  }

  ngOnInit() {
  }

}
