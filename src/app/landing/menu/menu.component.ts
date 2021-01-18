import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeguridadService } from 'src/app/seguridad/seguridad.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public service: SeguridadService, private router: Router) { }

  ngOnInit(): void {
  }


  logout(){
    console.log("Deslogueado")
    this.service.logout();
    this.router.navigate(['']);
  }

}
