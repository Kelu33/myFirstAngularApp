import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Character } from './models/character-model';
import { characterId } from './models/characterId.model';
import { RickService } from './rick.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
  title = 'Lucas';

  characters: characterId[] = [];

  character: Character = new Character('','','','','');

  characterSelect: FormGroup = this.formBuilder.group(
    { nb: ['1'] }
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
    this.rick.getCharactersIdsAndNames().subscribe(
      (param: characterId[]) => {
        this.characters = param;
      }
    )
  }

  onChange(): void {
    const nb: string = this.characterSelect.value.nb;
    this.rick.getCharacter(nb).subscribe(
      (param: Character) => {
        this.character = param;
      }
    );
  }

}
