import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//Routes

import { APP_ROUTING } from './app.routes';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SantosComponent } from './components/santos/santos.component';
import { BuscadorComponent } from './componets/buscador/buscador.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './page/login/login.component';

//Services

import { SantosService } from './services/santos.service';
import { SantoComponent } from './components/santo/santo.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { FooterComponent } from './components/footer/footer.component';
import { SantoTarjetaComponent } from './components/santo-tarjeta/santo-tarjeta.component';
import { ProductosComponent } from './components/productos/productos.component';
import { SubproductosComponent } from './components/subproductos/subproductos.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    SantosComponent,
    SantoComponent,
    BuscadorComponent,
    BusquedaComponent,
    FooterComponent,
    SantoTarjetaComponent,
    ProductosComponent,
    SubproductosComponent,
    RegistroComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    SantosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
