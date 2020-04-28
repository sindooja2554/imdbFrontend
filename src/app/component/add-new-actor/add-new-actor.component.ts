import { Component, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Actor } from "../../model/actor/actor";

@Component({
  selector: "app-add-new-actor",
  templateUrl: "./add-new-actor.component.html",
  styleUrls: ["./add-new-actor.component.scss"],
})
export class AddNewActorComponent implements OnInit {
  actor: Actor = new Actor();

  constructor(public dialogRef: MatDialogRef<AddNewActorComponent>) {}

  ngOnInit() {}

  save() {
    console.log("value------------------------->", this.actor);
  }
}
