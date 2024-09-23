import { Injectable } from '@angular/core';
import { Sucursal } from '../Modelo/Sucursal';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SucursalesService {

  constructor(private http: HttpClient) { }
  Url='http://localhost:3010/api/sucursales';
  getSucursales(rol:number){
    return this.http.get<Sucursal[]>(`${this.Url}?rol=${rol}`);
  }

  getSucursal(rol:number, idS:number){
    return this.http.get<Sucursal>(`${this.Url}/${idS}?roldb=${rol}`);
  }
}
