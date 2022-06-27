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
    song();
  }

  
}

// OG => 455 chars
// function song(
//   parents = ['Baby', 'Mommy', 'Daddy', 'Grandma', 'Grandpa', 'Let\'s go hunt'],
//   lyrics = '', i = 0
//   ) {    
//   let shark = parents[i];
//   if (i < parents.length -1) shark += ' shark';
//   let doo = 'doo doo doo doo doo doo \n';
//   for (let j = 0; j < 3; j++) lyrics += shark + ', ' + doo;
//   lyrics += shark + '!\n';
//   i++;
//   if (i < parents.length) song(parents, lyrics, i);
//   else {
//     lyrics += 'Run away,…';
//     console.log(lyrics);
//   }
// }

// factorized => 275 chars
// function song(p=['Baby','Mommy','Daddy','Grandma','Grandpa','Let\'s go hunt'],l='',i=0){    
//   let s=p[i];
//   i<p.length-1&&(s+=' shark');
//   for(let j=0;j<3;j++)l+=s+', doo doo doo doo doo doo \n';
//   l+=s+'!\n';
//   ++i<p.length?song(p, l, i):(l+='Run away,…',console.log(l));
// }

// Minified => 256 chars
function song(b=["Baby","Mommy","Daddy","Grandma","Grandpa","Let's go hunt"],a="",c=0){let d=b[c];c<b.length-1&&(d+=" shark");for(let e=0;e<3;e++)a+=d+", doo doo doo doo doo doo \n";a+=d+"!\n",++c<b.length?song(b,a,c):(a+="Run away,\u2026",console.log(a))}
