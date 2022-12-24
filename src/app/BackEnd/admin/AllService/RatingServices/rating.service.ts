import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class RatingService {
  userURL = "http://localhost:4000/api/rating";
  constructor(private http:HttpClient) { }
AllRating(){
  return this.http.get(this.userURL);
}
}
