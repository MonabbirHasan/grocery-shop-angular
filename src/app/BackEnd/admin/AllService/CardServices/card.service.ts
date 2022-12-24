import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CardService {
  userURL = "http://localhost:4000/api/card";
  constructor(private http:HttpClient) { }


  AllCard(){
    return this.http.get(this.userURL);
  }

}
