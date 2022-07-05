import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokedex } from './models/pokedex.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  apiUrl: string = 'assets/pokedex.json';

  constructor(public http: HttpClient) { }

  getPokemonList(): Observable<Pokedex> {
    return this.http.get<Pokedex>(this.apiUrl);

  }
}

