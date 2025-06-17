import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private apiUrl = 'http://localhost:5062/api/clientes';

  constructor(private http: HttpClient) { }

   listar(): Observable<any> {
      return this.http.get(`${this.apiUrl}/Listar`);
    }

    agregar(cliente: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Agregar`, cliente);
  }

  modificar(cliente: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/Modificar`, cliente);
  }
}
