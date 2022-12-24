import { Component } from '@angular/core';
import { faMailBulk,faPhone,faAddressBook} from '@fortawesome/free-solid-svg-icons';
import {OrderService} from "../AllService/OrderServices/order.service";
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

OrderData:any;

constructor(public orders:OrderService){
  this.orders.allOrder().subscribe((data)=>{
    this.OrderData=data;
    console.log(data)
  })
}


}

