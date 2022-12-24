import { Component } from '@angular/core';
import { faMailBulk, faPhone, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { WishlistService } from "../AllService/WishlistServices/wishlist.service";
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  WishlistDat: any;

  constructor(public wishlist: WishlistService) {
    wishlist.AllWishlist().subscribe((data) => {
      this.WishlistDat = data;
      console.log(data)
    })
  }


}
