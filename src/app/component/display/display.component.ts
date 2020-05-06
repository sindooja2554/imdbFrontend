import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../../services/user/user.service";
import { DataService } from "../../services/data/data.service";
import { Movie } from "../../model/movie/movie";

@Component({
  selector: "app-display",
  templateUrl: "./display.component.html",
  styleUrls: ["./display.component.scss"],
})
export class DisplayComponent implements OnInit {
  @Input() movies;
  @Input() actors;
  today: any;
  watchListed: boolean;
  movieId: string;
  count: number = 0;
  constructor(
    private router: Router,
    private data: DataService,
    private user: UserService
  ) {}

  ngOnInit() {
    this.today = new Date().toJSON().slice(0, 10).replace(/-/g, "/").split("/");
    this.data.watchListed.subscribe((details) => (this.watchListed = details));
    this.data.removeWatchList.subscribe((details) => (this.movieId = details));
    // this.data.addToWatchList.subscribe((details) => {
    //   if (details._id !== undefined && details._id !== null) {
    //     this.count++;
    //     console.log(this.count);
    //     if (this.count === 1) {
    //       console.log("details=============>", this.count);
    //       this.addToWatchList(details);
    //     }
    //   }
    // });
  }

  movie(movie) {
    let key = btoa(movie._id);
    this.router.navigate(["home/movie/" + key]);
  }

  addToWatchList(movies: Movie) {
    this.user.addToWatchList(movies).subscribe((result: any) => {
      console.log("result------------------->", result);
    });
  }

  removeWatchListed() {
    this.data.removeWatchListed(this.movies._id);
  }
}
