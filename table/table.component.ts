import { user } from "./../models/user.model";
import { Observable, from } from "rxjs";
import { UserService } from "./../service/user.service";
import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import "rxjs/add/observable/of";
import { DataSource } from "@angular/cdk/collections";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  datasource = new UserDataSource(this.userservice);
  displayColumns = ["id", "name", "cost", "rate", "date", "gst"];
  UserService = "";

  private dataUrl =
    "https://test.1ounce.in/ounceAdmin/ounceSellOrders/?search=";
  private data2 = "https://test.1ounce.in/ounceAdmin/ounceSellOrders/";

  constructor(private http: HttpClient, private userservice: UserService) {}
  dataInfo = [];
  datasearchInfo = [];

  search(data) {
    this.http.get<any>(`${this.dataUrl}${data}`).subscribe(users => {
      this.datasearchInfo = users.results;
      console.log(users.results);
      console.log(data);
    });
  }
  dataApi(data2) {
    this.http.get<any>(`${this.data2}`).subscribe(user => {
      this.dataInfo = user.results;
    });
  }

  ngOnInit() {
    // this.http.get<any>(this.data2).subscribe(data => {
    //   this.dataInfo = data.results;
    // });
  }
}
export class UserDataSource extends DataSource<any> {
  constructor(private userservice: UserService) {
    super();
  }
  connect(): Observable<user[]> {
    return this.userservice.getuser();
  }
  disconnect() {}
}
