import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Kitten } from '../models/kitten.model';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent implements OnInit {

  @Output() submitKitten: EventEmitter<Kitten> = new EventEmitter;

  kittenForm: FormGroup = this.form.group({
    name: ['', Validators.required],
    race: ['', Validators.required],
    birthDate: ['', Validators.required],
    img: ['', Validators.required]
  });

  constructor(private form: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const value = this.kittenForm.value;
    console.log(value);
    if (this.kittenForm.valid&&value.name&&value.race&&value.birthDate&&value.img) {
      this.submitKitten.emit(      
        new Kitten(
          value.name,
          value.race,
          new Date(value.birthDate),
          value.img
        )
      )
    }
  }
}
