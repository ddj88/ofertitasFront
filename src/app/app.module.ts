import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { BuscarComponent } from './components/buscar/buscar.component';
import { OfertasService } from './services/ofertas.service';
import { appRouting } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OfertasComponent,
    CarruselComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    appRouting
  ],
  providers: [
    OfertasService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
