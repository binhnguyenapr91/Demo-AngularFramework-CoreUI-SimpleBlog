import { Component, OnInit } from '@angular/core';
import {BlogService} from '../../blog.service';
import {Blog} from '../../blog';

@Component({
  selector: 'app-blog-listing',
  templateUrl: './blog-listing.component.html',
  styleUrls: ['./blog-listing.component.css']
})
export class BlogListingComponent implements OnInit {
  blogs: Blog [] = [];
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getBlogs()
      .subscribe(next => (this.blogs = next), error => (this.blogs = []));
  }

}
