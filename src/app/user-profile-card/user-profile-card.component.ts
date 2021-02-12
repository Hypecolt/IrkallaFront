import { Component, Input, OnInit } from '@angular/core';
import { UserDetails } from '../my-profile/my-profile.component';

@Component({
  selector: 'app-user-profile-card',
  templateUrl: './user-profile-card.component.html',
  styleUrls: ['./user-profile-card.component.less']
})
export class UserProfileCardComponent implements OnInit {

  @Input() user:UserDetails;

  constructor() { }

  ngOnInit(): void {
  }

}
