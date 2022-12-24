import { Component } from '@angular/core';
import { faMailBulk,faPhone,faAddressBook} from '@fortawesome/free-solid-svg-icons';
import {OfferService} from "../AllService/OfferServices/offer.service";
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent {
  offerData:any;
  constructor(public offer:OfferService){
    this.offer.allOffer().subscribe((data)=>{
      this.offerData=data;
      console.log(data)
    })
  }

}
