import { Component } from '@angular/core';
import { Kitten } from './models/kitten.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title: string = 'Lucas';

  adoptedKittens: Kitten[] = [
    new Kitten(
      'Fluffy',
      'pig',
      new Date('12/6/2017'),
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4N58SDcVpLVoFc_fECHBwqr25ViRhLg_sGr2L84qc&s'
    ),
    new Kitten(
      'Mr. Kitty',
      'cat',
      new Date('8/2/2019'),
      'https://static.wikia.nocookie.net/southpark/images/5/5c/Mrkittybadkitty.gif'
    )
  ];

  kittens: Kitten[] = [];

  constructor() {}

  receivedKittenToAdopt(k: Kitten): void {
    this.adoptedKittens.push(k);
  }

  receivedKittenToCreate(k: Kitten): void {
    this.kittens.push(k);
  }

}
