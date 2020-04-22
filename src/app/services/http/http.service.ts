import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getAll(url) {
    console.log("Url", this.baseUrl + url);
    return this.http.get(this.baseUrl + url);
  }
}