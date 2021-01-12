import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tipoPelicula } from '../tipoPeliculas';

@Component({
  selector: 'app-tipo-peliculas-form',
  templateUrl: './tipo-peliculas-form.component.html',
  styleUrls: ['./tipo-peliculas-form.component.css']
})
export class TipoPeliculasFormComponent implements OnInit {

  constructor() { }
  
  @Input()  
  form = new FormGroup({
    name: new FormControl('', Validators.required)
  })

  @Output()
  onSubmit: EventEmitter<tipoPelicula> =  new EventEmitter();
  ngOnInit(): void {
  }

  Savechanges(){
    this.onSubmit.emit(this.form.value);
  }
  
}
