import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../Modelo/Producto';
import { ProdcutosCompra } from '../Modelo/ProductosCompra';
import { ProductosSucursales } from '../Modelo/ProductosSucursales';
import { ProdcutosVenta } from '../Modelo/ProductosVenta';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) { }
  Url='http://localhost:3010/api/productos';

  getProductosSucursal(idS:number, rol:number){
    return this.http.get<Producto[]>(`${this.Url}/${idS}?roldb=${rol}`);
  }

  nuevoProductoCompra(pc:ProdcutosCompra, rol:number){
    return this.http.post(`${this.Url}compra/?roldb=${rol}`,pc);
  }
  nuevoProductoVenta(pv:ProdcutosVenta, rol:number){
    return this.http.post(`${this.Url}venta/?roldb=${rol}`,pv);
  }

  getProductosNuevaCompra(idC:number, rol:number){
    return this.http.get<ProdcutosCompra[]>(`${this.Url}compra/${idC}?roldb=${rol}`);
  }
  getProductosNuevaVenta(idV:number, rol:number){
    return this.http.get<ProdcutosVenta[]>(`${this.Url}venta/${idV}?roldb=${rol}`);
  }

  getProductosNoInlcuidos(idS:number, rol:number){
    return this.http.get<Producto[]>(`${this.Url}noincluidos/${idS}?roldb=${rol}`);
  }

  nuevoProductoSucursal(ps:ProductosSucursales, rol:number){
    return this.http.post(`${this.Url}sucursal/?roldb=${rol}`,ps);
  }

  nuevoProducto(p:Producto,rol:number){
    return this.http.post(`${this.Url}/?roldb=${rol}`,p);
  }

  pasarProductosBodegaAEstanteria(p:Producto, rol:number){
    return this.http.put(`${this.Url}sucursal?roldb=${rol}`, p);
  }


}
