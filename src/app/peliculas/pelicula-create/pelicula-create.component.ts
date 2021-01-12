import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculaService } from '../pelicula.service';
import { peliculaCreation } from '../peliculas';

@Component({
  selector: 'app-pelicula-create',
  templateUrl: './pelicula-create.component.html',
  styleUrls: ['./pelicula-create.component.css']
})
export class PeliculaCreateComponent implements OnInit {

  constructor( private service: PeliculaService, private router: Router) { }

  ngOnInit(): void {
  }
  form: peliculaCreation;
  savechanges(form: peliculaCreation){
    console.log(form);
    this.service.Post(form).subscribe(() => {
      this.router.navigate(['']);
    });
  }
}
