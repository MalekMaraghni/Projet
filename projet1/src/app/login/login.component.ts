import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup ;

  constructor(private auth: AuthService ) {}

  ngOnInit(): void {
    this.loginForm = this.createFormGroup();
  }
  createFormGroup(): FormGroup {
    return new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [ Validators.required,Validators.minLength(5),  ]),
    });
  }
  
login(): void {
 // console.log(this.loginForm.value);
    this.auth.login(this.loginForm.value.email, this.loginForm.value.password).subscribe();
  }
  
}