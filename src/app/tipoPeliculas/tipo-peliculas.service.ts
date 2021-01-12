import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tipoPelicula } from './tipoPeliculas';

@Injectable({
  providedIn: 'root'
})
export class TipoPeliculasService {

  constructor( private http: HttpClient) { }

  apiURL = environment.apiURL + 'peliculatipos/';
  public Get(): Observable<tipoPelicula[]>{
    return this.http.get<tipoPelicula[]>(this.apiURL);
  }

  public Post(tipoPelicula: tipoPelicula){
    return this.http.post<tipoPelicula>(this.apiURL, tipoPelicula)
  }
}
