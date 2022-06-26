import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MovieForm } from '../models/movie-form.model';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {
  
  typesList: string[] = ['film', 'série', 'épisode'];
  defaultType: string = 'série';

  minYear: number = 1900;
  currentYear: number = new Date().getFullYear();
  
  sheetsList: string[] = ['complète', 'courte'];
  defaultSheet: string = 'courte';

  movieForm: FormGroup = new MovieForm(
    this.formbuilder,
    { ctr1: 'identifier', ctr2: 'title'},
    { min: this.minYear, max: this.currentYear }
  ).group;

  initialValues: FormControl = new FormControl;

  constructor( private formbuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.types.setValue(this.defaultType);
    this.sheets.patchValue(this.defaultSheet);
    this.initialValues = this.movieForm.value;

    this.movieForm.valueChanges.subscribe(value => {
      console.log(this.prettyJson(value));
    });
  }

  onSubmit(): void {
    console.log(this.prettyJson(this.movieForm.value));
  }

  onReset(): void {
    this.movieForm.reset(this.initialValues);
  }

  prettyJson(formValue: FormData): string {
    return JSON.stringify(formValue, null, 1);
  }

  get types() {
    return this.movieForm.get('types') as FormControl;
  }

  get sheets() {
    return this.movieForm.get('sheets') as FormControl;
  } 

}
