import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Usuario} from './usuario';

@Injectable({
    providedIn: 'root'
  })
export class UsuarioService {

    private backUrl: string = "https://ionicgrupo3.herokuapp.com"

    constructor(private http: HttpClient) { }

    userLogIn(nombre: string, contrasena: string):Observable<any>{
        return this.http.post<any>(`${this.backUrl}/logIn`, {"nombre": nombre, "contrasena": contrasena });
    }

    userSignUp(nombre: string, contrasena: string): Observable<any>{
        return this.http.post<any>(`${this.backUrl}/signin`, {"nombre": nombre, "contrasena": contrasena})
    }
    getUsuario(usuario: number, token:string): Observable<Usuario>{
        const headers = new HttpHeaders({
          'Authorization':`Bearer ${token}`
        })
        return this.http.get<Usuario>(`${this.backUrl}/usuario/${usuario}`, {headers: headers})
    }

}
