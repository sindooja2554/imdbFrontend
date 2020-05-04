import { Component, OnInit } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { Router } from "@angular/router";

import { Movie } from "../../model/movie/movie";
import { Actor } from "../../model/actor/actor";
import { Producer } from "../../model/producer/producer";

import { AddNewActorComponent } from "../add-new-actor/add-new-actor.component";
import { AddNewProducerComponent } from "../add-new-producer/add-new-producer.component";
import { AddPosterComponent } from "../add-poster/add-poster.component";

import { DataService } from "../../services/data/data.service";
import { MovieService } from "../../services/movie/movie.service";

@Component({
  selector: "app-add-new-movies",
  templateUrl: "./add-new-movies.component.html",
  styleUrls: ["./add-new-movies.component.scss"],
})
export class AddNewMoviesComponent implements OnInit {
  movie: Movie = new Movie();
  producerDetails: Producer = new Producer();
  actorDetails: Actor = new Actor();

  constructor(
    public dialog: MatDialog,
    private data: DataService,
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit() {
    // this.data.actorNewDetails.subscribe(
    //   (details) => (this.actorDetails = details)
    // );
    this.data.actorNewDetails.subscribe((details) => {
      if (details.name !== undefined) {
        if (details.name.length !== 0) {
          this.movie.actors.push(details);
          console.log(this.movie.actors);
        }
      }
    });
    this.data.producerNewDetails.subscribe(
      (details) => (this.producerDetails = details)
    );
  }

  openDialog(): void {
    this.dialog.open(AddNewActorComponent);
  }

  openDialogTooAddProducer() {
    this.dialog.open(AddNewProducerComponent);
  }

  openDialogTooAddPoster() {
    this.dialog.open(AddPosterComponent);
  }

  save() {
    console.log("actors---------------->", this.movie.actors);
    // this.movie.actors.push(this.actorDetails);
    this.movie.producer = this.producerDetails;
    console.log("movie-------------------->", this.movie);
    this.movieService.addMovie(this.movie).subscribe((result: any) => {
      console.log("result---------------------->", result.data);
    });
  }

  cancel() {
    this.router.navigate(["home/movie"]);
  }
}
