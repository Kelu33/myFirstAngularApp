import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
  title = 'Lucas';

  setRoleForm: FormGroup = this.formBuider.group({
    role: ['ANONYMOUS']
  })

  constructor(
    private formBuider: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService.setRole(this.setRoleForm.value.role);
    console.log(this.userService.getRole())
  }

  onChange(): void {
    this.userService.setRole(this.setRoleForm.value.role);
    this.router.navigate(['/']);
    console.log(this.userService.getRole())
  }


}

