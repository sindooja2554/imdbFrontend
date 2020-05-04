import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data/data.service";

@Component({
  selector: "app-upcoming-movies",
  templateUrl: "./upcoming-movies.component.html",
  styleUrls: ["./upcoming-movies.component.scss"],
})
export class UpcomingMoviesComponent implements OnInit {
  movies: Array<any> = [];

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.upcomingMovieDetails.subscribe(
      (details) => (this.movies = details)
    );
  }
}
