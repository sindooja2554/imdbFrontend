import { Injectable } from "@angular/core";
import { HttpService } from "../http/http.service";

@Injectable({
  providedIn: "root",
})
export class MovieService {
  constructor(private http: HttpService) {}

  getAll() {
    console.log("In service");
    return this.http.getAll("movie");
  }

  getOne(key) {
    console.log("In service");
    return this.http.getOne("movie/" + key);
  }

  update(data) {
    console.log("in service");
    return this.http.update("movie/" + data._id, data);
  }

  removeActor(data) {
    console.log("in service");
    return this.http.post("removeactor/" + data._id, data);
  }

  uploadPoster(data) {
    console.log("body in service of upload pic", data);
    return this.http.headerPost("movieposter/" + data._id, data);
  }

  addMovie(data) {
    console.log("in service", data);
    return this.http.post("addmovie", data);
  }
}
