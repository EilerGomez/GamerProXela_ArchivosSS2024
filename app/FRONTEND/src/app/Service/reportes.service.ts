import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Venta } from '../Modelo/Venta';
import { Sucursal } from '../Modelo/Sucursal';
import { Producto } from '../Modelo/Producto';
import { Cliente } from '../Modelo/Cliente';
@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  constructor(private http: HttpClient) { }
  Url='http://localhost:3010/api/reporte';


  getDescuentosXTiempo(rol:number, de:string, hasta:string){
    return this.http.get<Venta[]>(`${this.Url}1/${de}/${hasta}?roldb=${rol}`);
  }
  get10VentasMasGrandesXTiempo(rol:number, de:string, hasta:string){
    return this.http.get<Venta[]>(`${this.Url}2/${de}/${hasta}?roldb=${rol}`);
  }

  get2SucursalesCMasIngreso(rol:number){
    return this.http.get<Sucursal[]>(`${this.Url}3?roldb=${rol}`);
  }

  get10ArticulosMasVendidos(rol:number){
    return this.http.get<Producto[]>(`${this.Url}4?roldb=${rol}`);
  }

  get10ClientesCMasGasto(rol:number){
    return this.http.get<Cliente[]>(`${this.Url}5?roldb=${rol}`);
  }
}
