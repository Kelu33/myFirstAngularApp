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
      'Cochon',
      new Date('12/6/2017'),
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4N58SDcVpLVoFc_fECHBwqr25ViRhLg_sGr2L84qc&s'
    ),
    new Kitten(
      'Mr. Kitty',
      'Chat de gouttière',
      new Date('8/2/2019'),
      'https://static.wikia.nocookie.net/southpark/images/5/5c/Mrkittybadkitty.gif'
    )
  ];

  kittens: Kitten[] = [];

  isAlreadyAdopted: boolean = false;

  isAlreadyCreated: boolean = false;

  constructor() {}

  receivedKittenToAdopt(kitten: Kitten): void {
    this.adoptedKittens.push(kitten);
    this.kittens = this.kittens.filter(k => JSON.stringify(k)!= JSON.stringify(kitten));
    this.isAlreadyAdopted = false;   
    this.isAlreadyCreated = false;
  }

  receivedKittenToCreate(kitten: Kitten): void {
    this.isAlreadyAdopted = false;     
    this.isAlreadyCreated = false;
    const alreadyAdopted = this.adoptedKittens.map(k => JSON.stringify(k));
    const alreadyCreated = this.kittens.map(k => JSON.stringify(k));
    const strKitten = JSON.stringify(kitten);

    const isOkToAdopt = !alreadyAdopted.includes( strKitten );
    const isOkToCreate = !alreadyCreated.includes( strKitten );

    if ( !isOkToAdopt ) this.isAlreadyAdopted = true;    
    if ( !isOkToCreate ) this.isAlreadyCreated = true;
    if ( isOkToAdopt && isOkToCreate ) this.kittens.push( kitten );
  }

}
