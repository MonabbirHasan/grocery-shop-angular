import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class OfferService {
userURL = "http://localhost:4000/api/offer";
  constructor(private http:HttpClient) { }
  allOffer(){
    return this.http.get(this.userURL)
  }
}
