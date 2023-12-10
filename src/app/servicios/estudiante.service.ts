import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(private http: HttpClient) { }

  private API_ESTUDIANTES = "http://localhost:3000/administrativo"

  //METODO GET
  getEstudiantes(): Observable <any>{
    return this.http.get(this.API_ESTUDIANTES);
  }

  //METODO POST
  postEstudiantes(user:any): Observable<any>{
    return this.http.post(this.API_ESTUDIANTES, user);
  }

  //METODO PUT
  putEstudiantes(user:any, id:number): Observable<any>{
    this.API_ESTUDIANTES= `${this.API_ESTUDIANTES}/${id}`
    return this.http.put(this.API_ESTUDIANTES, user);
  }

  //METODO DELETE
  deleteEstudiantes (id:number): Observable<any>{
    this.API_ESTUDIANTES= `${this.API_ESTUDIANTES}/${id}`
    return this.http.delete(this.API_ESTUDIANTES);
  }
}
