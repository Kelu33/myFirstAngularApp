import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';
import { CocktailService } from '../services/cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  public cocktails: Cocktail[] = [];

  constructor(public cocktailService: CocktailService) { }

  ngOnInit(): void {
    this.cocktailService.getCocktails().subscribe(
      (c: Cocktail[]) => {
        this.cocktails = c;

      }
      
    )
    
  }

}
