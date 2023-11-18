import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalificacionesEvalacionesComponent } from './calificaciones-evalaciones/calificaciones-evalaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    CalificacionesEvalacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
