import { Component } from '@angular/core';

@Component({
  selector: 'app-calificaciones-evalaciones',
  templateUrl: './calificaciones-evalaciones.component.html',
  styleUrls: ['./calificaciones-evalaciones.component.css']
})
export class CalificacionesEvalacionesComponent {
  nombre: string = '';
  email: string = '';

  onSubmit() {
    console.log('Nombre:', this.nombre);
    console.log('Correo Electrónico:', this.email);
  }
}
