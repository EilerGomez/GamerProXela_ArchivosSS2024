import { Injectable } from '@angular/core';
import { Compra } from '../Modelo/Compra';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  constructor(private http: HttpClient) { }
  Url='http://localhost:3010/api/compras';
  getCompras(rol:number){
    return this.http.get<Compra[]>(`${this.Url}?roldb=${rol}`);
  }
}
