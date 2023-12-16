import { Component } from '@angular/core';
import { EstudianteService } from '../servicios/estudiante.service';


@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})

export class EstudiantesComponent {

  constructor(private servicio: EstudianteService){}

  dataEstudiante: any = {};

  itemSeleccionado: any = {};
  modoEdicion: boolean = false;

  //MÉTODO GET
  ngOnInit(){
    this.servicio.getEstudiantes().subscribe(estudiantes => {
      this.dataEstudiante= estudiantes
    })
  }

  //MÉTODO POST
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

    //METODO EDICION
    editarEstudiante(dataEstudiante: any): void {
      this.itemSeleccionado = {dataEstudiante};
      this.modoEdicion = true;
    }

//MÉTODO PUT
  actualizarEstudiante(id: any, nombre:any, apellido:any, email:any, telefono:any){

    const temp={
      "id":id,
      "nombre": nombre,
      "apellido": apellido,
      "email": email,
      "telefono": telefono
    }
    this.servicio.putEstudiantes(id).subscribe(() => this.guardarEstudiante);
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
    this.servicio.deleteEstudiantes(id).subscribe(() => this.servicio.getEstudiantes());
    location.reload()
  }

  //Submit (modo edicion)
  onSubmit():void{
    this.servicio.putEstudiantes(this.itemSeleccionado).subscribe(() => {
      this.servicio.getEstudiantes();
      this.modoEdicion = false;
    });
  }

  cancelar(): void{
    this.modoEdicion = false;
  }
}
