import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  userURL = "http://localhost:4000/api/blog";
  constructor(private http:HttpClient) { }

  AllBlog(){
    return this.http.get(this.userURL);
  }

}

