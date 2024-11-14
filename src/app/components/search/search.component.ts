import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  clave: string = '';
  mensaje: string = '';

  localizarDato(): void {
    if (this.clave === '1234') {
      this.mensaje = '¡Dato localizado!';
    } else {
      this.mensaje = 'Dato no encontrado.';
    }
  }
}
