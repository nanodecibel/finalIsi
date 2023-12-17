import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private http:HttpClient) { }

  private API_CURSOS="http://localhost:3000/cursos"

  getCursos():Observable<any>{
    return this.http.get(this.API_CURSOS);
  }


  postCursos(cursos:any): Observable<any>{
    return this.http.post(this.API_CURSOS, cursos);
  }

  putCursos(cursos:any):Observable<any>{
    this.API_CURSOS=`${(this.API_CURSOS)}/${cursos.id}`
    return this.http.put(this.API_CURSOS, cursos);
  }

  deleteCursos(cursos:any):Observable<any>{
    this.API_CURSOS= `${this.API_CURSOS}/${cursos.id}`
    return this.http.delete(this.API_CURSOS);
  }
}
