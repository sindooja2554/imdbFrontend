import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data/data.service";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { AddNewActorComponent } from "../add-new-actor/add-new-actor.component";
import { MovieService } from "../../services/movie/movie.service";
import { AddNewProducerComponent } from "../add-new-producer/add-new-producer.component";

@Component({
  selector: "app-update-movie-details",
  templateUrl: "./update-movie-details.component.html",
  styleUrls: ["./update-movie-details.component.scss"],
})
export class UpdateMovieDetailsComponent implements OnInit {
  movieDetails: Array<any>;
  constructor(
    private data: DataService,
    public dialog: MatDialog,
    private movie: MovieService
  ) {}

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

  openDialogTooAddProducer() {
    this.dialog.open(AddNewProducerComponent);
  }

  updateMovieDetails(movieDetails): void {
    console.log("data for updating==============>", movieDetails);
    this.movie.update(movieDetails).subscribe((result: any) => {
      console.log("data after updation", result);
    });
  }
}
