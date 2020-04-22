import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  @Input() movies;
  movieUrl;
  constructor() { }

  ngOnInit() { }

}
