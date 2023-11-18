import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('/api/students', this.estudiante).subscribe(() => {
      alert('Registro exitoso!');
    });
  }
}
