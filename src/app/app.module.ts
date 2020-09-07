import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { APP_BASE_HREF} from '@angular/common';  
import { ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { PedidoComponent } from './pedido/pedido.component';

import { DestinoComponent } from './destino/destino.component';
import { PagoComponent } from './app-menu/pago/pago.component';
import { InicioComponent } from './app-menu/inicio/inicio.component';

import { AgmCoreModule } from '@agm/core';
import { MapaComponent } from './mapa/mapa.component';






@NgModule({
   imports: [

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBN3hl8CILMQex6Sv2xo0rxrhetOd1Zcs8'
    }),
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/inicio', pathMatch: 'full' },
      { path: 'inicio', component:  InicioComponent},
      { path: 'destino', component: DestinoComponent  },
      { path: 'pago', component: PagoComponent },
      { path: 'mapa', component: MapaComponent },
      { path: 'pedido', component: PedidoComponent }
    ])  
  ],
  providers:[],
  declarations: [ AppComponent, HelloComponent, AppMenuComponent, PedidoComponent, MapaComponent, DestinoComponent, PagoComponent, InicioComponent ],
  bootstrap:    [ AppComponent , MapaComponent ]
})
export class AppModule { }
