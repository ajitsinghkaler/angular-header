import {
  Component,
  OnInit,
  Input,
  HostListener,
  ElementRef
} from "@angular/core";

@Component({
  selector: "ng-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  @Input() navbar;
  showChildMenu: boolean = false;
  constructor(private eRef: ElementRef) {}
  @HostListener("document:click", ["$event"])
  clickout(event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.showChildMenu = false;
    }
  }

  ngOnInit() {
    // console.log(this.navbar);
  }

  clicked() {
    this.showChildMenu = !this.showChildMenu;
  }
}
