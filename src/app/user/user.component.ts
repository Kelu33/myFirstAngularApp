import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../email-validator';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm: FormGroup = this.formBuilder.group({
    userName: [''],
    credentials: this.formBuilder.group({
      userEmail: ['', [Validators.required, emailValidator]],
      userPassword: ['']
    }),
    userAddress: this.formBuilder.group({
      road: [''],
      zipCode: [''],
      city: ['']
    })
  });

  newCredentials: string ='';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.newCredentials = JSON.stringify(
      this.userForm.value.credentials,
      null, 1
    );       
  }

}
