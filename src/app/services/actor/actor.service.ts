import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private http: HttpService) { }

  getAllActors() {
    return this.http.getAll('actor');
  }
}
