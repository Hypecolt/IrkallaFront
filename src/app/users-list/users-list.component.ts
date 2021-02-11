import { Component, OnInit } from '@angular/core';
import { SortType } from '../constants/SortType';
import { DiscoverUsersService } from '../services/discover-users.service';

export class User{
  id:number;
  firstName:string;
  lastName:string;
  email:string;
  passwordHash:string;
  gender:string;
  role:String

  constructor(
    id:number,
    firstName:string, 
    lastName:string, 
    email:string,
    passwordHash:string,
    gender:string,
    role:string)
    {
      this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.passwordHash = passwordHash;
    this.gender = gender;
    this.role = role;
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

  usersList:User[];
  /* users:User[] = [
    new User("gicu", "chirila", "https://i.imgur.com/znXWsy1.jpg"),
    new User("ionel", "cornea", "https://i.imgur.com/znXWsy1.jpg"),
    new User("paul", "cindea", "https://i.imgur.com/znXWsy1.jpg"),
    new User("gabriel", "antonaru", "https://i.imgur.com/znXWsy1.jpg"),
  ]; */

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