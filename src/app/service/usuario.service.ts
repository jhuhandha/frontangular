import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public url = "http://localhost:3000/api"

  constructor(private _http : HttpClient) { }

  guardar(usuario : Usuario) : Observable<any> {
    return this._http.post(`${this.url}/usuario`, usuario);
  }

  modificar(usuario : Usuario, id) {
    return this._http.put(`${this.url}/usuario/${id}`, usuario);
  }

  listar() : Observable<any> {
    return this._http.get(`${this.url}/usuario`);
  }

  ver(id) {
    return this._http.get(`${this.url}/usuario/${id}`);
  }

  eliminar(id, estado) {
    return this._http.delete(`${this.url}/usuario/${id}/${estado}`);
  }

}
