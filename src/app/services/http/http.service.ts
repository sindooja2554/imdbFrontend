import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  post(url, data) {
    console.log("data => ", data);
    console.log("url", this.baseUrl + url);
    return this.http.post(this.baseUrl + url, data);
  }

  headerPost(url, data) {
    let headers = new HttpHeaders({
      token: localStorage.getItem("token"),
    });
    console.log("data123====> ", headers);
    return this.http.post(this.baseUrl + url, data, { headers });
  }

  getAll(url) {
    console.log("Url", this.baseUrl + url);
    return this.http.get(this.baseUrl + url);
  }

  getOne(url) {
    console.log("Url", this.baseUrl + url);
    return this.http.get(this.baseUrl + url);
  }

  update(url, data) {
    console.log("url------------->", this.baseUrl + url);
    return this.http.put(this.baseUrl + url, data);
  }
}
