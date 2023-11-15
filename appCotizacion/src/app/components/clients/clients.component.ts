import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';
import { Client } from '../../models/client.model';
import { resgisterClientService } from '../../services/register-client.service';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
  
})
export class ClientsComponent {
  cedula: number = 0;
  nombre: string = '';
  direccion: string = '';
  estado: string= '';
  idp: number = 0;

  clients: Client = new Client();
  
  
  constructor(
    private router: Router,
    private registerClient: resgisterClientService
  ) {}

  ngOnInit() {}

  addClient() {
    this.clients.cedula = this.cedula;
    this.clients.direccion = this.direccion;
    this.clients.nombre = this.nombre;
    this.clients.estado = this.estado;
    //this.clients.idp = this.registerClient.generatePrimaryKey();
    
    this.registerClient.SaveClient(this.clients).subscribe({
      next: (res) => alert('Registro con exito'),
      error: (error) => {
        console.log(error);
      },
    });

  }
  
  getClient() {
    this.router.navigate(['/getClient']);
  }
}
