import { Component, OnInit } from '@angular/core';
import { TipoPeliculasService } from '../tipo-peliculas.service';
import { tipoPelicula } from '../tipoPeliculas';

@Component({
  selector: 'app-tipo-peliculas-index',
  templateUrl: './tipo-peliculas-index.component.html',
  styleUrls: ['./tipo-peliculas-index.component.css']
})
export class TipoPeliculasIndexComponent implements OnInit {

  constructor(private service: TipoPeliculasService) { }

  ngOnInit(): void {
    this.Getdata();
  }

  tipoPeliculas: tipoPelicula[];
  Getdata(){
    this.service.Get().subscribe((data) => {
      console.log(data);
      this.tipoPeliculas = data;
    })

  }
}
