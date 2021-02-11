import { Component, Input, OnInit } from '@angular/core';
import { User } from '../users-list/users-list.component';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.less']
})
export class UserCardComponent implements OnInit {

  @Input() user:User;

  constructor() { }

  ngOnInit(): void {
  }

}
