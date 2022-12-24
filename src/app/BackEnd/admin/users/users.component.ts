import { Component, OnInit } from '@angular/core';
import { faMailBulk, faPhone, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import {UserService} from "../AllService/UserServices/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  title="All Users";
  ngOnInit(): void {
  }
  faMailBulk = faMailBulk
  GetAllUsers: any;
  inputVal=""
  constructor(public user:UserService){
    this.user.AllUser().subscribe((data)=>{
      this.GetAllUsers=data;
      console.log(data)
    });
  }
ButtonHandle(formValue:any){
  var data={
    name:formValue.name,
    email:formValue.email,
    phone:formValue.phone,
    address:formValue.address,
    city:formValue.city,
    state:formValue.state,
    image:formValue.image,
    desc:formValue.desc,
    user_type:formValue.user_type,
    status:formValue.status
  }
  console.log(data)
    this.user.SaveUser(formValue).subscribe((res)=>{
      console.log(res)
    })
  // fetch("http://localhost:4000/api/user",{
  //   method:"POST",
  //   headers:{
  //     'content-type':'application/json'
  //   },
  //   body:JSON.stringify(data)
  // }).then(response=>response.json()).then((res)=>{
  //   console.log(res)
  // })
  }
}
