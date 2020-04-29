import { Injectable } from "@angular/core";
import { HttpService } from "../http/http.service";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpService) {}

  registration(user) {
    console.log("body in service==>", user);
    return this.http.post("register", user);
  }

  login(user) {
    console.log("body in service==>", user);
    return this.http.post("login", user);
  }

  verify() {
    console.log("body in service==>");
    return this.http.headerPost("verifyuser/:token", null);
  }

  forgot(user) {
    console.log("body in service==>", user);
    return this.http.post("forgotpassword", user);
  }

  reset(user) {
    console.log("body in service==>", user);
    return this.http.headerPost("resetpassword", user);
  }
}
