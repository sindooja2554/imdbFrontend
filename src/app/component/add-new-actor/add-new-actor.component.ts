import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Actor } from "../../model/actor/actor";
import { DataService } from "../../services/data/data.service";

// export interface DialogData {
//   name: "";
//   dob: "";
//   bio: "";
//   sex: "";
// }

@Component({
  selector: "app-add-new-actor",
  templateUrl: "./add-new-actor.component.html",
  styleUrls: ["./add-new-actor.component.scss"],
})
export class AddNewActorComponent implements OnInit {
  actor: Actor = new Actor();

  constructor(
    public dialogRef: MatDialogRef<AddNewActorComponent>,
    // @Inject(MAT_DIALOG_DATA) public dialogData: DialogData,
    private data: DataService
  ) {}

  ngOnInit() {
    console.log("in ngoninit");
    this.data.actorNewDetails.subscribe((details) => (this.actor = details));
  }

  save() {
    console.log("value------------------------->", this.actor);
    this.data.actor(this.actor);
    this.dialogRef.close();
    this.actor = {
      name: "",
      sex: "",
      bio: "",
      dob: "",
      _id: "",
    };
    this.data.actor(this.actor);
  }

  cancel() {
    this.dialogRef.close();
  }
}
