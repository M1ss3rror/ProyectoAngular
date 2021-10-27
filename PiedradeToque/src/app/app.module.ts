import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CursosComponent } from './components/cursos/cursos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LanzamientosComponent } from './components/lanzamientos/lanzamientos.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { AutoresComponent } from './components/autores/autores.component';
import { AliadosComponent } from './components/aliados/aliados.component';
import { ListarLibrosComponent } from './components/catalogo/listar-libros/listar-libros.component';
import { CrearLibrosComponent } from './components/catalogo/crear-libros/crear-libros.component';
import { ListarClientesComponent } from './components/clientes/listar-clientes/listar-clientes.component';
import { CrearClientesComponent } from './components/clientes/crear-clientes/crear-clientes.component';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    InicioComponent,
    LanzamientosComponent,
    CatalogoComponent,
    AutoresComponent,
    AliadosComponent,
    ListarLibrosComponent,
    CrearLibrosComponent,
    ListarClientesComponent,
    CrearClientesComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
