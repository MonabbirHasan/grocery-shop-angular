import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CityService {
  userURL = "http://localhost:4000/api/city";
  constructor(private http:HttpClient) { }

  allCity(){
    return this.http.get(this.userURL)
  }
}
