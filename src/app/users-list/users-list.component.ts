import { Component, OnInit } from '@angular/core';
import { SortType } from '../constants/SortType';
import { DiscoverUsersService } from '../services/discover-users.service';

export class User{
  firstName:string;
  lastName:string;
  profilePicture:string;

  constructor(
    firstName:string, 
    lastName:string, 
    profilePicture:string)
    {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profilePicture = profilePicture;
    }

}

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.less']
})
export class UsersListComponent implements OnInit {

  filters:UserFilters = new UserFilters(0, 2, SortType.FirstNameAscendent);
  loading = true;

  usersList:User[] = [];
  
  //https://i.imgur.com/znXWsy1.jpg

  constructor(
    private discoverUsersService:DiscoverUsersService,
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.loading=true;
    this.discoverUsersService.getAllUsers(this.filters).subscribe(
      (usersList:User[]) => {
        console.log(usersList);
        this.usersList = this.usersList.concat(usersList);
        this.loading = false;
      },
      (error) => {
        console.log(error);
        this.loading = false;
      }
    );
  }

  loadMore(){
    this.filters.page++;
    this.getUsers();
  }

}

export class UserFilters{
  page:number;
  size:number;
  sortType:SortType;

  constructor(page:number, size:number, sortType:SortType){
    this.page = page;
    this.size = size;
    this.sortType = sortType;
  }
}