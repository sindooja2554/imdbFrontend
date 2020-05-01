import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Actor } from "../../model/actor/actor";
import { Movie } from "../../model/movie/movie";
import { Producer } from "../../model/producer/producer";

@Injectable({
  providedIn: "root",
})
export class DataService {
  details: Movie = new Movie();
  actorDetails: Actor = new Actor();
  producerDetails: Producer = new Producer();

  private updateSource = new BehaviorSubject(this.details);
  private actorSource = new BehaviorSubject(this.actorDetails);
  private producerSource = new BehaviorSubject(this.producerDetails);

  actorNewDetails = this.actorSource.asObservable();
  updateDetails = this.updateSource.asObservable();
  producerNewDetails = this.producerSource.asObservable();

  constructor() {}

  UpdateMovieDetails(UpdateMovieDetails: Movie) {
    console.log("from dataservice===", UpdateMovieDetails);
    this.updateSource.next(UpdateMovieDetails);
  }

  actor(addActor: Actor) {
    console.log("from data service=================>", addActor);
    this.actorSource.next(addActor);
  }

  producer(addProducer: Producer) {
    console.log("from data service=================>", addProducer);
    this.producerSource.next(addProducer);
  }
}
