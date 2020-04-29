import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user/user.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: "app-verify-user",
  templateUrl: "./verify-user.component.html",
  styleUrls: ["./verify-user.component.scss"],
})
export class VerifyUserComponent implements OnInit {
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

    this.user.verify().subscribe(
      (result) => {
        console.log("response", result);
        this.router.navigate(["login"]);
        this._snackBar.open("Verified Successful", "close")._dismissAfter(2000);
      },
      (err) => {
        console.log("error", err.error);
        // alert(err.error.message);
        this._snackBar.open(err.error, "close")._dismissAfter(2000);
      }
    );
  }
}
