import { Component, OnInit } from '@angular/core';
import { ReservasService } from 'src/app/services/reservas.service';

interface Reserva {
  idCliente: number;
  idMesa: number;
  fechaReserva: string;
  horaReserva: string;
}

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {
  reservas: Reserva[] = [];
  nuevaReserva: Reserva = this.getNuevaReserva();

  constructor(private reservasService: ReservasService) {}

  ngOnInit(): void {
    this.listar();
  }

  getNuevaReserva(): Reserva {
    return {
      idCliente: 0,
      idMesa: 0,
      fechaReserva: '',
      horaReserva: ''
    };
  }

  listar(): void {
    this.reservasService.listar().subscribe(data => this.reservas = data);
  }

  agregar(): void {
    if (this.nuevaReserva.idMesa && this.nuevaReserva.fechaReserva && this.nuevaReserva.horaReserva) {
      this.reservasService.agregar(this.nuevaReserva).subscribe(() => {
        this.listar();
        this.nuevaReserva = this.getNuevaReserva(); // limpiar formulario
      });
    }
  }
}
