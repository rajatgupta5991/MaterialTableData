import { user } from "../models/user.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private api = ": https://test.1ounce.in/ounceAdmin/ounceSellOrders/";
  constructor(private http: HttpClient) {}
  getuser(): Observable<user[]> {
    return this.http.get<any>(this.api);
  }
}
