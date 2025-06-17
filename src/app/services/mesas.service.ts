import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MesasService {
  private apiUrl = 'http://localhost:5062/api/mesas';

  constructor(private http: HttpClient) { }

  listar(): Observable<any> {
      return this.http.get(`${this.apiUrl}/Listar`);
    }

    agregar(mesa: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Agregar`, mesa);
  }

  modificar(mesa: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/Modificar`, mesa);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/Eliminar?idmesa=${id}`);
  }

}
