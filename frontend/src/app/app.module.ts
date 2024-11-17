import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Necesario para [(ngModel)]

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent  // Declaramos el AppComponent aquí
  ],
  imports: [
    BrowserModule,
    FormsModule  // Importamos FormsModule para usar ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
