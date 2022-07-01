import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shark',
  templateUrl: './shark.component.html',
  styleUrls: ['./shark.component.css']
})
export class SharkComponent {

  public lyrics: HTMLParagraphElement = document.createElement('p');

  ngAfterViewInit(): void {    
    this.lyrics.innerHTML = this.song();
    document.body.append(this.lyrics);
    console.log('Song function nb of characters : ' + this.charNb(this.Song));
    console.log('Shark Song :');
    console.log(this.Song());    
  }

  charNb(fn: Function): number {
    return fn.toString().length;
  }

  song(l=''){['Baby','Mommy','Daddy','Grandma','Grandpa',0].map(s=>{s?s+=' shark':s=`Let's go hunt`;l+=`${s}, ${'doo '.repeat(6)}<br>`.repeat(3)+s+`!<br><br>`});return l+='Run away,…'}

  Song(l=''){['Baby','Mommy','Daddy','Grandma','Grandpa',0].map(s=>{s?s+=' shark':s=`Let's go hunt`;l+=`${s}, ${'doo '.repeat(6)}\n`.repeat(3);l+=`${s}!\n`;});return l+='Run away,…'}
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
