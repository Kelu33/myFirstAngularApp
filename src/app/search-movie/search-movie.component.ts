import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { isRequiredValidator, rangeDateValidator } from '../customValidator';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  minYear: number = 1900;
  currentYear: number = new Date().getFullYear();

  movieForm: FormGroup = this.formbuilder.group(
    {
      head: this.formbuilder.group(
        {
          identifier: [''],
          title: ['']
        },
        { validators: isRequiredValidator('identifier', 'title') }      
      ),
      types: this.formbuilder.array(['', '', '']),
      releaseYear: [
        '',
        rangeDateValidator(this.minYear, this.currentYear) 
      ],
      sheets: this.formbuilder.array(['',''])
    }
  );

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.types.patchValue(['film', 'série', 'épisode']);
    this.sheets.patchValue(['complète', 'courte']);
  }

  onSubmit(): void {
    console.log(JSON.stringify(this.movieForm.value));
  }

  get types() {
    return this.movieForm.get('types') as FormArray;
  }

  get sheets() {
    return this.movieForm.get('sheets') as FormArray;
  } 

}
