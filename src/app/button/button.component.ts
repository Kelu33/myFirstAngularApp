import { Component, OnInit, Input } from '@angular/core';
import { Style } from '../models/style.model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() style: Style = new Style('','');

  @Input() index: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
