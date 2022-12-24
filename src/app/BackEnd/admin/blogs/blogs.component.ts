import { Component } from '@angular/core';
import { faMailBulk, faPhone, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { BlogsService } from "../AllService/BlogServices/blogs.service";
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {

  BlogData: any;

  constructor(public blog: BlogsService) {
    this.blog.AllBlog().subscribe((data) => {
      this.BlogData = data;
      console.log(data)
    })
  }


}
