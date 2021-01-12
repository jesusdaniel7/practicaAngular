import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculaService } from '../pelicula.service';
import { pelicula } from '../peliculas';

@Component({
  selector: 'app-pelicula-index',
  templateUrl: './pelicula-index.component.html',
  styleUrls: ['./pelicula-index.component.css'],
})
export class PeliculaIndexComponent implements OnInit {
  constructor(private service: PeliculaService, private router: Router) {}

  ngOnInit(): void {
    this.getData();
  }

  @Input()
  peliculas: pelicula[];

  btn(event) {
    console.log(event);
  }
  
  getData() {
    this.service.GetPeliculas().subscribe((data) => {
      this.peliculas = data;
    });
  }

  Delete(id: number) {
    this.service.Delete(id).subscribe(() => {
      this.getData();
    });
  }
}
