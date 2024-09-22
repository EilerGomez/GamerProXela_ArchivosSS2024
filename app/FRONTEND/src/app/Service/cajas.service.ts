import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cajas } from '../Modelo/Cajas';
import { Usuario } from '../Modelo/Usuario';
@Injectable({
  providedIn: 'root'
})
export class CajasService {

  constructor(private http: HttpClient) { }
  Url='http://localhost:3010/api/cajas';
  getCajas(rol:number){
    return this.http.get<Cajas[]>(`${this.Url}?roldb=${rol}`);
  }

  getUsuariosNoAsignadosACajas(rol:number, idS:number){
    return this.http.get<Usuario[]>(`${this.Url}/${idS}?roldb=${rol}`);
  }
  getCajaUsuario(rol:number, idU:number){
    return this.http.get<any>(`${this.Url}usuario/${idU}?roldb=${rol}`);
  }

  postCaja(caja:Cajas, rol:number){
    return this.http.post(`${this.Url}?roldb=${rol}`,caja);
  }
}
