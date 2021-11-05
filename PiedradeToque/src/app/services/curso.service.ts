import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  url='http://localhost:4000/api/curso/'

  constructor(private http: HttpClient) { }

  getCursos(): Observable<any>{
    return this.http.get(this.url)
  }
  deleteCurso(id: String): Observable<any>{
    return this.http.delete(this.url+id)
  }

  postCursos(curso: Curso): Observable<any>{
    return this.http.post(this.url, curso)
  }

  getCurso(id: String): Observable<any>{
    return this.http.get(this.url+id)
  }

  putCurso(id: String, curso: Curso): Observable<any>{
    return this.http.put(this.url+id, curso)
  }
}
