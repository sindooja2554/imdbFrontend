import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie/movie.service'
import { ActorService } from 'src/app/services/actor/actor.service';
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  topRatedMovies: Array<any> = [];
  upComingRelease: Array<any> = [];
  bornToday: Array<any> = [];
  today = new Date();
  dd: string;
  mm: string;
  yyyy: number;
  date: string


  constructor(private movie: MovieService,
    private actor: ActorService) {
  }

  ngOnInit() {
    this.dd = String(this.today.getDate()).padStart(2, '0');
    this.mm = String(this.today.getMonth() + 1).padStart(2, '0'); //January is 0!
    this.yyyy = this.today.getFullYear();

    this.date = this.yyyy + '/' + this.mm + '/' + this.dd;
    this.today = new Date(this.date)
    this.getAllMovies();
    this.getAllActors();
  }

  getAllMovies() {
    console.log("In the function calling service", this.date)
    this.movie.getAll()
      .subscribe((result: any) => {
        Object.getOwnPropertyNames(result.data).map(key => {
          if (result.data[key].rating > 8) {
            this.topRatedMovies.push(result.data[key]);
          }
          if (result.data[key].releaseDate !== undefined) {
            var releaseDate = result.data[key].releaseDate.split("/")
            var date = new Date(releaseDate[2], releaseDate[1], releaseDate[0])

            if (this.today < date) {
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

  getAllActors() {
    this.actor.getAllActors().subscribe((result: any) => {
      Object.getOwnPropertyNames(result.data).map(key => {
        if (result.data[key].dob !== undefined) {
          var dob = result.data[key].dob.split("/")
          var today = this.date.split("/");
          if (today[2] === dob[0] && today[1] === dob[1]) {
            console.log("comparing born date==============>", result.data[key])
            this.bornToday.push(result.data[key])
          }
        }
      });
    })
  }
}
