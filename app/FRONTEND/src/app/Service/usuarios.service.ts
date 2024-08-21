import { Injectable } from '@angular/core';
import { Usuario } from '../Modelo/Usuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }
  Url='http://localhost:3010/api/usuarios';
  getUsuarios(rol:number){
    return this.http.get<Usuario[]>(`${this.Url}?roldb=${rol}`);
  }

  putUsuario(usuario:Usuario, rol:number){
      return this.http.put<Usuario>(`${this.Url}?roldb=${rol}`, usuario);
  }
  deleteUsuario(usuario: Usuario, rol: number) {
    return this.http.delete(`${this.Url}/${usuario.identificacion}?roldb=${rol}`);
  }
  postUsuario(usuario:Usuario, rol:number){
    return this.http.post(`${this.Url}?roldb=${rol}`,usuario);
  }
}
