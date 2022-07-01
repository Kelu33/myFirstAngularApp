import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Cocktail } from '../models/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private httpClient: HttpClient) { }

  getCocktails(): Observable<Cocktail[]> {
    const observable: Observable<any> = this.httpClient.get("assets/cocktails.json");
    const  treatment  = ( c: Cocktail[]) => {
        return  c as Cocktail[];
    };

    return  observable.pipe( map( treatment) );

  }
}