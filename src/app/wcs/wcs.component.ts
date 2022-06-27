import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-wcs',
  templateUrl: './wcs.component.html',
  styleUrls: ['./wcs.component.css']
})
export class WcsComponent implements OnInit {

  name: string | null = '';

  constructor( private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.name = params.get('name');
    })
  }
}
