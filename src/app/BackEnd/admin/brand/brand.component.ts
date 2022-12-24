import { Component } from '@angular/core';
import { faMailBulk,faPhone,faAddressBook} from '@fortawesome/free-solid-svg-icons';
import {BrandService} from "../AllService/BrandServices/brand.service";
@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent {
BrandData:any;
  constructor(public brand:BrandService){
    brand.AllBrand().subscribe((data)=>{
      console.log(data)
      this.BrandData=data;
    })
  }

}
