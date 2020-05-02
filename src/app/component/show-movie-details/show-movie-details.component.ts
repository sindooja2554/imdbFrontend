import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { MovieService } from "../../services/movie/movie.service";
import { DataService } from "../../services/data/data.service";
import { Movie } from "../../model/movie/movie";
@Component({
  selector: "app-show-movie-details",
  templateUrl: "./show-movie-details.component.html",
  styleUrls: ["./show-movie-details.component.scss"],
})
export class ShowMovieDetailsComponent implements OnInit {
  // details: Object
  param: any;
  movieDetails: Movie = new Movie();
  @Output() updateEvent = new EventEmitter<string>();
  constructor(
    private router: ActivatedRoute,
    private movie: MovieService,
    private data: DataService,
    private routes: Router
  ) {}

  ngOnInit() {
    this.data.updateDetails.subscribe(
      (details) => (this.movieDetails = details)
    );
    this.router.paramMap.subscribe((params) => {
      this.param = params.get("key");
      var key = atob(this.param);
      console.log("key ----------------------------->", key);
      this.getMovieDetails(key);
    });
  }

  getMovieDetails(id) {
    this.movie.getOne(id).subscribe((result: any) => {
      // console.log("data------------------->", Object.getOwnPropertyNames(result.data).length);
      // for (let i = 0; i < result.data.length; i++) {
      //   console.log("i", i)
      this.movieDetails = result.data;
      console.log("data--------=============>", this.movieDetails);
      // }
      // this.data.updateDetails.subscribe(details => this.movieDetails = details)
    });
  }

  update() {
    this.data.UpdateMovieDetails(this.movieDetails);
    this.routes.navigate(["updates"]);
  }
}
