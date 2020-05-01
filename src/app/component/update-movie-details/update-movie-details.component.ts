import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../../services/data/data.service";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { AddNewActorComponent } from "../add-new-actor/add-new-actor.component";
import { MovieService } from "../../services/movie/movie.service";
import { AddNewProducerComponent } from "../add-new-producer/add-new-producer.component";
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

  openDialog(): void {
    this.dialog.open(AddNewActorComponent);
  }

  openDialogTooAddProducer() {
    this.dialog.open(AddNewProducerComponent);
  }

  updateMovieDetails(): void {
    console.log("data for updating==============>", this.movieDetails);
    console.log("this.actorDetails==============>", this.actorDetails);
    console.log("this.producerDetails===========>", this.producerDetails);
    console.log("length============>", this.movieDetails.actors.length);
    console.log(Object.getOwnPropertyNames(this.actorDetails).length);
    if (Object.getOwnPropertyNames(this.actorDetails).length !== 0) {
      var search = this.search(
        this.movieDetails.actors,
        this.movieDetails.actors.length,
        this.actorDetails
      );
      this.length = this.movieDetails.actors.length + 1;
      if (search === false) {
        console.log("this.length", this.length);
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
        console.log("i=============>", i);
        this.movieDetails.actors.splice(i, 1);
      }
    }
    var remove_actor = {
      _id: this.movieDetails._id,
      actorId: actor._id,
    };
    console.log(remove_actor);
    this.movie.removeActor(remove_actor).subscribe((result: any) => {
      console.log(result);
    });
  }

  search(array, length, valueToSearch) {
    console.log("value to search---------------->", valueToSearch);
    for (let i = 0; i < length; i++) {
      console.log("loop running-------------->", i, length);
      if (array[i].name === valueToSearch.name) {
        return true;
      } else if (i === length - 1) {
        return false;
      }
    }
  }
}
