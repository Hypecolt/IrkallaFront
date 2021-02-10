import { Component, OnInit } from '@angular/core';

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

  userPosts:UserPost[] = [
    new UserPost(1, "gicu", "bat si fut ca masina de cusut"),
    new UserPost(2, "ionel", "am postu cel mai mare pe marsu il calc in picioare"),
    new UserPost(3, "paul", "CFR vine de la ce te feresti de pumnu meu"),
    new UserPost(4, "gabriel", "2 meleuri si 1 isuzu, bombardier cu bronz spalat")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
