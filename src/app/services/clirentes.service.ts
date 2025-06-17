import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Cliente {
  idCliente: number;
  identificacionCliente: string;
  nombreCliente: string;
  apellidosCliente: string;
  correo: string;
  telefono: string;
  pedidos: any[];
  reservas: any[];
}

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private baseUrl = 'http://localhost:5062/api/clientes';

  constructor(private http: HttpClient) {}

  listar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.baseUrl}/Listar`);
  }

  agregar(cliente: Cliente): Observable<any> {
    return this.http.post(`${this.baseUrl}/Agregar`, cliente);
  }

  modificar(cliente: Cliente): Observable<any> {
    return this.http.put(`${this.baseUrl}/Modificar`, cliente);
  }

  eliminar(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/Eliminar?id=${id}`);
  }
}
