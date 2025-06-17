import { Component, OnInit } from '@angular/core';
import { Cliente, ClientesService } from 'src/app/services/clirentes.service';
import { Mesa, MesasService } from 'src/app/services/mesas.service';
import { Reserva, ReservasService } from 'src/app/services/reservas.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
})
export class ReservaComponent implements OnInit {
  reserva: Reserva = {
    idReserva: 0,
    idCliente: 0,
    idMesa: 0,
    fechaReserva: new Date(),
    horaReserva: '',
  };
  reservas: Reserva[] = [];
  clientes: Cliente[] = [];
  mesas: Mesa[] = [];

  constructor(
    private reservasService: ReservasService,
    private clientesService: ClientesService,
    private mesasService: MesasService
  ) {}

  ngOnInit(): void {
    this.listar();
    this.obtenerClientes();
    this.obtenerMesas();
  }

  listar(): void {
    this.reservasService.listar().subscribe((data) => {
      this.reservas = data;
    });
  }

  obtenerMesas(): void {
    this.mesasService.listar().subscribe((data) => {
      this.mesas = data;
    });
  }

  obtenerClientes(): void {
    this.clientesService.listar().subscribe((data) => {
      this.clientes = data;
    });
  }

  guardarReserva(): void {
    this.reserva.fechaReserva = new Date(
      `${this.reserva.fechaReserva}T${this.reserva.horaReserva}:00`
    );
    this.reserva.horaReserva = `${this.reserva.horaReserva}:00`

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
      fechaReserva: new Date(),
      horaReserva:'',
    };
  }

  getNombreCliente(idCliente: number): string {
    const cliente = this.clientes.find((c) => c.idCliente === idCliente);
    return cliente
      ? `${cliente.nombreCliente} ${cliente.apellidosCliente}`
      : 'Cliente no encontrado';
  }
}
