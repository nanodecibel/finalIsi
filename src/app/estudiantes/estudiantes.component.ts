import { Component } from '@angular/core';
import { EstudianteService } from '../servicios/estudiante.service';


@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})

export class EstudiantesComponent {

  constructor(private servicio: EstudianteService){}

  estudiantes: any = [];

  itemSeleccionado: any = {};
  modoEdicion: boolean = false;

  //MÉTODO GET ok
  ngOnInit(){
    this.servicio.getEstudiantes().subscribe(estudiantes => {
      this.estudiantes= estudiantes
    })
  }

  //MÉTODO POST ok
  guardarEstudiante(id: any, nombre:any, apellido:any, email:any, telefono:any){

    const temp ={
      "id":id,
      "nombre": nombre,
      "apellido": apellido,
      "email": email,
      "telefono": telefono
    }
    this.servicio.postEstudiantes(temp).subscribe();
    location.reload()
    }

    //METODO EDICION ok
    editarEstudiante(id: any): void {
      this.itemSeleccionado = id;
      this.modoEdicion = true;
    }

//MÉTODO PUT
  actualizarEstudiante(id: any, nombre:any, apellido:any, email:any, telefono:any){

    this.estudiantes={
      "id":id,
      "nombre": nombre,
      "apellido": apellido,
      "email": email,
      "telefono": telefono
    }
    this.servicio.putEstudiantes(this.estudiantes).subscribe();
  }

  //guardar(): void {
  //  if (this.modoEdicion) {
  //    const index = this.dataEstudiante.findIndex((e: { estudiantes: any; }) => e.estudiantes === this.itemSeleccionado.nombre);
  //    this.dataEstudiante[index] = { ...this.itemSeleccionado };
  //  } else {
  //    const id = this.dataEstudiante.length + 1;
  //    this.dataEstudiante.push({ id, ...this.itemSeleccionado });
  //  }

  //  this.itemSeleccionado = {};
  //  this.modoEdicion = false;
  //  location.reload()
  //}


  //MÉTODO DELETE
  eliminarEstudiante(id:any){
    this.servicio.deleteEstudiantes(id).subscribe();
    location.reload()
  }

  //Submit ok
  onSubmit():void{
    this.servicio.putEstudiantes(this.itemSeleccionado).subscribe(() => {
      this.servicio.getEstudiantes();
      this.modoEdicion = true;
      location.reload()
    });
  }

  cancelar(): void{
    this.modoEdicion = false;
  }
}
