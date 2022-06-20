import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  movieForm2 = this.formbuilder.group({
    id: this.formbuilder.group({
      identifier: [''],
      title: [''],
    }, { validator: this.requireOne }),
    type: this.formbuilder.array([
      [''], [''], ['']
    ]),
    releaseYear: [''],
    sheet: this.formbuilder.array([
      [''], ['']
    ])
  });

  constructor(
    private formbuilder: FormBuilder
    ) { }

  ngOnInit(): void {
  }

  requireOne(): any {
    
  }

}
