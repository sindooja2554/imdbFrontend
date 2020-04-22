import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpService) { }

  getAll() {
    console.log("In service")
    return this.http.getAll('movie');
  }
}
