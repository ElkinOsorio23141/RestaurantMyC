import { Component, OnInit } from '@angular/core';
import { Cliente, ClientesService } from 'src/app/services/clirentes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent implements OnInit {
  cliente: Cliente = {
    idCliente: 0,
    identificacionCliente: '',
    nombreCliente: '',
    apellidosCliente: '',
    correo: '',
    telefono: '',
    pedidos: [],
    reservas: [],
  };

  clientes: Cliente[] = [];

  constructor(private clientesService: ClientesService) {}

  ngOnInit(): void {
    this.listarClientes();
  }

  listarClientes(): void {
    this.clientesService.listar().subscribe((data: Cliente[]) => {
      this.clientes = data;
    });
  }

  guardarCliente(): void {
    const existe = this.clientes.some(
      (c) => c.identificacionCliente === this.cliente.identificacionCliente
    );

    if (existe) {
      this.clientesService.modificar(this.cliente).subscribe(() => {
        this.resetFormulario();
        this.listarClientes();
      });
    } else {
      this.clientesService.agregar(this.cliente).subscribe(() => {
        this.resetFormulario();
        this.listarClientes();
      });
    }
  }

  editarCliente(cliente: Cliente): void {
    this.cliente = { ...cliente };
  }

  eliminarCliente(id: string): void {
    this.clientesService.eliminar(id).subscribe(() => {
      this.listarClientes();
    });
  }

  resetFormulario(): void {
    this.cliente = {
      idCliente: 0,
      identificacionCliente: '',
      nombreCliente: '',
      apellidosCliente: '',
      correo: '',
      telefono: '',
      pedidos: [],
      reservas: [],
    };
  }
}
