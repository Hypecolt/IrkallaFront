import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
    //window.localStorage.setItem("token","45wtrfgvw45");

    //const token = window.localStorage.getItem("token");
    //window.localStorage.removeItem("token");
  }

}
