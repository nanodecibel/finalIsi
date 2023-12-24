import { Component } from '@angular/core';
import { EstudianteService } from '../servicios/estudiante.service';


@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})

export class EstudiantesComponent {

  constructor(private servicio: EstudianteService) { }

  estudiantes: any = [];

  itemSeleccionado: any = {};
  modoEdicion: boolean = false;




  //MÉTODO GET
  ngOnInit() {
    this.servicio.getEstudiantes().subscribe(estudiantes => {
      this.estudiantes = estudiantes
    })
  }

  //MÉTODO POST
  guardarEstudiante(id: any, nombre: any, apellido: any, email: any, telefono: any) {

    const temp = {
      "id": id,
      "nombre": nombre,
      "apellido": apellido,
      "email": email,
      "telefono": telefono
    }
    this.servicio.postEstudiantes(temp).subscribe();
    location.reload()
  }

  //METODO EDICION
  editarEstudiante(id: any): void {
    this.itemSeleccionado = id;
    this.modoEdicion = true;
  }

  //MÉTODO PUT
  actualizarEstudiante(estudiantes: any) {
    console.log(estudiantes)
    this.servicio.putEstudiantes(estudiantes).subscribe();
  }

    //MÉTODO DELETE
  eliminarEstudiante(estudiantes: any): void {
    this.servicio.deleteEstudiantes(estudiantes).subscribe(
      () => {
        console.log('Estudiante eliminado con éxito');
        location.reload();
      },
    );
  }

  //Submit ok
  onSubmit(): void {
    this.servicio.putEstudiantes(this.itemSeleccionado).subscribe(() => {
      this.servicio.getEstudiantes();
      this.modoEdicion = true;
      location.reload()
    });
  }

  cancelar(): void {
    this.modoEdicion = false;
  }
}
