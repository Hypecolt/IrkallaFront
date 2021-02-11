import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  token: string;
  view: boolean;
  firstName: string;

  constructor() { 
  }

  ngOnInit(): void {
    this.token = window.localStorage.getItem("token");
    this.firstName = window.localStorage.getItem("firstName");
  }

  logOut() {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("firstName");
    this.ngOnInit();
  }
}
