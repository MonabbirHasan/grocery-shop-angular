import { Component } from '@angular/core';
import {CardService} from "../AllService/CardServices/card.service";
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
CardData:any;
  constructor(public cards:CardService){
    cards.AllCard().subscribe((data)=>{
      this.CardData=data
      console.log(data)
    })
  }

}
