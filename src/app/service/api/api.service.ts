import { Injectable } from "@angular/core";
import { ENV } from "../../config/env";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  url = ENV.API_URL  
  constructor(public http: HttpClient) {}

  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {};
    }
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params = reqOpts.params.append(k, params[k]);
      }
    }
    return this.http.get(this.url + "/" + endpoint, reqOpts);
  }
}
