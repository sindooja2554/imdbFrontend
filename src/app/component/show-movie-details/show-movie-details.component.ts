import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MovieService } from '../../services/movie/movie.service';
import { UserService } from '../../services/user/user.service';
import { DataService } from '../../services/data/data.service';
import { StorageService } from '../../services/storage/storage.service';
import { Movie } from '../../model/movie/movie';

@Component({
  selector: 'app-show-movie-details',
  templateUrl: './show-movie-details.component.html',
  styleUrls: ['./show-movie-details.component.scss'],
})
export class ShowMovieDetailsComponent implements OnInit {
  // details: Object
  param: any;
  movieDetails: Movie = new Movie();
  watchListed: boolean = false;
  movieId: string;
  userWatchList: Array<any> = [];
  key: string;
  length: any;
  @Output() updateEvent = new EventEmitter<string>();
  constructor(
    private router: ActivatedRoute,
    private movie: MovieService,
    private data: DataService,
    private user: UserService,
    private storage: StorageService,
    private routes: Router
  ) {}

  ngOnInit() {
    this.data.updateDetails.subscribe(
      (details) => (this.movieDetails = details)
    );
    this.data.removeWatchList.subscribe((details) => (this.movieId = details));
    this.router.paramMap.subscribe((params) => {
      this.param = params.get('key');
      this.key = atob(this.param);
      console.log('key ----------------------------->', this.key);
      this.getMovieDetails(this.key);
    });
    this.length = this.storage.get('no-of-watchlist');
    for (let i = 0; i < this.length; i++) {
      if (this.storage.get('watchlist' + i) === this.key) {
        this.watchListed = true;
        break;
      } else {
        this.watchListed = false;
      }
    }
  }

  getMovieDetails(id) {
    this.movie.getOne(id).subscribe((result: any) => {
      this.movieDetails = result.data;
      console.log('data--------=============>', this.movieDetails);
    });
    this.movieDetails = {
      _id: '',
      name: '',
      releaseDate: '',
      yearOfRelease: null,
      actors: [],
      producer: {
        name: '',
        sex: '',
        dob: '',
        bio: '',
      },
      plot: '',
      watchlisted: false,
    };
  }

  update() {
    this.data.UpdateMovieDetails(this.movieDetails);
    this.routes.navigate(['updates']);
  }

  addToWatchList() {
    this.watchListed = true;
    this.storage.set('watchlist' + this.length, this.key);
    this.length = Number(this.length);
    this.length = this.length + 1;
    this.storage.set('no-of-watchlist', this.length);
    this.user.addToWatchList(this.movieDetails).subscribe((result: any) => {
      console.log('result--------------------->', result);
    });
  }

  removeWatchListed() {
    console.log(this.movieDetails);
    this.watchListed = false;
    for (let i = 0; i < this.length; i++) {
      if (this.storage.get('watchlist' + i) === this.key) {
        this.storage.remove('watchlist' + i);
        if (i !== this.length - 1) {
          this.storage.set(
            'watchlist' + i,
            this.storage.get('watchlist' + (i + 1))
          );
          this.storage.remove('watchlist' + (i + 1));
          i++;
        }
      }
    }
    this.length = this.length - 1;
    this.storage.set('no-of-watchlist', this.length);

    this.data.removeWatchListed(this.movieDetails._id);
  }

  homepage() {
    this.routes.navigate(['home/movie']);
  }
}
