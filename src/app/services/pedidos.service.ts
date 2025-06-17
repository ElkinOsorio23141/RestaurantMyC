import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './clirentes.service';
import { Plato } from './platos.service';
export interface Pedido {
  idPedido: number;
  numeroPedido: string;
  idCliente: number;
  idPlato: number;
  fechaPedido: Date; // ISO string formato yyyy-MM-ddTHH:mm:ss
  cantidad: number;
  valorTotal: number;
    // Propiedades de navegación opcionales
  idClienteNavigation?: Cliente;
  idPlatoNavigation?: Plato;
}
@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  private apiUrl = 'http://localhost:5062/api/pedidos';

  constructor(private http: HttpClient) {}

  listar(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.apiUrl}/Listar`);
  }

  agregar(pedido: Pedido): Observable<any> {
    pedido.idCliente = +pedido.idCliente;
    pedido.idPlato = +pedido.idPlato;
    return this.http.post(`${this.apiUrl}/Agregar`, pedido);
  }

  modificar(pedido: Pedido): Observable<any> {
    return this.http.put(`${this.apiUrl}/Modificar`, pedido);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/Eliminar?idpedido=${id}`);
  }
}
