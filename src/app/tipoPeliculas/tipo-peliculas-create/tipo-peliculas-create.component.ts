import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoPeliculasService } from '../tipo-peliculas.service';

@Component({
  selector: 'app-tipo-peliculas-create',
  templateUrl: './tipo-peliculas-create.component.html',
  styleUrls: ['./tipo-peliculas-create.component.css']
})
export class TipoPeliculasCreateComponent implements OnInit {

  constructor(private service: TipoPeliculasService, private router: Router) { }

  ngOnInit(): void {
  }

  saveChanges(event){
    this.service.Post(event).subscribe(()=> {
      this.router.navigate(['tipopeliculas']);
      console.log(event);
    })
  }
}
