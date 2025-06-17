import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Reserva {
  idReserva: number;
  idCliente: number;
  idMesa: number;
  fechaReserva: Date; // Formato: 'YYYY-MM-DD'
  horaReserva: string; // Formato: 'HH:mm:ss' (ISO string recomendado)
}

@Injectable({
  providedIn: 'root',
})
export class ReservasService {
  private apiUrl = 'http://localhost:5062/api/reservas'; // Asegúrate de que este puerto y URL coincidan con tu backend

  constructor(private http: HttpClient) {}

  listar(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(`${this.apiUrl}/Listar`);
  }

  agregar(reserva: Reserva): Observable<Reserva> {
    reserva.idCliente = +reserva.idCliente;
    reserva.idMesa = +reserva.idMesa;

    return this.http.post<Reserva>(`${this.apiUrl}/Agregar`, reserva);
  }

  modificar(reserva: Reserva): Observable<Reserva> {
    return this.http.put<Reserva>(`${this.apiUrl}/Modificar`, reserva);
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/Eliminar?idreserva=${id}`);
  }
}
