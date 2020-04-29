import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { User } from "../../model/user/user";
import { UserService } from "../../services/user/user.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.scss"],
})
export class ForgotPasswordComponent implements OnInit {
  forgotData: User = new User();
  email: any = new FormControl("", [Validators.required, Validators.email]);
  constructor(private user: UserService, private _snackBar: MatSnackBar) {}

  ngOnInit() {}

  getErrorMessage() {
    return this.email.hasError("required")
      ? "You must enter a value"
      : this.email.hasError("email")
      ? "Not a valid email "
      : "";
  }

  continue() {
    console.log("data", this.forgotData);
    this.user.forgot(this.forgotData).subscribe(
      (result) => {
        console.log("response", result);
        this._snackBar.open("success", "close")._dismissAfter(2000);
      },
      (err) => {
        console.log("error", err.error.message);
        alert(err.error.message);
        this._snackBar.open(err.error, "close")._dismissAfter(2000);
      }
    );
  }
}
