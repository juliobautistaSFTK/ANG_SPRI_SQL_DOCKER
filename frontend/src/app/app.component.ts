import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Necesario para el two-way binding con ngModel

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],  // Importamos FormsModule para usar ngModel
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  clave: string = '';  // Variable que almacena la clave ingresada
  descripcion: string = '';  // Variable que almacena la descripción de la clave

  // Objeto que simula una base de datos de claves y descripciones
  clavesDescripcion: { [key: string]: string } = {
    'clave1': 'Descripción de la clave 1: Esta es una descripción detallada.',
    'clave2': 'Descripción de la clave 2: Aquí va la descripción para la clave 2.',
    'clave3': 'Descripción de la clave 3: Descripción especial para la clave 3.',
  };

  // Función para obtener la descripción según la clave ingresada
  obtenerDescripcion(): void {
    const descripcion = this.clavesDescripcion[this.clave];
    this.descripcion = descripcion || 'Clave no encontrada. Por favor, ingrese una clave válida.';
  }

  // Función para actualizar o agregar una nueva descripción a la clave
  actualizarDescripcion(): void {
    if (this.clave && this.descripcion) {
      this.clavesDescripcion[this.clave] = this.descripcion;
      alert('Descripción actualizada o agregada para la clave: ' + this.clave);
    } else {
      alert('Debe ingresar tanto una clave como una descripción.');
    }
  }
}
