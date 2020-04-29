import { Component, OnInit } from "@angular/core";
import { User } from "../../model/user/user";
import { FormControl, Validators } from "@angular/forms";
import { UserService } from "../../services/user/user.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router, Params } from "@angular/router";

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.component.html",
  styleUrls: ["./reset-password.component.scss"],
})
export class ResetPasswordComponent implements OnInit {
  hide: Boolean = true;
  resetData: User = new User();
  password: any = new FormControl("", [
    Validators.required,
    Validators.pattern(
      /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
    ),
  ]);

  private params: Params;
  private token: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private user: UserService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      console.log("token", params.token);
      localStorage.setItem("token", params.token);
    });
  }

  getPasswordErrorMsg() {
    return this.password.hasError("required")
      ? "You must enter a value"
      : this.password.hasError("pattern")
      ? "Please enter only character string"
      : "";
  }

  save() {
    console.log("data", this.resetData);
    this.user.reset(this.resetData).subscribe(
      (result) => {
        console.log("response", result);
        this.router.navigate(["login"]);
        this._snackBar
          .open("Reset Password Successful", "close")
          ._dismissAfter(2000);
      },
      (err) => {
        console.log("error", err);
        // alert(err.error.message);
        this._snackBar.open(err, "close")._dismissAfter(2000);
      }
    );
  }
}
