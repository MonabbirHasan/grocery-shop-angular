import { Component } from '@angular/core';
import { faMailBulk, faPhone, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { CityService } from "../AllService/CityServices/city.service";
@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent {
  CityData: any;

  constructor(public city: CityService) {
    this.city.allCity().subscribe((data) => {
      this.CityData = data;
      console.log(data)
    })
  }


}
