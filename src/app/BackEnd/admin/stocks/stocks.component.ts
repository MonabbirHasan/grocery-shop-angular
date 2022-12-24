import { Component } from '@angular/core';
import { faMailBulk, faPhone, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { StockService } from "../AllService/StockServices/stock.service";
@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent {
  StockData: any;

  constructor(public stock: StockService) {
    this.stock.AllStock().subscribe((data) => {
      this.StockData = data;
      console.log(data)
    })
  }


}
