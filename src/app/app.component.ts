import { Component } from '@angular/core';
import { share } from 'rxjs';
import { Icon } from './models/icon.model';
import { Style } from './models/style.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'Lucas';

}
