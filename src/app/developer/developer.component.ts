import { Component, OnInit } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  public developer: Developer = new Developer(
    'Baste', 'Lucas', 37, 'male', 'It\'s all good man!', 
    [
      new Skill(
        'Angular',
        'https://angular.io/assets/images/logos/angular/logo-nav@2x.png',
        'https://angular.io/'
        ), 
      new Skill(
        'Symfony', 
        'https://symfony.com/images/logos/header-logo.svg', 
        'https://symfony.com/'
        )
    ]
  )

  constructor() { }

  ngOnInit(): void {    
  }

}
