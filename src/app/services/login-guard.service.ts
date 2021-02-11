import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate{

  constructor() { }

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    const token = window.localStorage.getItem("token");

    return token ? false : true;
  }

}
