import { Component } from '@angular/core';
import {RatingService} from "../AllService/RatingServices/rating.service";
@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  RatingData:any;
  constructor(public rating:RatingService){
    this.rating.AllRating().subscribe((data)=>{
      console.log(data)
      this.RatingData=data;
    })
  }

}
