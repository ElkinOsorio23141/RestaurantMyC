import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatosService {
  private apiUrl = 'http://localhost:5062/api/platos';

  constructor(private http: HttpClient) { }

  listar(): Observable<any> {
      return this.http.get(`${this.apiUrl}/Listar`);
    }

    agregar(plato: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Agregar`, plato);
  }

  modificar(plato: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/Modificar`, plato);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/Eliminar?idplato=${id}`);
  }
}
