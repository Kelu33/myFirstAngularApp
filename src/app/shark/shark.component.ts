import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shark',
  templateUrl: './shark.component.html',
  styleUrls: ['./shark.component.css']
})
export class SharkComponent implements OnInit {

  public song: HTMLParagraphElement = document.createElement('p');

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    buildSong();
  }

  
}
function buildSong(b=["Baby","Mommy","Daddy","Grandma","Grandpa","Let's go hunt"],a="",c=0){
  let d=b[c]+" shark";
  for(let e=0;e<3;e++)a+=d+", doo doo doo doo doo doo \n";
  a+=d+"!\n";
  ++c<b.length?buildSong(b,a,c):(a+="Run away,\u2026",console.log(a))
}
// function buildSong(
//   parents = ['Baby', 'Mommy', 'Daddy', 'Grandma', 'Grandpa', 'Let\'s go hunt'],
//   song = '', i = 0
//   ) {
//   let shark = parents[i] + ' shark';
//   let doo = 'doo doo doo doo doo doo \n';
//   for (let j = 0; j < 3; j++) song += shark + ', ' + doo;

//   song += shark + '!\n';
//   i++;

//   if (i < parents.length) buildSong(parents, song, i);
//   else {
//     song += 'Run away,…';
//     console.log(song);
//   }
// }
