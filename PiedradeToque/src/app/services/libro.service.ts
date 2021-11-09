import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  url='http://localhost:4000/api/libro/'

  constructor(private http: HttpClient) { }

  getLibros(): Observable<any>{
    return this.http.get(this.url)
  }
  deleteLibro(id: String): Observable<any>{
    return this.http.delete(this.url+id)
  }

  postLibros(libro: Libro): Observable<any>{
    return this.http.post(this.url, libro)
  }

  getLibro(id: String): Observable<any>{
    return this.http.get(this.url+id)
  }

  putLibro(id: String, libro: Libro): Observable<any>{
    return this.http.put(this.url+id, libro)
  }
}
