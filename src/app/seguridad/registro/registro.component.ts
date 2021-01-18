import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { credencialesUsuario } from '../seguridad';
import { SeguridadService } from '../seguridad.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private service: SeguridadService, private router: Router) { }

  ngOnInit(): void {
  }

  Registrar(credenciales: credencialesUsuario){

    this.service.register(credenciales).subscribe((respuesta) => {
      this.service.guardarToken(respuesta);
      this.router.navigate(['']);
    }, error => console.log(error));
  }

}
