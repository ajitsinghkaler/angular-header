import { Injectable } from "@angular/core";
import { ApiService } from "../api/api.service";

@Injectable({
  providedIn: "root"
})
export class NavbarService {
  constructor(public api: ApiService) {}

  getNavData() {
    return new Promise((resolve, reject) => {
      this.api
        .get(
          "dabalyan/eeacdd4fd86b4a844f48a75d134d9f10/raw/035f6e2db6c97ff3bf1050df6497840ba90cae3d/menuData.json"
        )
        .subscribe(elements => {
          resolve(elements);
        });
    });
  }
}
