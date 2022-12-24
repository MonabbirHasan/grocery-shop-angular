import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  userURL = "http://localhost:4000/api/order";
  constructor(private http:HttpClient) { }
allOrder(){
  return this.http.get(this.userURL);
}
}
