import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from "../../services/movie/movie.service"

@Component({
  selector: 'app-show-movie-details',
  templateUrl: './show-movie-details.component.html',
  styleUrls: ['./show-movie-details.component.scss']
})
export class ShowMovieDetailsComponent implements OnInit {

  param: any
  movieDetails: Array<any>;
  constructor(private router: ActivatedRoute, private movie: MovieService) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      console.log("key--------------->", params.get("key"))
      this.param = params.get("key");
      console.log("params.....................", this.param)
      var key = atob(this.param)
      console.log("key-------------->", key)
      this.getMovieDetails(key);
    });
  }

  getMovieDetails(id) {
    this.movie.getOne(id).subscribe((result: any) => {
      // console.log("data------------------->", Object.getOwnPropertyNames(result.data).length);
      // for (let i = 0; i < result.data.length; i++) {
      //   console.log("i", i)
      this.movieDetails = result.data;
      console.log("data--------=============>", this.movieDetails)
      // }
    })
  }
}
