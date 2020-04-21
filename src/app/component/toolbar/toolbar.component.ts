import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"],
})
export class ToolbarComponent implements OnInit {
  opened: boolean = false;
  constructor() {}

  ngOnInit() {}

  // toggle() {
  //   this.clicked = true;
  // }
}
