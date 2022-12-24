import { Component } from '@angular/core';
import { faMailBulk,faPhone,faAddressBook} from '@fortawesome/free-solid-svg-icons';
import {CommentService} from "../AllService/CommentServices/comment.service";
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
CommentData:any;

constructor(public comment:CommentService){
  this.comment.alllComment().subscribe((data)=>{
    this.CommentData=data;
    console.log(data)
  })
}
}
