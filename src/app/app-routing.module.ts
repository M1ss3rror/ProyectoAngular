import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Llamada de componentes
import { CursosComponent } from './components/cursos/cursos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component'
import { AutoresComponent} from './components/autores/autores.component'
import { AliadosComponent } from './components/aliados/aliados.component'
import { ListarLibrosComponent } from './components/catalogo/listar-libros/listar-libros.component';
import { CrearLibrosComponent } from './components/catalogo/crear-libros/crear-libros.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'catalogo', component:CatalogoComponent},
  {path: 'autores', component:AutoresComponent},
  {path: 'aliados', component:AliadosComponent},
  {path: 'listar-libros', component:ListarLibrosComponent},
  {path: 'crear-libros', component:CrearLibrosComponent},

  {path: '**', redirectTo:'', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
