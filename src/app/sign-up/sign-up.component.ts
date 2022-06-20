import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: User = new User('','','','');
  isSubmitted: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.user);
    this.isSubmitted = true;
  }

  onReset(): void {
    this.isSubmitted = false;
  }

}
