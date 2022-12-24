import { Component, OnInit } from '@angular/core';
import { faPerson, faTimeline, faDollarSign, faBoxArchive } from '@fortawesome/free-solid-svg-icons';
import * as echarts from 'echarts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
  }
  faPerson = faPerson
  faTimeline = faTimeline
  faBoxArchive = faBoxArchive
  faDollarSign = faDollarSign


}
