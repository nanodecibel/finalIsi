import { Component } from '@angular/core';
import { EstudianteService } from '../service/estudiante.service';


@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})

export class EstudiantesComponent {
  estudiante = {
    nombre: '',
    apellido: '',
    email: '',
    telefono: ''
  };

  constructor(private estudianteService: EstudianteService) {}

  onSubmit(estudianteData: any) {
    this.estudianteService.agregarEstudiante(estudianteData).subscribe(() => {
      alert('Registro exitoso!');
    });
  }
}
