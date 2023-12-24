import { Component } from '@angular/core';
import { CalificacionesService } from '../servicios/calificaciones.service';

@Component({
  selector: 'app-calificaciones-evalaciones',
  templateUrl: './calificaciones-evalaciones.component.html',
  styleUrls: ['./calificaciones-evalaciones.component.css']
})
export class CalificacionesEvalacionesComponent {

  constructor(private servicio: CalificacionesService){}

  //nombre: string = '';
  //email: string = '';
  dataCalificacion: any = [];
  itemSeleccionado: any = {};
  modoEdicion: boolean = false;

  //onSubmit() {
  //  console.log('Nombre:', this.nombre);
  //  console.log('Correo Electrónico:', this.email);
  //}

  //MÉTODO GET ok
  ngOnInit(){
    this.servicio.getCalificacion().subscribe(calificaciones => {
      this.dataCalificacion= calificaciones
    })
  }

  //MÉTODO POST ok
  guardarCalificacion(id:any, nombre:any, materia:any, calificacion:any){
    const temp ={
      "id":id,
      "nombre": nombre,
      "materia": materia,
      "calificacion": calificacion
    }
    this.servicio.postCalificacion(temp).subscribe();
    location.reload()
  }

  //METODO EDICION ok
  editarCalificacion(id: any): void {
    this.itemSeleccionado = id;
    this.modoEdicion = true;
  }

  actualizarCalificacion(calificaciones:any){
    this.servicio.putCalificacion(calificaciones).subscribe();
  }

  //MÉTODO DELETE
  eliminarCalificacion(id:any):void{
    this.servicio.deleteCalificacion(id).subscribe();
    location.reload()
  }

  //onSubmit OK
  onSubmit():void{
    this.servicio.putCalificacion(this.itemSeleccionado).subscribe(() => {
      this.servicio.getCalificacion();
      this.modoEdicion = false;
      location.reload()
    });
  }

  cancelar(): void {
    this.modoEdicion = false;
  }

}
