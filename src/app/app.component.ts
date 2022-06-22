import { Component } from '@angular/core';
import { Icon } from './models/icon.model';
import { Style } from './models/style.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'Lucas';

  styles: Style[] = [
    new Style('blue','Button_'),
    new Style('#fff', 'Button_', new Icon('&#x2192;', true)),
    new Style('#bada55', 'Button_'),
    new Style('grey', 'Button_', new Icon('&#x2192;', false)),
    new Style('green', 'Button_'),
  ]

}
