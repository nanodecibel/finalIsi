import { Component } from '@angular/core';


@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})

export class EstudiantesComponent {
  estudiantes = [
    { nombre: 'Juan', apellido: 'Pérez', email: 'juan.perez@hotmail.com', telefono: '0982737190' },
    { nombre: 'María', apellido: 'García', email: 'maria.garcia@gmail.com', telefono: '0999238183' },
    { nombre: 'Pedro', apellido: 'Rodríguez', email: 'pedro.rodriguez@hotmail.com', telefono: '0984124289' }
  ];

  estudianteSeleccionado: any = {};
  modoEdicion: boolean = false;

  agregarEstudiante(): void {
    this.estudianteSeleccionado = {};
    this.modoEdicion = false;
  }

  editarEstudiante(estudiante: any): void {
    this.estudianteSeleccionado = { ...estudiante };
    this.modoEdicion = true;
  }

  guardarEstudiante(): void {
    if (this.modoEdicion) {
      const index = this.estudiantes.findIndex(e => e.nombre === this.estudianteSeleccionado.nombre);
      this.estudiantes[index] = { ...this.estudianteSeleccionado };
    } else {
      const id = this.estudiantes.length + 1;
      this.estudiantes.push({ id, ...this.estudianteSeleccionado });
    }

    this.estudianteSeleccionado = {};
    this.modoEdicion = false;
  }

  eliminarEstudiante(estudiante: any): void {
    const index = this.estudiantes.findIndex(e => e.nombre === estudiante.id);
    this.estudiantes.splice(index, 1);
  }
}
