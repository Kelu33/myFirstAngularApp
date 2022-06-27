import { Injectable } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  cocktails: Cocktail[] = [new Cocktail('',0,'')];

  constructor() { }

  getCocktails(): Cocktail[] {
    return this.cocktails;
  }
}
