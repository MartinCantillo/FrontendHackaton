import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routes } from './app-routing.module';

import { ClientsComponent } from '../app/components/clients/clients.component';


const appRoutes: Routes = [
  { path: 'getClient', component: ClientsComponent },
];
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, RouterModule, HttpClientModule, ReactiveFormsModule, AppRoutingModule],
  providers: [ClientsComponent, routes],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = 'appCotizacion';
  
}
