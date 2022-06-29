import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Address } from '../models/address.model';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userName: FormControl = new FormControl('');

  userEmail: FormControl = new FormControl('');

  userPassword: FormControl = new FormControl('');

  userAddress: FormGroup = this.formBuilder.group({
    road: [''],
    zipCode: [''],
    city: ['']
  });

  newUser: User = new User('','','',new Address('','',''));

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.newUser = new User(
      this.userName.value,
      this.userEmail.value,
      this.userPassword.value,
      new Address(
        this.userAddress.controls['road'].value,
        this.userAddress.controls['zipCode'].value,
        this.userAddress.controls['city'].value
      )
    );    
  }

}
