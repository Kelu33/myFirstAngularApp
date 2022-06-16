import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {  

  User: User = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg',
    isAgeRevealed : false
  };

  constructor() { }

  ngOnInit(): void {
  }

  toggleShowMyAge(): void {
    this.User.isAgeRevealed = !this.User.isAgeRevealed;
  }

}
