import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Movie } from "../../model/movie/movie";
import { UserService } from "../../services/user/user.service";
import { DataService } from "../../services/data/data.service";

@Component({
  selector: "app-watchlist",
  templateUrl: "./watchlist.component.html",
  styleUrls: ["./watchlist.component.scss"],
})
export class WatchlistComponent implements OnInit {
  movie: Array<Movie> = [];
  watchListed: boolean;
  // movieId: string;
  constructor(
    private user: UserService,
    private data: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.data.watchListed.subscribe((details) => (this.watchListed = details));
    this.data.removeWatchList.subscribe((details) => {
      console.log("id------------------->", details);
      if (details !== undefined && details !== null) {
        this.removeFromWatchList(details);
      }
    });
    this.watchList();
  }

  watchList() {
    this.data.watchLists(true);
    this.user.findOne().subscribe((result: any) => {
      console.log(result);
      this.movie = result.data.watchList;
      console.log(this.movie);
    });
  }

  removeFromWatchList(movieId) {
    console.log("id=====================>", movieId);
    let removeWatchlistObject = {
      movieId: movieId,
    };
    this.user
      .removeFromWatchList(removeWatchlistObject)
      .subscribe((result: any) => {
        console.log("result------------------------->", result);
        console.log("movie------------------------->", this.movie);
        this.movie.forEach((key) => {
          console.log("key====================>", key);
          if (key._id === removeWatchlistObject.movieId) {
            this.movie.splice(this.movie.indexOf(key), 1);
            console.log(this.movie);
          }
        });
      });
  }
}
