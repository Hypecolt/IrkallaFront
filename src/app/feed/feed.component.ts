import { Component, OnInit } from '@angular/core';
import { SortType } from '../constants/SortType';
import { UserPostsService } from '../services/user-posts.service';

export class UserPost{
  ownerFirstName:string;
  ownerLastName:string;
  postId:number;
  postImage:string;
  postText:string;
  postLikes:number;

  constructor(ownerFirstName:string, ownerLastName:string, postId:number, postImage:string, postText:string, postLikes:number){
    this.postId = postId;
    this.ownerFirstName = ownerFirstName;
    this.ownerLastName = ownerLastName;
    this.postImage = postImage;
    this.postText = postText;
    this.postLikes = postLikes;
  }

}

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.less']
})
export class FeedComponent implements OnInit {

  userPosts:UserPost[] = [];
  filters:UserPostsFilters = new UserPostsFilters(0, 4, SortType.FirstNameAscendent);
  loading = true;

  constructor(
    private userPostsService:UserPostsService,
    ) { }

  ngOnInit(): void {
    this.getUserPosts();
  }

  getUserPosts(){
    this.loading=true;
    this.userPostsService.getAllUserPosts(this.filters).subscribe(
      (userPosts:UserPost[]) => {
        console.log(userPosts);
        this.userPosts = this.userPosts.concat(userPosts);
        this.loading = false;
      },
      (error) => {
        console.log(error);
        this.loading = false;
      }
    );
  }

  showMore(){
    this.filters.page++;
    this.getUserPosts();
  }

}

export class UserPostsFilters{
  page:number;
  size:number;
  sortType:SortType;

  constructor(page:number, size:number, sortType:SortType){
    this.page = page;
    this.size = size;
    this.sortType = sortType;
  }
}
