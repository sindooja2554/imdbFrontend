import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"],
})
export class ToolbarComponent implements OnInit {
  opened: boolean = false;
  panelOpenState: boolean = false;
  token: string;
  constructor(private router: Router) {}

  ngOnInit() {
    this.token = localStorage.getItem("token");
    console.log(this.token);
  }

  addMovie() {
    console.log("Add movies");
    this.router.navigate(["home/addmovies"]);
  }
}
