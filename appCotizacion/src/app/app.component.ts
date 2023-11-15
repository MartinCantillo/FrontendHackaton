import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routes } from './app-routing.module';

import { ClientsComponent } from '../app/components/clients/clients.component';
import { ProductsComponent } from './components/products/products.component';
import { AsesorComponent } from './components/asesor/asesor.component';
import { OrdenComponent } from './components/orden/orden.component';
import { PaqueteComponent } from './components/paquete/paquete.component';
import { CotizacionComponent } from './components/cotizacion/cotizacion.component';


const appRoutes: Routes = [
  { path: 'getClient', component: ClientsComponent },
];
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, RouterModule, HttpClientModule, ReactiveFormsModule, AppRoutingModule],
  providers: [ClientsComponent, ProductsComponent, AsesorComponent, OrdenComponent, PaqueteComponent, CotizacionComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = 'appCotizacion';
  
}
