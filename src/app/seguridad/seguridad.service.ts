import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'inspector';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { credencialesUsuario, respuestaAutentication } from './seguridad';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  constructor(private http: HttpClient) { }
  private readonly llaveToken = 'token';
  private readonly llaveExpiracion = 'token-expiracion';

  apiURL = environment.apiURL + 'cuentas';

  public logeado(): boolean{
    const token = localStorage.getItem(this.llaveToken);
    const expiracion = localStorage.getItem(this.llaveExpiracion);
    const expiracionFecha = new Date(expiracion);

    if(expiracionFecha <= new Date()){
      this.logout();
      return false;
    }


    if(!token){
      return false;
    }
    
    return true;
  }

  logout(){
    localStorage.removeItem(this.llaveToken);
    localStorage.removeItem(this.llaveExpiracion);
  }

  getRol(): string{
    return '';
  }

  obtenerCampoJWT(campo: string): string{
    const token = localStorage.getItem(this.llaveToken);
    if(!token){
      return '';
    }
    var dataToken = JSON.parse(atob(token.split('.')[1]));
    return dataToken[campo];
  }

   register(credenciales: credencialesUsuario): Observable<respuestaAutentication>{
    return this.http.post<respuestaAutentication>(`${this.apiURL}/create`, credenciales);
  }

   login(credenciales: credencialesUsuario): Observable<respuestaAutentication>{
    return this.http.post<respuestaAutentication>(`${this.apiURL}/login`, credenciales);
  }

  guardarToken(respuesta: respuestaAutentication){
    localStorage.setItem(this.llaveToken, respuesta.token);
    localStorage.setItem(this.llaveExpiracion, respuesta.expiration.toString());

  }
}
