import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface Mesa {
  idMesa: number;
  ubicacion: string;
  capacidad: number;
  ocupada: boolean;
  // Puedes omitir "reservas" si no la vas a usar directamente en el frontend
}
@Injectable({
  providedIn: 'root'
})
export class MesasService {
private apiUrl = 'http://localhost:5062/api/mesa';

  constructor(private http: HttpClient) {}

  listar(): Observable<Mesa[]> {
    return this.http.get<Mesa[]>(`${this.apiUrl}/Listar`);
  }

  agregar(mesa: Mesa): Observable<Mesa> {
    return this.http.post<Mesa>(`${this.apiUrl}/Agregar`, mesa);
  }

  modificar(mesa: Mesa): Observable<Mesa> {
    return this.http.put<Mesa>(`${this.apiUrl}/Modificar`, mesa);
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/Eliminar?idmesa=${id}`);
  }
}

