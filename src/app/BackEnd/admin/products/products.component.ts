import { Component } from '@angular/core';
import { faMailBulk,faPhone,faAddressBook} from '@fortawesome/free-solid-svg-icons';
import {ProductService} from "../AllService/ProductServices/product.service";
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

All_Product:any;

constructor(public product:ProductService){
  product.AllProduct().subscribe((data)=>{
    console.log(data)
this.All_Product=data;
  })
}


}
