import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  private url = 'http://localhost:4200/estudiantes';

  constructor(private http: HttpClient) { }

  agregarEstudiante(estudiante: any) {
    return this.http.post(this.url, estudiante);
  }
}
