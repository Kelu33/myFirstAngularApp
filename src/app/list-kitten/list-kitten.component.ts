import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Kitten } from '../models/kitten.model';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent implements OnInit {

  @Output() sendKitten: EventEmitter<Kitten> = new EventEmitter;

  @Input() kittens: Kitten[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  adoptKitten(k: Kitten): void {
    this.sendKitten.emit(k);
    // this.kittens = this.kittens.filter(kitten => JSON.stringify(kitten)!==JSON.stringify(k))

  }

}
