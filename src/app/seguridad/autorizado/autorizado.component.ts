import { Component, Input, OnInit } from '@angular/core';
import { SeguridadService } from '../seguridad.service';

@Component({
  selector: 'app-autorizado',
  templateUrl: './autorizado.component.html',
  styleUrls: ['./autorizado.component.css']
})
export class AutorizadoComponent implements OnInit {

  constructor(private SeguridadService: SeguridadService) { }

  @Input()
   rol: string;

  ngOnInit(): void {
  }

  autorizado(): boolean{
    if(this.rol){
      return this.SeguridadService.getRol() === this.rol;
    }else{
      return this.SeguridadService.logeado();
    }
  }

}
