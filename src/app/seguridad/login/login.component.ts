import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { credencialesUsuario } from '../seguridad';
import { SeguridadService } from '../seguridad.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  error: string;

  evento: string =  "Login";
  constructor(private seguridad: SeguridadService, private router: Router) { }

  ngOnInit(): void {
  }

  login(credenciales: credencialesUsuario){
    this.seguridad.login(credenciales).subscribe((respuesta) => {
      this.seguridad.guardarToken(respuesta);
      this.router.navigate(['']);
    }, error => this.error = error.error)
  }
}
