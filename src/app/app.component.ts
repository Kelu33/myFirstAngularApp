import { Component, } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Lucas';

  public onomatopoeias: string[] = ['whoosh', 'purr'];

  onReceiveNewOnomatopia($event: any): void {
    this.onomatopoeias.push($event);
  };

}
