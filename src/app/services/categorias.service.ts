import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private apiUrl = 'http://localhost:5062/api/categorias';


  constructor(private http: HttpClient) { }

  listar(): Observable<any> {
      return this.http.get(`${this.apiUrl}/Listar`);
    }

    agregar(categoria: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Agregar`, categoria);
  }

  modificar(categoria: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/Modificar`, categoria);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/Eliminar?idcategoria=${id}`);
  }
}
