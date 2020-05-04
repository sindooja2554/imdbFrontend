import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data/data.service";
@Component({
  selector: "app-top-rated-movies",
  templateUrl: "./top-rated-movies.component.html",
  styleUrls: ["./top-rated-movies.component.scss"],
})
export class TopRatedMoviesComponent implements OnInit {
  movies: Array<any> = [];
  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.topRatedMovieDetails.subscribe(
      (details) => (this.movies = details)
    );
  }
}
