import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserPostsFilters } from '../feed/feed.component';

@Injectable({
  providedIn: 'root'
})
export class UserPostsService {

  private readonly resourceUrl:string = "Post";
  private readonly baseUrl:string = environment.server;

  constructor(private http:HttpClient) { 

  }

  getAllUserPosts(filters:UserPostsFilters){
    return this.http.get(`${this.baseUrl}${this.resourceUrl}/ShowPosts`, {params:{pageSize:filters.size.toString(), pageNumber:filters.page.toString()}});
  }

  createPost(body){
    return this.http.post(this.baseUrl+this.resourceUrl+"/Create", body);
  }

}
