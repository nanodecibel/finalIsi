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

  //MÉTODO DELETE
  eliminarEstudiante(id:string){
    const ide: number= parseInt(id)
    this.servicio.deleteEstudiantes(ide).subscribe();

  }
}
