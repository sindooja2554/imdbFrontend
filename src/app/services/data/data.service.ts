import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Actor } from '../../model/actor/actor';
import { Movie } from '../../model/movie/movie';
import { Producer } from '../../model/producer/producer';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  details: Movie = new Movie();
  actorDetails: Actor = new Actor();
  producerDetails: Producer = new Producer();
  upcomingMovies: Array<any> = [];
  topRatedMovies: Array<any> = [];
  actors: Array<any> = [];
  watchList: string;

  private logoutSource = new BehaviorSubject(false);
  private updateSource = new BehaviorSubject(this.details);
  private actorSource = new BehaviorSubject(this.actorDetails);
  private producerSource = new BehaviorSubject(this.producerDetails);
  private UpcomingMovieSource = new BehaviorSubject(this.upcomingMovies);
  private topRatedMovieSource = new BehaviorSubject(this.topRatedMovies);
  private bornTodayActorSource = new BehaviorSubject(this.actors);
  private watchListSource = new BehaviorSubject(false);
  private removeWatchListSource = new BehaviorSubject(this.watchList);
  private watchListFromDisplaySource = new BehaviorSubject(false);

  logOut = this.logoutSource.asObservable();
  actorNewDetails = this.actorSource.asObservable();
  updateDetails = this.updateSource.asObservable();
  producerNewDetails = this.producerSource.asObservable();
  upcomingMovieDetails = this.UpcomingMovieSource.asObservable();
  topRatedMovieDetails = this.topRatedMovieSource.asObservable();
  bornTodayActorDetails = this.bornTodayActorSource.asObservable();
  watchListed = this.watchListSource.asObservable();
  removeWatchList = this.removeWatchListSource.asObservable();
  watchListFromDisplay = this.watchListFromDisplaySource.asObservable();

  constructor() {}

  UpdateMovieDetails(UpdateMovieDetails: Movie) {
    console.log('from dataservice===', UpdateMovieDetails);
    this.updateSource.next(UpdateMovieDetails);
  }

  actor(addActor: Actor) {
    console.log('from data service=================>', addActor);
    this.actorSource.next(addActor);
  }

  producer(addProducer: Producer) {
    console.log('from data service=================>', addProducer);
    this.producerSource.next(addProducer);
  }

  upcomingMovie(upcomingMovies: Array<any>) {
    console.log('from data service=================>', upcomingMovies);
    this.UpcomingMovieSource.next(upcomingMovies);
  }

  topRatedMovie(topRatedMovies: Array<any>) {
    console.log('from data service=================>', topRatedMovies);
    this.topRatedMovieSource.next(topRatedMovies);
  }

  bornTodayActors(bornToday: Array<any>) {
    console.log('from data service=================>', bornToday);
    this.topRatedMovieSource.next(bornToday);
  }

  signOut(logout: boolean) {
    console.log('from data service=================>', logout);
    this.logoutSource.next(logout);
  }

  watchLists(watchList: boolean) {
    console.log('from data service=================>', watchList);
    this.watchListSource.next(watchList);
  }

  removeWatchListed(removeWatchList: string) {
    console.log('from data service==================>', removeWatchList);
    this.removeWatchListSource.next(removeWatchList);
  }

  watchListsFromDisplay(watchList: boolean) {
    console.log('from data service==================>', watchList);
    this.watchListFromDisplaySource.next(watchList);
  }
}
