import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserPostsFilters } from '../feed/feed.component';
import { User, UserFilters } from '../users-list/users-list.component';

@Injectable({
  providedIn: 'root'
})
export class DiscoverUsersService {

  private readonly resourceUrl:string = "allUsers";
  private readonly baseUrl:string = environment.server;

  constructor(private http:HttpClient) { 

  }

  getAllUsers(filters:UserPostsFilters){

    return this.http.get<User[]>(`${this.baseUrl}${this.resourceUrl}`, {params:{pageSize:filters.size.toString(), pageNumber:filters.page.toString(), sortType:filters.sortType.toString()}});

  }

}
