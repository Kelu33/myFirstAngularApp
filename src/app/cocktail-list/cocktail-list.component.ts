import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';
import { CocktailService } from '../services/cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css'],
  providers:  [ CocktailService ]
})
export class CocktailListComponent implements OnInit {

  public cocktails: Cocktail[] = [];

  constructor(public cocktail: CocktailService) { }

  ngOnInit(): void {
    this.cocktails = this.cocktail.getCocktails()
  }

}
