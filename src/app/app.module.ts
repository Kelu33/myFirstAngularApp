import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
