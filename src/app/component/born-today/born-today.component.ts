import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data/data.service";

@Component({
  selector: "app-born-today",
  templateUrl: "./born-today.component.html",
  styleUrls: ["./born-today.component.scss"],
})
export class BornTodayComponent implements OnInit {
  actors: Array<any> = [];
  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.bornTodayActorDetails.subscribe(
      (details) => (this.actors = details)
    );
  }
}
