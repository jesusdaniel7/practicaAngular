import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './landing/menu/menu.component';
import { PeliculaIndexComponent } from './peliculas/pelicula-index/pelicula-index.component';
import { PeliculaCreateComponent } from './peliculas/pelicula-create/pelicula-create.component';
import { PeliculaFormComponent } from './peliculas/pelicula-form/pelicula-form.component';
import { PeliculaUpdateComponent } from './peliculas/pelicula-update/pelicula-update.component';
import { GenericListComponent } from './helpers/generic-list/generic-list.component';
import { PeliculaFilterComponent } from './peliculas/pelicula-filter/pelicula-filter.component';
import { TipoPeliculasIndexComponent } from './tipoPeliculas/tipo-peliculas-index/tipo-peliculas-index.component';
import { TipoPeliculasCreateComponent } from './tipoPeliculas/tipo-peliculas-create/tipo-peliculas-create.component';
import { TipoPeliculasUpdateComponent } from './tipoPeliculas/tipo-peliculas-update/tipo-peliculas-update.component';
import { TipoPeliculasFormComponent } from './tipoPeliculas/tipo-peliculas-form/tipo-peliculas-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PeliculaIndexComponent,
    PeliculaCreateComponent,
    PeliculaFormComponent,
    PeliculaUpdateComponent,
    GenericListComponent,
    PeliculaFilterComponent,
    TipoPeliculasIndexComponent,
    TipoPeliculasCreateComponent,
    TipoPeliculasUpdateComponent,
    TipoPeliculasFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
