import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { refValidator } from './custom-validators';
import { Article } from './models/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'Lucas';

  articlesList: Article[] = [];

  articleForm: FormGroup = this.formBuilder.group({
    ref: ['', [Validators.required, refValidator]],
    name: ['', Validators.required],
    description: ['', Validators.required]

  })

  constructor( private formBuilder: FormBuilder ) {}

  onSubmit(): void {
    if (this.articleForm.valid) {
      const controls = this.articleForm.controls;
      this.articlesList.push(
        new Article(
          controls['ref'].value,
          controls['name'].value,
          controls['description'].value
        )
      )
    }
  }
}
