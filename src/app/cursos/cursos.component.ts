import { Component } from '@angular/core';
import { CursosService } from '../servicios/cursos.service';
//interface Estudiante{
//  codigo: string;
//  nombre: string;
//}

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})

export class CursosComponent {
  constructor(private servicio: CursosService) { }
  dataCursos: any = [];
  itemSeleccionado: any = {};
  modoEdicion: boolean = false;

  ngOnInit() {
    this.servicio.getCursos().subscribe(cursos => {
      this.dataCursos = cursos
    })
  }

  guardarCurso(id:any, nombre: any, codigo: any, numEstudiantes: any, aulaAsignada: any, docente: any) {
    const temp = {
      "id": id,
      "nombre": nombre,
      "codigo": codigo,
      "numEstudiantes": numEstudiantes,
      "aulaAsignada": aulaAsignada,
      "docente": docente
    }
    this.servicio.postCursos(temp).subscribe();
    location.reload()
  }

  actualizarCurso(cursos:any){
    this.servicio.putCursos(cursos).subscribe();
  }

  editarCurso(id: any): void {
    this.itemSeleccionado = id;
    this.modoEdicion = true;
  }

  eliminarCurso(id:any):void {
    this.servicio.deleteCursos(id).subscribe();
    location.reload()
  }

  onSubmit():void{
    this.servicio.putCursos(this.itemSeleccionado).subscribe(() => {
      this.servicio.getCursos();
      this.modoEdicion = false;
      location.reload()
    });
  }

  cancelar():void{
    this.modoEdicion = false;
  }
}
