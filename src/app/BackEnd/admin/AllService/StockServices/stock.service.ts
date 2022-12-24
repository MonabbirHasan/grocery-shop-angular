import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class StockService {
  userURL = "http://localhost:4000/api/stock";
  constructor(private http: HttpClient) { }

  AllStock() {
    return this.http.get(this.userURL);
  }




}
