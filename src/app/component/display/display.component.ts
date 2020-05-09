import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { DataService } from '../../services/data/data.service';
import { StorageService } from '../../services/storage/storage.service';
import { Movie } from '../../model/movie/movie';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit {
  @Input() movies;
  @Input() actors;
  watchlistEvent: boolean;
  today: any;
  watchListed: boolean = false;
  movieId: string;
  count: number = 0;
  length: any;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private data: DataService,
    private user: UserService,
    private storage: StorageService
  ) {}

  ngOnInit() {
    this.today = new Date().toJSON().slice(0, 10).replace(/-/g, '/').split('/');
    this.data.removeWatchList.subscribe((details) => (this.movieId = details));
    this.activatedRoute.params.subscribe((params) => {
      console.log('params------------------------>', params.list);
      if (params.list === 'listed') {
        this.watchListed = true;
      } else if (params.list === undefined) {
        this.watchListed = false;
      }
    });
    this.data.watchListFromDisplay.subscribe(
      (details) => (this.watchlistEvent = details)
    );
    this.length = this.storage.get('no-of-watchlist');
  }

  movie(movie) {
    let key = btoa(movie._id);
    this.router.navigate(['home/movie/' + key]);
  }

  addToWatchList(movies: Movie) {
    this.watchListed = true;
    this.length = Number(this.length);
    this.storage.set('watchlist' + this.length, movies._id);
    this.length = this.length + 1;
    this.storage.set('no-of-watchlist', this.length);
    this.user.addToWatchList(movies).subscribe((result: any) => {
      console.log('result------------------->', result);
      this.data.watchListsFromDisplay(true);
    });
  }

  removeWatchListed() {
    this.watchListed = false;
    for (let i = 0; i < this.length; i++) {
      if (this.storage.get('watchlist' + i) === this.movies._id) {
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
    this.data.removeWatchListed(this.movies._id);
  }
}
