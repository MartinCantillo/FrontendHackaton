import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './components/clients/clients.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';

export const routes: Routes = [
    { path: '', redirectTo: 'getClient', pathMatch: 'full' },
    //{ path: 'registrarProducto', component: ClientsComponent },
    { path: 'getClient', component: ClientsComponent },
    //{ path: 'realizarCotizacion', component: ClientsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }