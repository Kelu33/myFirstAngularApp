import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  apiUrl: string = 'https://api.nasa.gov/planetary/apod?api_key=5JRhGKLO3eAJKGPgEnPXeiNfPBdUhQ2cUWxjfWhA';

  constructor( private http: HttpClient ) { }

  getImageOfTheDay(): Observable<string> {

    const obs: Observable<any> = this.http.get(this.apiUrl);
    const treatement = (param: any) => {
      return param.hdurl as string
    }

    return obs.pipe( map(treatement));

  }
}
