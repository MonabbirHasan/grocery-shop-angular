import { Component,OnInit } from '@angular/core';
import { faMailBulk,faPhone,faAddressBook,faTrash,faPen} from '@fortawesome/free-solid-svg-icons';
import {CategoryService} from "../AllService/CategoryServices/category.service";
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  ngOnInit(): void {
  }
  ImageUrl:any
CategoryData:any
  constructor(public category:CategoryService){
    this.category.AllCategory().subscribe((data)=>{
      console.warn(data)
      this.CategoryData=data;
      this.ImageUrl=data;
    })
  }
// form data
FortData(FormValue:any){
console.log(FormValue)
}

}
