import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  userURL = "http://localhost:4000/api/wishlist";
  constructor(private http:HttpClient) { }

AllWishlist(){
  return this.http.get(this.userURL)
}

}
