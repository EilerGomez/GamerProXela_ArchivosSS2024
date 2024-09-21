import { Component } from '@angular/core';
import { Producto } from 'src/app/Modelo/Producto';
import { ProductosService } from 'src/app/Service/productos.service';
import { Usuario } from 'src/app/Modelo/Usuario';
@Component({
  selector: 'app-todos-productos',
  templateUrl: './todos-productos.component.html',
  styleUrls: ['./todos-productos.component.css']
})
export class TodosProductosComponent {
  constructor( private servicioProductos:ProductosService){}

  productos!:Producto[]

  ngOnInit():void{
    this.servicioProductos.getProductosSucursal(this.getSucursal(),this.getRolDB()).subscribe(data=>{
      this.productos=data;
    }, error=>{
      console.log(error)
    })
  }

  getRolDB(){
    let stringUser = localStorage.getItem('usuario');
    let usuario:Usuario = stringUser? JSON.parse(stringUser):null;
    let rol = usuario? usuario.rol:0;
    return rol;
  }
  getIDUser(){
    let stringUser = localStorage.getItem('usuario');
    let usuario:Usuario = stringUser? JSON.parse(stringUser):null;
    let rol = usuario? usuario.identificacion:0;
    return rol;
  }
  getSucursal(){
    let stringUser = localStorage.getItem('usuario');
    let usuario:Usuario = stringUser? JSON.parse(stringUser):null;
    let suc = usuario? usuario.sucursal:0;
    return suc;
  }

}
