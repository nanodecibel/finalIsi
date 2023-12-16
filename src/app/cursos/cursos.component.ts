import { Component } from '@angular/core';
import { CursosService } from '../servicios/cursos.service';
interface Estudiante{
  codigo: string;
  nombre: string;
}
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})

export class CursosComponent {
  constructor ( private servicio: CursosService){}
  dataCursos:any={};

  ngOnInit(){
    this.servicio.getCursos().subscribe(cursos =>{
      this.dataCursos=cursos
    })
  }
}
