import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  token:string;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.token = window.localStorage.getItem("token");
  }

  logOut(){
    window.localStorage.removeItem("token");
  }

  //fancy(){
  //  window.localStorage.getItem("token") ? this.router.navigate(["feed"]) : this.router.navigate(["register"]);
  //}

}
