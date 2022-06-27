import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name: string = '';

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.router.navigate(['/wcs', this.name]);

  }

}
