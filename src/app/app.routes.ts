import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar los componentes
import { ReservaComponent } from './screens/reserva/reserva.component';
import { MenuPlatosComponent } from './screens/menu-platos/menu-platos.component';
import { PedidosComponent } from './screens/pedidos/pedidos.component';
import { ResenasComponent } from './screens/resenas/resenas.component';
import { FiltroResenasComponent } from './screens/filtro-resenas/filtro-resenas.component';
import { PreferenciasClienteComponent } from './screens/preferencias-cliente/preferencias-cliente.component';
import { HistorialClienteComponent } from './screens/historial-cliente/historial-cliente.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { ClientesComponent } from './screens/clientes/clientes.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'reserva', component: ReservaComponent },
  { path: 'menu-platos', component: MenuPlatosComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'resenas', component: ResenasComponent },
  { path: 'filtro-resenas', component: FiltroResenasComponent },
  { path: 'preferencias-cliente', component: PreferenciasClienteComponent },
  { path: 'historial-cliente', component: HistorialClienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
