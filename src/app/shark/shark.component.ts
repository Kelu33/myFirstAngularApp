import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shark',
  templateUrl: './shark.component.html',
  styleUrls: ['./shark.component.css']
})
export class SharkComponent {

  public lyrics: HTMLParagraphElement = document.createElement('p');

  ngAfterViewInit(): void {    
    this.lyrics.innerHTML = this.s();
    document.body.append(this.lyrics);
    console.log('song function nb of characters : ' + this.charNb(this.S));
    console.log('Shark Song :');
    this.S();
  }

  charNb(fn: Function): number {
    return fn.toString().length;
  }

  s(p=['Baby','Mommy','Daddy','Grandma','Grandpa',0],l=''){p.map(s=>{s?s+=' shark':s=`Let\'s go hunt`;for(let j=0;j<3;j++)l+=`${s}, ${'doo '.repeat(6)}<br>`;l+=`${s}!<br><br>`;});l+='Run away,…';return l}

  S(p=['Baby','Mommy','Daddy','Grandma','Grandpa',0],l=''){p.map(s=>{s?s+=' shark':s=`Let\'s go hunt`;for(let j=0;j<3;j++)l+=`${s}, ${'doo '.repeat(6)}\n`;l+=`${s}!\n`;});l+='Run away,…';console.log(l)}
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

// factorized => 251 chars
// const song=(p=['Baby','Mommy','Daddy','Grandma','Grandpa',`Let's go hunt`],l='',i=0)=>{let s=p[i];if(i<p.length-1)s+=' shark';for(let j=0;j<3;j++)l+=`${s}, ${'doo '.repeat(6)}\n`;l+=s+'!\n';++i<p.length?song(p,l,i):(l+='Run away,…',console.log(l));}
