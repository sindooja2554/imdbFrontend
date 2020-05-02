import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../../services/data/data.service";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { AddNewActorComponent } from "../add-new-actor/add-new-actor.component";
import { AddNewProducerComponent } from "../add-new-producer/add-new-producer.component";
import { AddPosterComponent } from "../add-poster/add-poster.component";

import { MovieService } from "../../services/movie/movie.service";

import { Actor } from "../../model/actor/actor";
import { Movie } from "../../model/movie/movie";
import { Producer } from "../../model/producer/producer";

@Component({
  selector: "app-update-movie-details",
  templateUrl: "./update-movie-details.component.html",
  styleUrls: ["./update-movie-details.component.scss"],
})
export class UpdateMovieDetailsComponent implements OnInit {
  movieDetails: Movie = new Movie();
  actorDetails: Actor = new Actor();
  producerDetails: Producer = new Producer();
  length: number;
  selectedFile = null;
  constructor(
    private data: DataService,
    public dialog: MatDialog,
    private movie: MovieService,
    private router: Router
  ) {}

  ngOnInit() {
    this.data.updateDetails.subscribe(
      (details) => (this.movieDetails = details)
    );
    this.data.actorNewDetails.subscribe(
      (details) => (this.actorDetails = details)
    );
    this.data.producerNewDetails.subscribe(
      (details) => (this.producerDetails = details)
    );
  }

  uploadPoster() {
    this.dialog.open(AddPosterComponent, {
      data: { _id: this.movieDetails._id },
    });
  }

  openDialog(): void {
    this.dialog.open(AddNewActorComponent);
  }

  openDialogTooAddProducer() {
    this.dialog.open(AddNewProducerComponent);
  }

  updateMovieDetails(): void {
    console.log(Object.getOwnPropertyNames(this.actorDetails).length);
    if (Object.getOwnPropertyNames(this.actorDetails).length !== 0) {
      var search = this.search(
        this.movieDetails.actors,
        this.movieDetails.actors.length,
        this.actorDetails
      );
      this.length = this.movieDetails.actors.length + 1;
      if (search === false) {
        this.movieDetails.actors.push(this.actorDetails);
      }
    }
    if (Object.getOwnPropertyNames(this.producerDetails).length !== 0) {
      if (this.producerDetails.name !== this.movieDetails.producer.name) {
        this.movieDetails.producer = this.producerDetails;
      }
    }
    this.movie.update(this.movieDetails).subscribe((result: any) => {
      console.log(result.data);
      let key = btoa(this.movieDetails._id);
      this.router.navigate(["home/movie/" + key]);
    });
  }

  remove_Actor(actor) {
    for (let i = 0; i < this.movieDetails.actors.length; i++) {
      if (this.movieDetails.actors[i].name === actor.name) {
        this.movieDetails.actors.splice(i, 1);
      }
    }
    var remove_actor = {
      _id: this.movieDetails._id,
      actorId: actor._id,
    };
    this.movie.removeActor(remove_actor).subscribe((result: any) => {
      console.log(result);
    });
  }

  search(array, length, valueToSearch) {
    for (let i = 0; i < length; i++) {
      if (array[i].name === valueToSearch.name) {
        return true;
      } else if (i === length - 1) {
        return false;
      }
    }
  }

  cancel() {
    let key = btoa(this.movieDetails._id);
    this.router.navigate(["home/movie/" + key]);
  }
}
