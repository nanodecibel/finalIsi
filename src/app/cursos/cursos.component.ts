import { Component } from '@angular/core';
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
  
 estudiantesPorAsignar: Estudiante[]=[
  {codigo:'001',nombre:'Stefanny'},
  {codigo:'002',nombre:'Dayanna'},
  {codigo:'003',nombre:'Kevin'},
  {codigo:'004',nombre:'Fanny'}
 ];
 estudAsig:Estudiante[]=[];
 asignarEstud(estudiante:Estudiante){
  const index= this.estudiantesPorAsignar.indexOf(estudiante);
  if(index !==-1){
    this.estudiantesPorAsignar.splice(index,1);
    this.estudAsig.push(estudiante);
  }

 }
}
