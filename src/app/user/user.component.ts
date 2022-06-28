import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userName: FormControl = new FormControl('');

  userEmail: FormControl = new FormControl('');

  userPassword: FormControl = new FormControl('');

  userAdress: FormGroup = this.formBuilder.group({
    road: [''],
    zipCode: [''],
    city: ['']
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    
  }

}
