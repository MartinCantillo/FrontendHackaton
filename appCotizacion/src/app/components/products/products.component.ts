import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Router, RouterOutlet } from '@angular/router';
import { Client } from '../../models/client.model';
import { resgisterClientService } from '../../services/register-client.service';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../../app-routing.module';
import { ClientsComponent } from '../clients/clients.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, RouterModule, HttpClientModule, ReactiveFormsModule, AppRoutingModule],
  providers: [Client, resgisterClientService, ClientsComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  formData: any = {
    nombre: '',
    codigo: '',
    precio: '',
    categoria: '',
  };
}
