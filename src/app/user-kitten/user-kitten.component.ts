import { Component, Input, OnInit } from '@angular/core';
import { Kitten } from '../models/kitten.model';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css']
})
export class UserKittenComponent implements OnInit {

  @Input()  kittens: Kitten[] = [];

  displayedKitten: Kitten = new Kitten('','',new Date,'');

  isDisplay: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  displayKittenInfo(kitten: Kitten): void {
    this.displayedKitten = kitten;
    this.isDisplay = true;
  }

  hideKittenInfo(): void {
    this.isDisplay = false;    
  }

}
