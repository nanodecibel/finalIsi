import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { CursosComponent } from './cursos/cursos.component';
import { CalificacionesEvalacionesComponent } from './calificaciones-evaluaciones/calificaciones-evalaciones.component';

const routes: Routes = [
  { path: 'estudiantes', component: EstudiantesComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'calificaciones', component: CalificacionesEvalacionesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
