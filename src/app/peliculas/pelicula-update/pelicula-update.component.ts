import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculaService } from '../pelicula.service';
import { pelicula } from '../peliculas';

@Component({
  selector: 'app-pelicula-update',
  templateUrl: './pelicula-update.component.html',
  styleUrls: ['./pelicula-update.component.css'],
})
export class PeliculaUpdateComponent implements OnInit {
  constructor(
    private service: PeliculaService,
    private router: Router,
    private activaredRoute: ActivatedRoute
  ) {}

  pelicula;
 
  ngOnInit(): void {
    setTimeout(() => {
      this.getPelicula();
    }, 1000);
  }
  saveChanges(event) {
    this.activaredRoute.params.subscribe((params) => {
      this.service.Update(event, params.id).subscribe(() => {
        this.router.navigate(['']);
        console.log(event);
      });
    });
  }

  getPelicula() {
    this.activaredRoute.params.subscribe((params) => {
      this.service.Get(params.id).subscribe((pelicula) => {
        this.pelicula = pelicula;
        console.log(this.pelicula);
      });
    });
  }
}
