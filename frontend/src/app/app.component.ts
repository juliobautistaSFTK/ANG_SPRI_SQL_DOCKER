import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';  // Asegúrate de importar HttpErrorResponse


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  clave: string = '';
  descripcion: string = '';

  constructor(private http: HttpClient) { }

  // Método para manejar el submit
  onSubmit() {
    if (this.clave) {
      this.getDescripcion(this.clave); // Llama a la API si la clave está definida
    }
  }

  // Método para obtener la descripción
  getDescripcion(clave: string) {
    this.http.get<any>(`http://localhost:8080/descripcion/${clave}`).subscribe(
      response => {
        this.descripcion = response.descripcion; // Asigna la respuesta al campo 'descripcion'
      },
      error => {
        console.error('Error al obtener la descripción:', error);
      }
    );
  }
}
