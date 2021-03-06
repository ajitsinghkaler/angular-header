import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import {MultilevelHeaderModule} from "multilevel-header";
@NgModule({
  declarations: [AppComponent, HeaderComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,MultilevelHeaderModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
