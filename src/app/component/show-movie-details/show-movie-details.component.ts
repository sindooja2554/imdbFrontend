import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { MovieService } from "../../services/movie/movie.service";
import { UserService } from "../../services/user/user.service";
import { DataService } from "../../services/data/data.service";
import { Movie } from "../../model/movie/movie";
import { from } from "rxjs";
@Component({
  selector: "app-show-movie-details",
  templateUrl: "./show-movie-details.component.html",
  styleUrls: ["./show-movie-details.component.scss"],
})
export class ShowMovieDetailsComponent implements OnInit {
  // details: Object
  param: any;
  movieDetails: Movie = new Movie();
  watchListed: boolean = false;
  movieId: string;
  @Output() updateEvent = new EventEmitter<string>();
  constructor(
    private router: ActivatedRoute,
    private movie: MovieService,
    private data: DataService,
    private user: UserService,
    private routes: Router
  ) {}

  ngOnInit() {
    this.data.updateDetails.subscribe(
      (details) => (this.movieDetails = details)
    );
    this.data.removeWatchList.subscribe((details) => (this.movieId = details));
    // this.data.addToWatchList.subscribe(
    //   (details) => (this.movieDetails = details)
    // );
    this.router.paramMap.subscribe((params) => {
      this.param = params.get("key");
      var key = atob(this.param);
      console.log("key ----------------------------->", key);
      this.getMovieDetails(key);
    });
  }

  getMovieDetails(id) {
    this.movie.getOne(id).subscribe((result: any) => {
      this.movieDetails = result.data;
      console.log("data--------=============>", this.movieDetails);
    });
  }

  update() {
    this.data.UpdateMovieDetails(this.movieDetails);
    this.routes.navigate(["updates"]);
  }

  addToWatchList() {
    this.watchListed = true;
    // this.data.addWatchLists(this.movieDetails);
    this.user.addToWatchList(this.movieDetails).subscribe((result: any) => {
      console.log("result--------------------->", result);
    });
  }

  removeWatchListed() {
    console.log(this.movieDetails);
    this.watchListed = false;
    this.data.removeWatchListed(this.movieDetails._id);
  }
}
