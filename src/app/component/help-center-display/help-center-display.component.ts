import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-help-center-display',
  templateUrl: './help-center-display.component.html',
  styleUrls: ['./help-center-display.component.scss'],
})
export class HelpCenterDisplayComponent implements OnInit {
  @Input() imdb;
  @Input() register;
  @Input() delete;
  constructor() {}

  ngOnInit() {}
}
