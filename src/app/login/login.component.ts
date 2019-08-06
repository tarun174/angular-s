import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { switchMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private httpClient: HttpClient, private router: Router) {}

  userName: string;
  password: string;

  login() {
    this.httpClient
      .post("/api/login", {
        userName: this.userName,
        password: this.password
      })
      .pipe(
        catchError(err => {
          alert("Invalid credentials");
          throw err;
        })
      )
      .subscribe(_ => {
        this.router.navigate(["home"]);
      });
  }

  ngOnInit() {}
}
