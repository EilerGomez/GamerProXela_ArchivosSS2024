import { Injectable } from '@angular/core';
import { Compra } from '../Modelo/Compra';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  constructor(private http: HttpClient) { }
  Url='http://localhost:3010/api/compras';
  getCompras(rol:number, idS:number){
    return this.http.get<Compra[]>(`${this.Url}/${idS}?roldb=${rol}`);
  }

  nuevaCompra(compra:Compra, rol:number){
    return this.http.post<any>(`${this.Url}?roldb=${rol}`,compra);
  }

  deleteCompra(rol:number, idC:number){
    return this.http.delete(`${this.Url}/${idC}?roldb=${rol}`);
  }

  cancelarCompra(rol:number, idC:number){
    return this.http.delete(`${this.Url}cancelacion/${idC}?roldb=${rol}`);
  }

}
