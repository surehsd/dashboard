import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";

@Component({
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(  private router: Router) {}

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    //this.router.navigate(["auth/dashboard"]);
    this.router.navigate(["starter"]);
    
    // if (form.invalid) {
    //   return;
    // }
    // this.isLoading = true;
    // this.authService.login(form.value.email, form.value.password);
  }

  ngOnDestroy() {
  }
}
