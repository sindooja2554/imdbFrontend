import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data/data.service";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { AddNewActorComponent } from "../add-new-actor/add-new-actor.component";

@Component({
  selector: "app-update-movie-details",
  templateUrl: "./update-movie-details.component.html",
  styleUrls: ["./update-movie-details.component.scss"],
})
export class UpdateMovieDetailsComponent implements OnInit {
  movieDetails: Array<any>;
  constructor(private data: DataService, public dialog: MatDialog) {}

  ngOnInit() {
    this.data.updateDetails.subscribe(
      (details) => (this.movieDetails = details)
    );
    console.log("this.movieDetails=============>", this.movieDetails);
  }

  openDialog(): void {
    // const dialogRef =
    this.dialog.open(AddNewActorComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }
}
