import { Component, OnInit } from '@angular/core';
import { Pokedex } from '../models/pokedex.model';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemonsList: Pokemon[] = [];

  constructor( private pokemonService: PokemonService ) { }

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe(
      (param: Pokedex) => { 
        console.log(param)
        this.pokemonsList = param.cards 
      }
    );
  }

}
