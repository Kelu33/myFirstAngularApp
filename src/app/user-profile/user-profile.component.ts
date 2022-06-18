import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {  

  User: User = {
    name : 'Brogniart',
    firstName : 'Denis',
    age : 25,
    quote : '',
    photo : 'assets/pictures/denis.jpg',
    isAgeRevealed : false
  };

  constructor() { }

  ngOnInit(): void {
  }

  toggleShowMyAge(): void {
    this.User.isAgeRevealed = !this.User.isAgeRevealed;
  }

}
