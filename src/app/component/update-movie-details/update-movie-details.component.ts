import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service'
@Component({
  selector: 'app-update-movie-details',
  templateUrl: './update-movie-details.component.html',
  styleUrls: ['./update-movie-details.component.scss']
})
export class UpdateMovieDetailsComponent implements OnInit {

  movieDetails: Array<any>
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.updateDetails.subscribe(details => this.movieDetails = details)
    console.log("this.movieDetails=============>", this.movieDetails)
  }

}
