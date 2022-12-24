import { Component } from '@angular/core';
import {ReviewService} from "../AllService/ReviewServices/review.service";
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
ReveiwData:any
allUserss:any;
  constructor(public review:ReviewService){
  this.review.AllReview().subscribe((data)=>{
  this.ReveiwData=data;
  console.log(data)
})
this.review.AllUsers().subscribe((userData)=>{
  this.allUserss=userData;
  console.log(userData)

})

  }



}
