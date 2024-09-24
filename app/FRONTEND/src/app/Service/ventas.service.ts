import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Venta } from '../Modelo/Venta';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  constructor(private http: HttpClient) { }
  Url='http://localhost:3010/api/ventas';
  getVentas(rol:number, idS:number){
    return this.http.get<Venta[]>(`${this.Url}/${idS}?roldb=${rol}`);
  }

  NuevaVenta(v:Venta, rol:number){
    return this.http.post<any>(`${this.Url}?roldb=${rol}`,v);
  }

  deleteVenta(rol:number, idV:number){
    return this.http.delete(`${this.Url}/${idV}?roldb=${rol}`);
  }
  putDineroCobroSinDescuento(idV:number,idS:number, rol:number){
    return this.http.put(`${this.Url}obtenerpago/${idS}/${idV}?roldb=${rol}`,JSON.stringify(idV));
  }

  putDineroCobroConDescuento(idV:number,idS:number, puntos:number, rol:number){
    return this.http.put(`${this.Url}obtenerpago/${idS}/${idV}/${puntos}?roldb=${rol}`,JSON.stringify(idV));
  }

  cancelarVenta(rol:number, idV:number){
    return this.http.delete(`${this.Url}cancelacion/${idV}?roldb=${rol}`);
  }
}
