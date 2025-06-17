import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface Plato {
  idPlato: number;
  nombrePlato: string;
  idCategoria: number;
  precio: number;
  disponibilidad: boolean;
}
export interface Categoria {
  idCategoria: number;
  nombreCategoria: string;
}

@Injectable({
  providedIn: 'root',
})
export class PlatosService {
  private apiUrl = 'http://localhost:5062/api/platos';

  constructor(private http: HttpClient) {}

  listar(): Observable<Plato[]> {
    return this.http.get<Plato[]>(`${this.apiUrl}/Listar`);
  }

  agregar(plato: Plato): Observable<Plato> {
    return this.http.post<Plato>(`${this.apiUrl}/Agregar`, plato);
  }

  modificar(plato: Plato): Observable<Plato> {
    return this.http.put<Plato>(`${this.apiUrl}/Modificar`, plato);
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/Eliminar?idplato=${id}`);
  }
}
