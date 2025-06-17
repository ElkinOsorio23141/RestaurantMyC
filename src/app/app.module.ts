import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReservaComponent } from './screens/reserva/reserva.component';
import { MenuPlatosComponent } from './screens/menu-platos/menu-platos.component';
import { PedidosComponent } from './screens/pedidos/pedidos.component';
import { ResenasComponent } from './screens/resenas/resenas.component';
import { FiltroResenasComponent } from './screens/filtro-resenas/filtro-resenas.component';
import { PreferenciasClienteComponent } from './screens/preferencias-cliente/preferencias-cliente.component';
import { HistorialClienteComponent } from './screens/historial-cliente/historial-cliente.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { AppRoutingModule } from './app.routes';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ReservaComponent,
    MenuPlatosComponent,
    PedidosComponent,
    ResenasComponent,
    FiltroResenasComponent,
    PreferenciasClienteComponent,
    HistorialClienteComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
