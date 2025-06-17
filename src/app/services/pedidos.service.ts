import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  private apiUrl = 'http://localhost:5062/api/pedidos';

  constructor(private http: HttpClient) { }

  listar(): Observable<any> {
      return this.http.get(`${this.apiUrl}/Listar`);
    }

    agregar(pedido: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Agregar`, pedido);
  }

  modificar(pedido: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/Modificar`, pedido);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/Eliminar?idpedido=${id}`);
  }
}
