import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie/movie.service'
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  topRatedMovies: Array<any> = [];
  upComingRelease: Array<any> = [];
  constructor(private movie: MovieService) { }

  ngOnInit() {
    console.log("In movie-card")
    this.getAllMovies()
  }

  getAllMovies() {
    var today = new Date()
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    var date = yyyy + '/' + mm + '/' + dd;
    today = new Date(date)
    console.log("In the function calling service", date)
    this.movie.getAll()
      .subscribe((result: any) => {
        Object.getOwnPropertyNames(result.data).map(key => {
          if (result.data[key].rating > 8) {
            this.topRatedMovies.push(result.data[key]);
          }
          if (result.data[key].releaseDate !== undefined) {
            var releaseDate = result.data[key].releaseDate.split("/")
            var date = new Date(releaseDate[2], releaseDate[1], releaseDate[0])

            if (today < date) {
              console.log("comparing==============>", result.data[key])
              this.upComingRelease.push(result.data[key])
            }
          }
        });
        var temp;
        for (var i = 0; i < this.topRatedMovies.length; i++) {
          for (var j = 0; j < this.topRatedMovies.length - i - 1; j++) {
            if (this.topRatedMovies[j].rating < this.topRatedMovies[j + 1].rating) {
              temp = this.topRatedMovies[j];
              this.topRatedMovies[j] = this.topRatedMovies[j + 1];
              this.topRatedMovies[j + 1] = temp;
            }
          }
        }
        console.log("data------------------->", this.topRatedMovies)
      })
  }
}
