import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  details: Array<any>;

  private updateSource = new BehaviorSubject(this.details);

  updateDetails = this.updateSource.asObservable();

  constructor() { }

  UpdateMovieDetails(UpdateMovieDetails: Array<any>) {
    console.log("from dataservice===", UpdateMovieDetails);
    this.updateSource.next(UpdateMovieDetails);
  }
}
