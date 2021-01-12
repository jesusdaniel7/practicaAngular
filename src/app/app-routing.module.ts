import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PeliculaIndexComponent} from './peliculas/pelicula-index/pelicula-index.component'
import {PeliculaCreateComponent} from './peliculas/pelicula-create/pelicula-create.component'
import {PeliculaFormComponent} from './peliculas/pelicula-form/pelicula-form.component'
import {PeliculaUpdateComponent} from './peliculas/pelicula-update/pelicula-update.component'
import {PeliculaFilterComponent} from './peliculas/pelicula-filter/pelicula-filter.component'
import {TipoPeliculasIndexComponent} from './tipoPeliculas/tipo-peliculas-index/tipo-peliculas-index.component'
import {TipoPeliculasCreateComponent} from './tipoPeliculas/tipo-peliculas-create/tipo-peliculas-create.component'

const routes: Routes = [
  {path:'', component: PeliculaIndexComponent},
  {path:'peliculas/create', component: PeliculaCreateComponent},
  {path:'form', component: PeliculaFormComponent},
  {path:'peliculas/update/:id', component: PeliculaUpdateComponent},
  {path:'peliculas/find', component: PeliculaFilterComponent},
  
  //Tipo de peliculas
  {path:'tipopeliculas', component: TipoPeliculasIndexComponent},
  {path:'tipopeliculas/create', component: TipoPeliculasCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
