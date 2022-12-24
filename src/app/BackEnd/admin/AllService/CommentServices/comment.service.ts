import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CommentService {
  userURL = "http://localhost:4000/api/comment";
  constructor(private http:HttpClient) { }


alllComment(){
return this.http.get(this.userURL);
}


}
