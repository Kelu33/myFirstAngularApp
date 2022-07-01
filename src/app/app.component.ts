import { Component, OnInit } from '@angular/core';
import { NasaService } from './nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
  title = 'Lucas';

  imgOfTheDay: string = '';

  constructor( private nasaService: NasaService ) {}

  ngOnInit(): void {
    this.nasaService.getImageOfTheDay().subscribe(
      (param: string) => {
        this.imgOfTheDay = param;
      }
    );

  }

}
