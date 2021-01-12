import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { pelicula, peliculaCreation } from './peliculas';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor(private http: HttpClient) { }

  apiURL: string = environment.apiURL + 'peliculas/'
  public GetPeliculas(): Observable<pelicula[]>{
    return this.http.get<pelicula[]>(this.apiURL);
  }

  public Get(id: number): Observable<pelicula>{
    return this.http.get<pelicula>(this.apiURL + id);
  }
  public Post(form: peliculaCreation){
    return this.http.post<peliculaCreation>(this.apiURL, form)
  }

  public Update(pelicula: peliculaCreation, id: number): Observable<peliculaCreation>{
    return this.http.put<peliculaCreation>(this.apiURL + id, pelicula)
  }

  public Delete(id: number){
    return this.http.delete(this.apiURL + id);
  }
}
