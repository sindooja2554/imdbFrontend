import { Component, OnInit, Input } from '@angular/core';
// import { BehaviorSubject } from 'rxjs'
import { Router } from "@angular/router";


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  @Input() movies;
  @Input() actors;
  today: any
  constructor(private router: Router) { }

  ngOnInit() {
    this.today = new Date().toJSON().slice(0, 10).replace(/-/g, '/').split("/");
    console.log("date ==========", this.today)
  }

  movie(movie) {
    // let key = movie._id;
    let key = btoa(movie._id);
    console.log("key------------------>", key)
    this.router.navigate(["home/movie/" + key])
  }
}
