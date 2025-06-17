import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {
   private apiUrl = 'http://localhost:5062/api/reservas'; // Cambia el puerto según tu backend

  constructor(private http: HttpClient) {}

  listar(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Listar`);
  }

  agregar(reserva: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Agregar`, reserva);
  }

  modificar(reserva: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/Modificar`, reserva);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/Eliminar?idreserva=${id}`);
  }
}
