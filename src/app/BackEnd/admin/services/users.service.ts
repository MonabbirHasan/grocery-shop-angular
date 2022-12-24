import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userURL = "http://localhost:4000/api/user";

  constructor(private http: HttpClient) { }
  AllUsers() {
    return this.http.get(this.userURL);
  }


}
