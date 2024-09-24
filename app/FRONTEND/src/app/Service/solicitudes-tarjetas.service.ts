import { Injectable } from '@angular/core';
import { SolicitudesTarjetas } from '../Modelo/SolicitudesTarjetas';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesTarjetasService {

  constructor(private http: HttpClient) { }
  Url='http://localhost:3010/api/solicitudestarjetas';
  getSolicitudesTarjetas(rol:number){
    return this.http.get<SolicitudesTarjetas[]>(`${this.Url}?roldb=${rol}`);
  }

  postSolicitudesTarjetas(rol:number, st:SolicitudesTarjetas){
    return this.http.post<any>(`${this.Url}?roldb=${rol}`,st);
  }

  putSolicitudesTarjetas(st:SolicitudesTarjetas, rol:number){
    return this.http.put(`${this.Url}?roldb=${rol}`,st);
  }

  cambiarTipoTarjeta(rol:number, s:number,c:number,m:string,f:string){
    const body = {
      solicitud: s,
      cliente: c,
      motivo: m,
      fechamod: f
  };
    return this.http.post<any>(`${this.Url}update?roldb=${rol}`,body);
  }
}
