import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  clave: string = '';
  descripcion: string = '';

  // Objeto con las claves y sus descripciones
  clavesDescripcion = {
    'clave1': 'Descripción de la clave 1',
    'clave2': 'Descripción de la clave 2',
    'clave3': 'Descripción de la clave 3',
  };

  // Función para obtener la descripción según la clave
  obtenerDescripcion() {
    const descripcion = this.clavesDescripcion[this.clave];
    this.descripcion = descripcion ? descripcion : 'Clave no encontrada';
  }

  // Función para actualizar la descripción
  actualizarDescripcion() {
    this.clavesDescripcion[this.clave] = this.descripcion;
    alert('Descripción actualizada');
  }
}
