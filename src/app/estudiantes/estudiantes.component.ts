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
  guardarEstudiante(id: string, nombre:string, apellido:string, email:string, telefono:string){
    const ide:number=parseInt(id)
    const temp ={
      "id":ide,
      "nombre": nombre,
      "apellido": apellido,
      "email": email,
      "telefono": telefono
    }
    this.servicio.postEstudiantes(temp).subscribe();
    }

    //METODO EDICION
    editarEstudiante(dataEstudiante: any): void {
      this.itemSeleccionado = {...dataEstudiante};
      this.modoEdicion = true;
    }

//MÉTODO PUT
  actualizarEstudiante(id: string, nombre:string, apellido:string, email:string, telefono:string){
    const ide:number= parseInt(id)
    const temp={
      "id":ide,
      "nombre": nombre,
      "apellido": apellido,
      "email": email,
      "telefono": telefono
    }
    this.servicio.putEstudiantes(temp, ide).subscribe();
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
  }


  //MÉTODO DELETE
  eliminarEstudiante(id:string){
    const ide: number= parseInt(id)
    this.servicio.deleteEstudiantes(ide).subscribe();

  }
}
