import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Llamada de componentes
import { CursosComponent } from './components/cursos/cursos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component'
import { AutoresComponent} from './components/autores/autores.component'
import { AliadosComponent } from './components/aliados/aliados.component'
import { ListarLibrosComponent } from './components/catalogo/listar-libros/listar-libros.component';
import { CrearLibroComponent } from './components/catalogo/crear-libros/crear-libros.component';
import { CrearClientesComponent} from './components/clientes/crear-clientes/crear-clientes.component';
import { ListarClientesComponent} from './components/clientes/listar-clientes/listar-clientes.component';
import { CrearCursoComponent } from './components/cursos/crear-curso/crear-curso.component';
import { ListarCursosComponent } from './components/cursos/listar-cursos/listar-cursos.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'catalogo', component:CatalogoComponent},
  {path: 'autores', component:AutoresComponent},
  {path: 'aliados', component:AliadosComponent},
  {path: 'listar-libros', component:ListarLibrosComponent},
  {path: 'crear-libros', component:CrearLibroComponent},
  {path: 'editar-libro/:id', component:CrearLibroComponent},
  {path: 'listar-clientes', component:ListarClientesComponent},
  {path: 'crear-clientes', component:CrearClientesComponent},
  {path: 'listar-cursos', component:ListarCursosComponent},
  {path: 'crear-curso', component:CrearCursoComponent},
  {path: 'editar-curso/:id', component:CrearCursoComponent},

  {path: '**', redirectTo:'', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }