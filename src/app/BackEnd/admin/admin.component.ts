import { Component, OnInit } from '@angular/core';
import { faR, faRing,faMessage} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  ngOnInit(): void {
   
  }
faRing=faRing
faMessage=faMessage


message_Box(){
  alert("welcome to new message")
}


}
