import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(private http: HttpClient) { }

  private API_ESTUDIANTES = "http://localhost:3000/estudiantes"

  //METODO GET
  getEstudiantes(): Observable <any>{
    return this.http.get(this.API_ESTUDIANTES);
  }

  //METODO POST
  postEstudiantes(estudiantes:any): Observable<any>{
    return this.http.post(this.API_ESTUDIANTES, estudiantes);
  }

  //METODO PUT
  putEstudiantes(estudiantes:any): Observable<any>{
    this.API_ESTUDIANTES= `${this.API_ESTUDIANTES}/${estudiantes.id}`
    return this.http.put(this.API_ESTUDIANTES, estudiantes);
  }

  //METODO DELETE
  deleteEstudiantes (estudiantes: any): Observable<any>{
    this.API_ESTUDIANTES= `${this.API_ESTUDIANTES}/${estudiantes.id}`
    return this.http.delete(this.API_ESTUDIANTES);
  }
}
