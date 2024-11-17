import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Necesario para [(ngModel)]

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // Aquí debes importar FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
