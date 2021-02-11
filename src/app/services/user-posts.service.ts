import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserPostsFilters } from '../feed/feed.component';

@Injectable({
  providedIn: 'root'
})
export class UserPostsService {

  private readonly resourceUrl:string = "Post/ShowPosts";
  private readonly baseUrl:string = environment.server;

  constructor(private http:HttpClient) { 

  }

  getAllUserPosts(filters:UserPostsFilters){

    console.log(this.baseUrl+this.resourceUrl);
    return this.http.get(`${this.baseUrl}${this.resourceUrl}`, {params:{pageSize:filters.size.toString(), pageNumber:filters.page.toString()}});

  }

}
