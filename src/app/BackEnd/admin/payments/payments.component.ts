import { Component } from '@angular/core';
import { faMailBulk,faPhone,faAddressBook} from '@fortawesome/free-solid-svg-icons';
import {PaymentService} from "../AllService/PaymentServices/payment.service";
@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent {
PaymentData:any;

constructor(public payment:PaymentService){
  this.payment.AllPayment().subscribe((data)=>{
    console.log(data)
    this.PaymentData=data;
  })
}


}
