import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TipoPeliculasService } from 'src/app/tipoPeliculas/tipo-peliculas.service';
import { tipoPelicula } from 'src/app/tipoPeliculas/tipoPeliculas';
import { PeliculaService } from '../pelicula.service';
import { pelicula } from '../peliculas';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { createOfflineCompileUrlResolver } from '@angular/compiler';

@Component({
  selector: 'app-pelicula-filter',
  templateUrl: './pelicula-filter.component.html',
  styleUrls: ['./pelicula-filter.component.css'],
})
export class PeliculaFilterComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private tipoPeliculaService: TipoPeliculasService,
    private peliculaService: PeliculaService,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) {}

  form: FormGroup;
  tipoPelicula: tipoPelicula[];
  emptyForm = {
    name: '',
    peliculaTipoId: 0,
    new: false,
    enCines: false,
  };
  peliculasPrueba;

  peliculas: pelicula[];
  ngOnInit(): void {
    this.GetPeliculas();
    this.getTipoPelicula();
    this.form = this.formBuilder.group(this.emptyForm);

    this.leerQuerys();
    // setTimeout(() => {
    // }, 1000);
    this.form.valueChanges.subscribe((form) => {
      this.peliculas = this.peliculasPrueba;
      this.peliculasFilter(form);
      this.agregarQuerys();
    });
  }

  leerQuerys() {
    var object: any = {};

    this.activatedRoute.queryParams.subscribe((params) => {
      if (params.name) {
        object.name = params.name;
      }

      if (params.peliculaTipoId) {
        object.peliculaTipoId = Number(params.peliculaTipoId);
      }
      if (params.new) {
        object.new = params.new;
      }
      if (params.enCines) {
        object.enCines = params.enCines;
      }

      this.form.patchValue(object);
      this.peliculasFilter(this.form.value);

      this.form.valueChanges.subscribe((form) => {
        this.peliculas = this.peliculasPrueba;
        this.peliculasFilter(form);
        this.agregarQuerys();
      });
      
    });
  }
  agregarQuerys() {
    var queryStrings = [];
    var form = this.form.value;

    if (form.name !== undefined) {
      queryStrings.push(`name=${form.name}`);
    }
    if (form.peliculaTipoId !== 0) {
      queryStrings.push(`peliculaTipoId=${form.peliculaTipoId}`);
    }
    if (form.new) {
      queryStrings.push(`new=${form.new}`);
    }
    if (form.enCines) {
      queryStrings.push(`enCines=${form.enCines}`);
    }
    this.location.replaceState('peliculas/find/', queryStrings.join('&'));
  }
  peliculasFilter(peli: any) {
    if (peli.name) {
      this.peliculas = this.peliculas.filter(
        (pelicula) =>
          pelicula.name.indexOf(peli.name) !== -1
      );
    }

    if (peli.peliculaTipoId !== 0) {
      this.peliculas = this.peliculas.filter(
        (x) => x.peliculaTipoId === peli.peliculaTipoId
      );
    }

    if (peli.enCines) {
      this.peliculas = this.peliculas.filter((x) => x.enCines);
    }

    if (peli.new) {
      this.peliculas = this.peliculas.filter((x) => x.new);
    }
  }

  getTipoPelicula() {
    this.tipoPeliculaService.Get().subscribe((data) => {
      this.tipoPelicula = data;
    });
  }

  saveChanges() {
    console.log(this.form.value);
  }

  cleanForm() {
    this.form;
  }

  GetPeliculas() {
    this.peliculaService.GetPeliculas().subscribe((data) => {
      this.peliculas = data;
      this.peliculasPrueba = data;
    });
  }
}
