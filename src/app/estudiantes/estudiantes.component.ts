import { Component } from '@angular/core';


@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})

export class EstudiantesComponent {
  estudiantes = [
    { id: 1, nombre: 'Juan', apellido: 'Pérez', email: 'juan.perez@hotmail.com', telefono: '0982737190' },
    { id: 2, nombre: 'María', apellido: 'García', email: 'maria.garcia@gmail.com', telefono: '0999238183' },
    { id: 3, nombre: 'Pedro', apellido: 'Rodríguez', email: 'pedro.rodriguez@hotmail.com', telefono: '0984124289' }
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
      const index = this.estudiantes.findIndex(e => e.id === this.estudianteSeleccionado.id);
      this.estudiantes[index] = { ...this.estudianteSeleccionado };
    } else {
      const id = this.estudiantes.length + 1;
      //const nombre = this.estudiantes.values;
      //const apellido = this.estudiantes.values;
      //const email = this.estudiantes.values;
      //const telefono = this.estudiantes.values;
      //this.estudiantes.push({ id, nombre, apellido, email, telefono, ...this.estudianteSeleccionado }
      this.estudiantes.push({ id, ...this.estudianteSeleccionado }
        );
    }

    this.estudianteSeleccionado = {};
    this.modoEdicion = false;
  }

  eliminarEstudiante(estudiante: any): void {
    const index = this.estudiantes.findIndex(e => e.id === estudiante.id);
    this.estudiantes.splice(index, 1);
  }
}
