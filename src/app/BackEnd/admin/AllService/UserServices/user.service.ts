import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class UserService {
API_URLS="http://localhost:4000/api/user";
  constructor(private http:HttpClient) { 
  }
  AllUser(){
    return this.http.get(this.API_URLS);
  }
  SaveUser(data:any) {
    return this.http.post(this.API_URLS,data);
  //   fetch("http://localhost:4000/api/user",{
  //   method:"POST",
  //   headers:{
  //     'content-type':'application/json'
  //   },
  //   body:JSON.stringify(data)
  // }).then(response=>response.json()).then((res)=>{
  //   console.log(res)
  // })
  }
}
