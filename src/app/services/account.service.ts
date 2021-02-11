import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private readonly resourceUrl:string = "api/account";
  private readonly baseUrl:string = environment.server;

  constructor(private http:HttpClient) { 

  }

  register(body){
    return this.http.post(this.baseUrl+this.resourceUrl+"/register", body);
  }

  login(body){
    return this.http.post(this.baseUrl+this.resourceUrl+"/login", body);
  }

  getLoginUrl(){
    return this.baseUrl+this.resourceUrl+"/login";
  }

  getRegisterUrl(){
    return this.baseUrl+this.resourceUrl+"/register";
  }

  getFeedUrl(){
    return this.baseUrl+this.resourceUrl+"/feed";
  }

}
