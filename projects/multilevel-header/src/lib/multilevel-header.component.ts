import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ng-multilevel-header',
  templateUrl: './multilevel-header.component.html',
  styleUrls: ['./multilevel-header.component.scss']
})
export class MultilevelHeaderComponent implements OnInit {
  @Input() navbarElements;
  iconClass: String;
  navbarClass: String;

  constructor() { }

  ngOnInit() {
    this.iconClass = "fa-bars";
    this.navbarClass="navbar";
  }

  changeIcon() {
    if (this.iconClass === "fa-bars") {
      this.iconClass = "fa-times";
      this.navbarClass="navbar navbar-md";
    } else {
      this.iconClass = "fa-bars"
      this.navbarClass="navbar";
    }
  }
}
