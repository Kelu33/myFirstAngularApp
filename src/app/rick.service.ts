import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Character } from './models/character-model';
import { characterId } from './models/characterId.model';

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

  getCharactersIdsAndNames(): Observable<characterId[]> {

    const obs: Observable<any> = this.http.get(this.apiUrl);

    const treatement = (data: any) => {

      let users: characterId[] = [];

      for (let result of data.results) {
        let user = {
          id: result.id,
          name: result.name
        }
        users.push(user);

      }      
      return users
    }

    return obs.pipe( map(treatement));    

  }

}
