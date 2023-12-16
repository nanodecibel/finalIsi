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

  id:any
  nombre:any
  apellido:any
  email:any
  telefono:any


  //Form
  cargar(form:any){
    this.servicio.postEstudiantes(form.value).subscribe()

    console.log(form.value)
    location.reload()
  }

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
      this.itemSeleccionado = {...dataEstudiante};
      this.modoEdicion = true;
      location.reload()
    }

//MÉTODO PUT
  actualizarEstudiante(id:any, nombre:any, apellido:any, email:any, telefono:any){
      const temp={
      "id":id,
      "nombre": nombre,
      "apellido": apellido,
      "email": email,
      "telefono": telefono
    }
    this.servicio.putEstudiantes(temp, id).subscribe();
    location.reload()
  }

  guardar(): void {
    if (this.modoEdicion) {
      const index = this.dataEstudiante.findIndex((e: { nombre: any; }) => e.nombre === this.itemSeleccionado.nombre);
      this.dataEstudiante[index] = { ...this.itemSeleccionado };
    } else {
      const id = this.dataEstudiante.length + 1;
      this.dataEstudiante.push({ id, ...this.itemSeleccionado });
    }

    this.itemSeleccionado = {};
    this.modoEdicion = false;
    location.reload()
  }


  //MÉTODO DELETE
  eliminarEstudiante(id:any){

    this.servicio.deleteEstudiantes(id).subscribe();
    location.reload()
  }
}
