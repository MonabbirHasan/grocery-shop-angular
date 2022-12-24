import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  userURL = "http://localhost:4000/api/buyer";
  constructor(private http: HttpClient) { }

  AllBuyer() {
    return this.http.get(this.userURL);
  }


}
