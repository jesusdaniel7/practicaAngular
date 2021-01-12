import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TipoPeliculasService } from 'src/app/tipoPeliculas/tipo-peliculas.service';
import { tipoPelicula } from 'src/app/tipoPeliculas/tipoPeliculas';
import { PeliculaService } from '../pelicula.service';
//import { EventEmitter } from 'events';
import { pelicula, peliculaCreation } from '../peliculas';

@Component({
  selector: 'app-pelicula-form',
  templateUrl: './pelicula-form.component.html',
  styleUrls: ['./pelicula-form.component.css'],
})
export class PeliculaFormComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private service: TipoPeliculasService
  ) {}

  form: FormGroup;
  @Output()
  formSend: EventEmitter<peliculaCreation> = new EventEmitter();

  tipoPelicula: tipoPelicula[];

  @Input()
  model: pelicula;

  pelicula: FormGroup;

  ngOnInit(): void {
    this.GetTipoPeliculas();

    this.pelicula = this.formBuilder.group({
      name: '',
      peliculaTipoId: 1,
      new: false,
      enCines: false,
    });

    if (this.model !== undefined) {
      console.log('Esto es lo que llega', this.pelicula.value);
      // this.pelicula = this.formBuilder.group(this.pelicula);
      this.pelicula.patchValue(this.model);
    }
  }

  saveChanges() {
    this.formSend.emit(this.pelicula.value);
  }

  GetTipoPeliculas() {
    this.service.Get().subscribe((data) => {
      this.tipoPelicula = data;
    });
  }
}
