import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http:HttpClient) { }
  userURL = "http://localhost:4000/api/product";
AllProduct(){
  return this.http.get(this.userURL);
}
}
