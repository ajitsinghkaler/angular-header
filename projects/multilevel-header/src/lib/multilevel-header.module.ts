import { NgModule } from "@angular/core";
import { MultilevelHeaderComponent } from "./multilevel-header.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [MultilevelHeaderComponent, NavbarComponent],
  imports: [BrowserModule],
  exports: [MultilevelHeaderComponent]
})
export class MultilevelHeaderModule {}
