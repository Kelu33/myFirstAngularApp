import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Character } from './models/character-model';
import { RickService } from './rick.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
  title = 'Lucas';

  character = new Character('','','','','');

  characterSelect: FormGroup = this.formBuilder.group(
    {
      nb: ['']
    }
  )

  constructor( 
    private rick: RickService,
    private formBuilder: FormBuilder
    ) {}

  ngOnInit(): void {
    this.rick.getCharacter('1').subscribe(
      (param: Character) => {
        this.character = param;
      }
    );
  }

  onSubmit(nb: string): void {
    this.rick.getCharacter(nb).subscribe(
      (param: Character) => {
        this.character = param;
      }
    );
  }
}
