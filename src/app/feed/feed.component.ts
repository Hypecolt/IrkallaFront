import { Component, OnInit } from '@angular/core';
import { SortType } from '../constants/SortType';
import { UserPostsService } from '../services/user-posts.service';

export class UserPost{
  id:number;
  userName:string;
  content:string;

  constructor(id:number, userName:string, content:string){
    this.id = id;
    this.userName = userName;
    this.content = content;
  }

}

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.less']
})
export class FeedComponent implements OnInit {

  userPosts:UserPost[] = [];
  filters:UserPostsFilters = new UserPostsFilters(0, 10, SortType.FirstNameAscendent);
  loading = true;

  /* userPosts:UserPost[] = [
    new UserPost(1, "gicu", "bat si fut ca masina de cusut"),
    new UserPost(2, "ionel", "am postu cel mai mare pe marsu il calc in picioare"),
    new UserPost(3, "paul", "CFR vine de la ce te feresti de pumnu meu"),
    new UserPost(4, "gabriel", "2 meleuri si 1 isuzu, bombardier cu bronz spalat")
  ]; */

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
