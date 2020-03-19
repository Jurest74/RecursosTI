import { RouterModule, Routes } from '@angular/router';
import {HomeComponent}  from './components/home/home.component';
import {AboutComponent}  from './components/about/about.component';
import {SantosComponent}  from './components/santos/santos.component';
import {SantoComponent}  from './components/santo/santo.component';
import {BusquedaComponent}  from './components/busqueda/busqueda.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './page/login/login.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'santos', component: SantosComponent },
  { path: 'santo/:id', component: SantoComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login'   , component: LoginComponent },
  { path: 'busqueda/:termino', component: BusquedaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
