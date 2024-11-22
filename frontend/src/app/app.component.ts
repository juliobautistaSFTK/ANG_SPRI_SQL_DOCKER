import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <input [(ngModel)]="clave" placeholder="Ingrese la clave" />
    <button (click)="consultarDescripcion()">Consultar</button>
    <p *ngIf="descripcion">Descripción: {{ descripcion }}</p>
  `
})
export class AppComponent {
  clave: number = 0;  // Inicializamos con un valor predeterminado
  descripcion: string = '';  // Inicializamos con una cadena vacía

  constructor(private http: HttpClient) {}

  consultarDescripcion() {
    this.http.get(`http://localhost:8080/descripcion/${this.clave}`)
      .subscribe((data: any) => {
        this.descripcion = data.descripcion;
      });
  }
}
