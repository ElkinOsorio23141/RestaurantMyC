import { Component } from '@angular/core';
import {
  Categoria,
  Plato,
  PlatosService,
} from 'src/app/services/platos.service';

@Component({
  selector: 'app-menu-platos',
  templateUrl: './menu-platos.component.html',
})
export class MenuPlatosComponent {
  platos: Plato[] = [];
  plato: Plato = {
    idPlato: 0,
    nombrePlato: '',
    idCategoria: 0,
    precio: 0,
    disponibilidad: true,
  };
  categorias: Categoria[] = [
    { idCategoria: 1, nombreCategoria: 'Entradas' },
    { idCategoria: 2, nombreCategoria: 'Platos fuertes' },
    { idCategoria: 3, nombreCategoria: 'Bebidas' },
    { idCategoria: 4, nombreCategoria: 'Postres' },
  ];
  constructor(private platosService: PlatosService) {}

  ngOnInit(): void {
    this.listarPlatos();
  }

  listarPlatos() {
    this.platosService.listar().subscribe((data) => {
      this.platos = data;
    });
  }

  guardarPlato() {
    if (this.plato.idPlato === 0) {
      this.platosService.agregar(this.plato).subscribe(() => {
        this.listarPlatos();
        this.resetFormulario();
      });
    } else {
      this.platosService.modificar(this.plato).subscribe(() => {
        this.listarPlatos();
        this.resetFormulario();
      });
    }
  }

  editar(plato: Plato) {
    this.plato = { ...plato };
  }

  eliminar(id: number) {
    if (confirm('¿Estás seguro de eliminar este plato?')) {
      this.platosService.eliminar(id).subscribe(() => {
        this.listarPlatos();
      });
    }
  }

  resetFormulario() {
    this.plato = {
      idPlato: 0,
      nombrePlato: '',
      idCategoria: 0,
      precio: 0,
      disponibilidad: true,
    };
  }

  getNombreCategoria(idCategoria: number): string {
    const categoria = this.categorias.find(
      (c) => c.idCategoria === idCategoria
    );
    return categoria ? categoria.nombreCategoria : 'Desconocida';
  }

  formatearPesos(valor: number): string {
    return '$' + valor.toLocaleString('es-CO');
  }
}
