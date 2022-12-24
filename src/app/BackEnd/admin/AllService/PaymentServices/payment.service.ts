import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  userURL = "http://localhost:4000/api/payment";
  constructor(private http:HttpClient) { }

AllPayment(){
  return this.http.get(this.userURL)
}
}
