import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  userURL = "http://localhost:4000/api/review";
  constructor(private http:HttpClient) { }

  AllReview(){
    return this.http.get(this.userURL)
  }
  AllUsers(){
    return this.http.get("http://localhost:4000/api/user");
  }
}
