import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class BrandService {
  userURL = "http://localhost:4000/api/brand";
  constructor(private http:HttpClient) { }
  AllBrand(){
    return this.http.get(this.userURL)
  }
}
