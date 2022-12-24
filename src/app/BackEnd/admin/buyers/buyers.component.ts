import { Component } from '@angular/core';
import { faMailBulk, faPhone, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { BuyerService } from "../AllService/BuyerServices/buyer.service";
@Component({
  selector: 'app-buyers',
  templateUrl: './buyers.component.html',
  styleUrls: ['./buyers.component.css']
})
export class BuyersComponent {
  BuyerData: any;
  constructor(public buyer: BuyerService) {
    this.buyer.AllBuyer().subscribe((data) => {
      this.BuyerData = data;
      console.log(data)
    })
  }

}
