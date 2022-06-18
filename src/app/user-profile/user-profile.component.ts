import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: User = new User(
    'assets/pictures/denis.jpg', 'Denis', 'Brogniart', 55, 'Ah !'
  );

  isAgeRevealed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleIsAgeRevealed(): void {
    this.isAgeRevealed = ! this.isAgeRevealed;
  }

}
