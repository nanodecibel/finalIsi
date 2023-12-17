import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalificacionesService {

  constructor(private http: HttpClient) { }

  private API_CALIFICACIONES = "http://localhost:3000/calificaciones"

  //METODO GET
  getCalificacion(): Observable<any>{
    return this.http.get(this.API_CALIFICACIONES);
  }

  //METODO POST
  postCalificacion(calificaciones:any): Observable<any>{
    return this.http.post(this.API_CALIFICACIONES, calificaciones);
  }

  //METODO PUT
  putCalificacion(calificaciones:any): Observable<any>{
    this.API_CALIFICACIONES= `${this.API_CALIFICACIONES}/${calificaciones.id}`
    return this.http.put(this.API_CALIFICACIONES, calificaciones);
  }

  //METODO DELETE
  deleteCalificacion(id: any): Observable<any>{
    this.API_CALIFICACIONES= `${this.API_CALIFICACIONES}/${id}`
    return this.http.delete(this.API_CALIFICACIONES);
  }
}
