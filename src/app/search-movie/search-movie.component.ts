import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  types: string[] = ['movie', 'show', 'episode'];
  sheets: string[] = ['complete', 'short'];

  movieForm = this.formbuilder.group({

    idTitle: this.formbuilder.group({      
      identifier: ['', Validators.required],
      title: ['', Validators.required]

    }, {validator: this.requireOne()}),

    types: ['', Validators.required],

    releaseYear: ['',
    [ Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear()) ]
    ],

    sheets: ['', Validators.required]
  });

  constructor( private formbuilder: FormBuilder ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.warn(this.movieForm.value);

  }

  requireOne(): void {
    console.log('TODO');
    
  }

}
