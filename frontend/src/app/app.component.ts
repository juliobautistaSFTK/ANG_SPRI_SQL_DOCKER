import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Propiedades de clave y descripción
  clave: string = '';
  descripcion: string = '';

  // Objeto que simula la base de datos de claves y descripciones
  clavesDescripcion: { [key: string]: string } = {
    'clave1': 'Descripción de la clave 1: Esta es una descripción detallada.',
    'clave2': 'Descripción de la clave 2: Aquí va la descripción para la clave 2.',
    'clave3': 'Descripción de la clave 3: Descripción especial para la clave 3.'
  };

  // Función para obtener la descripción según la clave
  obtenerDescripcion(): void {
    const descripcion = this.clavesDescripcion[this.clave];
    this.descripcion = descripcion || 'Clave no encontrada. Por favor, ingrese una clave válida.';
  }

  // Función para actualizar la descripción de la clave
  actualizarDescripcion(): void {
    if (this.clave && this.descripcion) {
      this.clavesDescripcion[this.clave] = this.descripcion;
      alert(`Descripción actualizada o agregada para la clave: ${this.clave}`);
    }
  }
}
