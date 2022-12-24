import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  userURL = "http://localhost:4000/api/category";
  constructor(private http:HttpClient) { 

  }

AllCategory(){
 return this.http.get(this.userURL);
}

}
