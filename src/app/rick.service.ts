import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Character } from './models/character-model';

@Injectable({
  providedIn: 'root'
})
export class RickService {

  apiUrl: string = 'https://rickandmortyapi.com/api/character/';

  rick: Character = new Character('','','','','');

  constructor( private http: HttpClient ) { }

  getCharacter(nb: string): Observable<Character> { 

    const obs: Observable<any> = this.http.get(this.apiUrl + nb);
    
    const treatement = (data: any) => {

      this.rick.name = data.name;
      this.rick.status = data.status;
      this.rick.species = data.species;
      this.rick.image = data.image;
      this.rick.location = data.location.name;

      return this.rick as Character;
      
    }

    return obs.pipe( map(treatement));
  }

}
