import { Component, OnInit } from '@angular/core';
import { faCoffee, faAd, faHome, faPerson, faLockOpen,faJetFighter,faHeart,faOutdent, faShop,faStore, faMoneyBill,faFontAwesomeFlag, faStar, faEye, faBox, faUsers, faCalculator, faTree, faCity, faComment, faMessage, faNewspaper } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  faCoffee = faCoffee;
  faAd = faAd;
  faHome = faHome;
  faPerson = faPerson
  faLockOpen = faLockOpen
  faShop = faShop
  faMoneyBill = faMoneyBill
  faStar = faStar
  faEye = faEye
  faBox = faBox
  faUsers = faUsers
  faCalculator = faCalculator
  faTree = faTree
  faCity = faCity
  faComment = faComment
  faMessage = faMessage
  faNewspaper = faNewspaper
  faFontAwesomeFlag=faFontAwesomeFlag
  faJetFighter=faJetFighter
  faHeart=faHeart
  faStore=faStore
  faOutdent=faOutdent

}
