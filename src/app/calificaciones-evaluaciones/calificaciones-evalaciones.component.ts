import { Component } from '@angular/core';
import { CalificacionesService } from '../servicios/calificaciones.service';

@Component({
  selector: 'app-calificaciones-evalaciones',
  templateUrl: './calificaciones-evalaciones.component.html',
  styleUrls: ['./calificaciones-evalaciones.component.css']
})
export class CalificacionesEvalacionesComponent {

  constructor(private servicio: CalificacionesService){}

  dataCalificacion: any = [];
  itemSeleccionado: any = {};
  modoEdicion: boolean = false;

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
    console.log(calificaciones)
    this.servicio.putCalificacion(calificaciones).subscribe();
  }

  //MÉTODO DELETE
  eliminarCalificacion(calificaciones:any):void{
    this.servicio.deleteCalificacion(calificaciones).subscribe(
      () => {
        console.log('Calificación eliminada con éxito');
        location.reload();
      },
    );
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
