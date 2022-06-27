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
    this.appendSong();
  }

  buildSong(): HTMLParagraphElement {
    let words: string[] = [
      'Baby', 'Mommy', 'Daddy', 'Grandma', 'Grandpa',
      'shark', 'doo', 'Let\'s go hunt', 'Run away'
    ];    

    let songP: HTMLParagraphElement = document.createElement('p');

    let song: string = '';

    for(let i = 0; i < 20; i++) {
      if(i < 5) song += `${words[0]} ${words[5]}, <br>`;
      else if (i < 10) song += `${words[1]} ${words[5]}, <br>`;
      else if (i < 15) song += `${words[2]} ${words[5]}, <br>`;
      else song += `${words[3]} ${words[5]}, <br>`;

    }

    songP.innerHTML = song;

    return songP;

  }
  appendSong(): void {
    this.song = this.buildSong();

    document.body.append(this.song);

  }

}
