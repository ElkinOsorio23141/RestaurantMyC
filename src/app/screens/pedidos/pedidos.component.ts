import { Component } from '@angular/core';
import { Cliente, ClientesService } from 'src/app/services/clirentes.service';
import { Pedido, PedidosService } from 'src/app/services/pedidos.service';
import { Plato, PlatosService } from 'src/app/services/platos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
})
export class PedidosComponent {
   pedido: Pedido = {
    idPedido: 0,
    numeroPedido: '',
    idCliente: 0,
    idPlato: 0,
    fechaPedido: new Date(),
    cantidad: 1,
    valorTotal: 0
  };

  pedidos: Pedido[] = [];
  clientes: Cliente[] = [];
  platos: Plato[] = [];

  constructor(
    private pedidosService: PedidosService,
    private clientesService: ClientesService,
    private platosService: PlatosService
  ) {}

  ngOnInit(): void {
    this.listarPedidos();
    this.listarClientes();
    this.listarPlatos();
  }

  listarPedidos(): void {
    this.pedidosService.listar().subscribe((data) => {
      this.pedidos = data;
    });
  }

  listarClientes(): void {
    this.clientesService.listar().subscribe((data) => {
      this.clientes = data;
    });
  }

  listarPlatos(): void {
    this.platosService.listar().subscribe((data) => {
      this.platos = data;
    });
  }

  guardarPedido(): void {
        this.pedido.fechaPedido = new Date(this.pedido.fechaPedido);
    if (this.pedido.idPedido === 0) {
      this.pedidosService.agregar(this.pedido).subscribe(() => {
        this.listarPedidos();
        this.pedido = { idPedido: 0, numeroPedido: '', idCliente: 0, idPlato: 0, fechaPedido: new Date(), cantidad: 1, valorTotal: 0 };
      });
    } else {
      this.pedidosService.modificar(this.pedido).subscribe(() => {
        this.listarPedidos();
        this.pedido = { idPedido: 0, numeroPedido: '', idCliente: 0, idPlato: 0, fechaPedido: new Date(), cantidad: 1, valorTotal: 0 };
      });
    }
  }

  editarPedido(p: Pedido): void {
    this.pedido = { ...p };
  }

  eliminarPedido(id: number): void {
    this.pedidosService.eliminar(id).subscribe(() => {
      this.listarPedidos();
    });
  }
   getNombreCliente(idCliente: number): string {
    const cliente = this.clientes.find((c) => c.idCliente === idCliente);
    return cliente
      ? `${cliente.nombreCliente} ${cliente.apellidosCliente}`
      : 'Cliente no encontrado';
  }
   getNombrePlato(idPlato: number): string {
    const plato = this.platos.find((c) => c.idPlato === idPlato);
    return plato
      ? `${plato.nombrePlato}`
      : 'plato no encontrado';
  }
}
