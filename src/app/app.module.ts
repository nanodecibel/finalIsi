import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { FormsModule } from '@angular/forms';
import { CursosComponent } from './cursos/cursos.component';


@NgModule({
  declarations: [
    AppComponent,
    EstudiantesComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
