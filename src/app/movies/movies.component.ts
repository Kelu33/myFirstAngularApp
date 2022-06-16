import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MOVIES } from '../movies-list';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies = MOVIES;

  showMovies: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleShowMovie(): void {
    this.showMovies = !this.showMovies;
  }

}
