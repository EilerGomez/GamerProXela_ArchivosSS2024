import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TarjetasDescuento } from '../Modelo/TarjetasDescuento';
@Injectable({
  providedIn: 'root'
})
export class TarjetasService {

  constructor(private http: HttpClient) { }

  Url='http://localhost:3010/api/tarjetas';

  getTarjetas(rol:number){
    return this.http.get<TarjetasDescuento[]>(`${this.Url}?roldb=${rol}`);
  }

  nuevaTarjeta(cliente:number, rol:number){
    return this.http.post<any>(`${this.Url}/${cliente}?roldb=${rol}`,JSON.stringify(cliente));
  }

  getTarjetaByIDCiente(rol:number, idC:number){
    return this.http.get<TarjetasDescuento>(`${this.Url}/${idC}?roldb=${rol}`);
  }
}
