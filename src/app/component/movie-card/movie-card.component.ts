import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { MovieService } from '../../services/movie/movie.service';
import { ActorService } from '../../services/actor/actor.service';
import { DataService } from '../../services/data/data.service';
import { StorageService } from '../../services/storage/storage.service';

import { DisplayComponent } from '../display/display.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  result: Array<any> = [];
  topRatedMovies: Array<any> = [];
  upComingRelease: Array<any> = [];
  bornToday: Array<any> = [];
  today = new Date();
  dd: string;
  mm: string;
  yyyy: number;
  date: string;
  signOut: boolean = false;
  length: any;

  constructor(
    private router: Router,
    private movie: MovieService,
    private actor: ActorService,
    private data: DataService,
    private storage: StorageService
  ) {}

  ngOnInit() {
    this.topRatedMovies = [];
    this.upComingRelease = [];
    this.bornToday = [];
    this.dd = String(this.today.getDate()).padStart(2, '0');
    this.mm = String(this.today.getMonth() + 1).padStart(2, '0'); //January is 0!
    this.yyyy = this.today.getFullYear();

    this.date = this.yyyy + '/' + this.mm + '/' + this.dd;
    this.today = new Date(this.date);
    this.length = this.storage.get('no-of-watchlist');
    this.getAllMovies();
    this.getAllActors();
    this.data.upcomingMovieDetails.subscribe(
      (details) => (this.upComingRelease = details)
    );
    this.data.topRatedMovieDetails.subscribe(
      (details) => (this.topRatedMovies = details)
    );
    this.data.bornTodayActorDetails.subscribe(
      (details) => (this.bornToday = details)
    );
    this.data.watchListFromDisplay.subscribe((details) => {
      if (details === true) {
        this.getAllMovies();
        this.getAllActors();
      }
    });

    this.data.logOut.subscribe((signOut) => (this.signOut = signOut));
    if (this.signOut === true) {
      this.upComingRelease = [];
      this.topRatedMovies = [];
      this.bornToday = [];
      this.data.upcomingMovie(this.upComingRelease);
      this.data.topRatedMovie(this.topRatedMovies);
      this.data.bornTodayActors(this.bornToday);
    }
  }

  getAllMovies() {
    var count: number;
    this.length = this.storage.get('no-of-watchlist');
    this.movie.getAll().subscribe((result: any) => {
      if (Number(this.length) === 0) {
        this.result = result.data;
      } else {
        for (let i = 0; i < this.length; i++) {
          for (let j = 0; j < result.data.length; j++) {
            if (this.storage.get('watchlist' + i) === result.data[j]._id) {
              result.data.splice(j, 1);
            }
          }
          if (i === this.length - 1) {
            console.log('result-------------->', result.data);
            this.result = result.data;
          }
        }
      }

      Object.getOwnPropertyNames(this.result).map((key) => {
        count++;
        if (this.result[key].rating > 8) {
          this.topRatedMovies.push(this.result[key]);
        }
        if (this.result[key].releaseDate !== undefined) {
          var releaseDate = this.result[key].releaseDate.split('/');
          var date = new Date(releaseDate[2], releaseDate[1], releaseDate[0]);
          if (this.today < date) {
            this.upComingRelease.push(this.result[key]);
          }
        }
        if (count === Object.getOwnPropertyNames(this.result).length) {
          this.data.upcomingMovie(this.upComingRelease);
          this.data.topRatedMovie(this.topRatedMovies);
        }
      });
      var temp;
      for (var i = 0; i < this.topRatedMovies.length; i++) {
        for (var j = 0; j < this.topRatedMovies.length - i - 1; j++) {
          if (
            this.topRatedMovies[j].rating < this.topRatedMovies[j + 1].rating
          ) {
            temp = this.topRatedMovies[j];
            this.topRatedMovies[j] = this.topRatedMovies[j + 1];
            this.topRatedMovies[j + 1] = temp;
          }
        }
      }
    });
    this.upComingRelease = [];
    this.topRatedMovies = [];
  }

  getAllActors() {
    this.actor.getAllActors().subscribe((result: any) => {
      var count: number;
      Object.getOwnPropertyNames(result.data).map((key) => {
        count++;
        if (result.data[key].dob !== undefined) {
          var dob = result.data[key].dob.split('/');
          var today = this.date.split('/');
          if (today[2] === dob[0] && today[1] === dob[1]) {
            console.log('comparing born date==============>', result.data[key]);
            this.bornToday.push(result.data[key]);
          }
        }
        if (Object.getOwnPropertyNames(result.data).length === count) {
          this.data.bornTodayActors(this.bornToday);
        }
      });
    });
    this.bornToday = [];
  }
}
