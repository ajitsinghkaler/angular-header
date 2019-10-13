import { Component, OnInit } from "@angular/core";
import { NavbarService } from "src/app/service/toolbar/navbar.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  navbarElements;
  iconClass: String;
  navbarClass: String;

  constructor(public navbarData: NavbarService) {}

  ngOnInit() {
    this.iconClass = "fa-bars";
    this.navbarClass="navbar";

    this.navbarData.getNavData().then(element => {
      this.navbarElements = element;
    });
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
