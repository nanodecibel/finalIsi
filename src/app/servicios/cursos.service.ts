import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private http:HttpClient) { }

  private ApiCursos="http://localhost:3000/administrativo"

  getCursos():Observable<any>{
    return this.http.get(this.ApiCursos)
  }


  postCursos(cursos:any): Observable<any>{
    return this.http.post(this.ApiCursos, cursos)
  }

  putCursos(cursos:any):Observable<any>{
    this.ApiCursos=`${(this.ApiCursos)}/${(cursos.codigo)}`
    return this.http.put(this.ApiCursos, cursos)
  }

  deleteCursos(cursos:any):Observable<any>{
    this.ApiCursos=`${(this.ApiCursos)}/${(cursos.codigo)}`
    return this.http.delete(this.ApiCursos)
  }
}
