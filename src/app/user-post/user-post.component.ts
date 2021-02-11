import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserPost } from '../feed/feed.component';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.less']
})
export class UserPostComponent implements OnInit {

  @Input()userPost:UserPost;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  postDetails(){
    this.router.navigate(["upd/"+this.userPost.postId]);
  }

}
