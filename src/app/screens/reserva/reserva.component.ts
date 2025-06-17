import { Component, OnInit } from '@angular/core';
import { Cliente, ClientesService } from 'src/app/services/clirentes.service';
import { ReservasService } from 'src/app/services/reservas.service';

export interface Reserva {
  idReserva: number;
  idCliente: number;
  idMesa: number;
  fechaReserva: string;
  horaReserva: string;
}

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
})
export class ReservaComponent implements OnInit {
    reserva: any = {
    idReserva: 0,
    idCliente: 0,
    idMesa: 0,
    fechaReserva: '',
    horaReserva: ''
  };

  reservas: any[] = [];
  clientes: Cliente[] = [];

  constructor(private reservasService: ReservasService, private clientesService: ClientesService) {}

  ngOnInit(): void {
    this.listar();
    this.obtenerClientes();
  }

  listar(): void {
    this.reservasService.listar().subscribe(data => {
      this.reservas = data;
    });
  }

    obtenerClientes(): void {
    this.clientesService.listar().subscribe(data => {
      this.clientes = data;
    });
  }

  guardarReserva(): void {
    if (this.reserva.idReserva === 0) {
      this.reservasService.agregar(this.reserva).subscribe(() => {
        this.listar();
        this.limpiar();
      });
    } else {
      this.reservasService.modificar(this.reserva).subscribe(() => {
        this.listar();
        this.limpiar();
      });
    }
  }

  editar(reserva: any): void {
    this.reserva = { ...reserva };
  }

  eliminar(id: number): void {
    this.reservasService.eliminar(id).subscribe(() => {
      this.listar();
    });
  }

  limpiar(): void {
    this.reserva = {
      idReserva: 0,
      idCliente: 0,
      idMesa: 0,
      fechaReserva: '',
      horaReserva: ''
    };
  }
}