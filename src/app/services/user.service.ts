import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly resourceUrl:string = "user";
  private readonly baseUrl:string = environment.server;

  constructor(private http:HttpClient) { 

  }

  update(body){
    return this.http.post(this.baseUrl+this.resourceUrl+"/update", body);
  }

  getDetails(){
    return this.http.get(this.baseUrl+this.resourceUrl+"/GetDetails");
  }

}
