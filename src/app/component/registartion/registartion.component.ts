import { Component, OnInit } from "@angular/core";
import { User } from "../../model/user/user";
import { FormControl, Validators } from "@angular/forms";
import { UserService } from "../../services/user/user.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Component({
  selector: "app-registartion",
  templateUrl: "./registartion.component.html",
  styleUrls: ["./registartion.component.scss"],
})
export class RegistartionComponent implements OnInit {
  register: User = new User();
  hide: Boolean = true;
  hidden: Boolean = true;
  firstName: any = new FormControl("", [
    Validators.required,
    Validators.pattern("^[A-Za-z]{3,30}$"),
  ]);
  lastName: any = new FormControl("", [
    Validators.required,
    Validators.pattern("^[a-zA-Z ]*$"),
    Validators.minLength(3),
  ]);
  email: any = new FormControl("", [Validators.required, Validators.email]);
  password: any = new FormControl("", [
    Validators.required,
    Validators.pattern(
      /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
    ),
  ]);
  confirmPassword: any = new FormControl("", [
    Validators.required,
    Validators.pattern(
      /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
    ),
  ]);

  constructor(
    private user: UserService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  getErrorMessage() {
    return this.email.hasError("required")
      ? "You must enter a value"
      : this.email.hasError("email")
      ? "Not a valid email "
      : "";
  }

  getFirstNameErrorMsg() {
    return this.firstName.hasError("required")
      ? "You must enter a value"
      : this.firstName.hasError("pattern")
      ? "Please enter name with minimum 3 characters"
      : "";
  }

  getLastNameErrorMsg() {
    return this.lastName.hasError("required")
      ? "You must enter a value"
      : this.lastName.hasError("pattern")
      ? "Please enter only character string"
      : this.lastName.hasError("minLength")
      ? "Please enter more than 2 characters"
      : "";
  }

  getPasswordErrorMsg() {
    return this.password.hasError("required")
      ? "You must enter a value"
      : this.password.hasError("pattern")
      ? "Use 8 or more characters with a mix of letters, numbers & symbols"
      : "";
  }

  getConfirmPasswordErrorMsg() {
    return this.confirmPassword.hasError("required")
      ? "You must enter a value"
      : this.confirmPassword.hasError("pattern")
      ? "Use 8 or more characters with a mix of letters, numbers & symbols"
      : "";
  }

  passwordMatching() {
    if (this.password.value !== this.confirmPassword.value) {
      return false;
    } else {
      return true;
    }
  }

  submit() {
    console.log("data", this.register);
    this.user.registration(this.register).subscribe(
      (result) => {
        console.log("response", result);
        this.router.navigate(["login"]);
        this._snackBar
          .open("Registration successfull", "close")
          ._dismissAfter(2000);
        this._snackBar.open("Verify your email", "close")._dismissAfter(2000);
      },
      (err) => {
        console.log("error", err.error);
        this._snackBar.open(err.message, "close")._dismissAfter(2000);
      }
    );
  }
}
