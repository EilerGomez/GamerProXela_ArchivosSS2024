import { Component } from '@angular/core';
import { Producto } from 'src/app/Modelo/Producto';
import { ProductosService } from 'src/app/Service/productos.service';
import { Usuario } from 'src/app/Modelo/Usuario';
@Component({
  selector: 'app-productos-cajeros',
  templateUrl: './productos-cajeros.component.html',
  styleUrls: ['./productos-cajeros.component.css']
})
export class ProductosCajerosComponent {
  constructor( private servicioProductos:ProductosService){}

  productos!:Producto[]
  productosT!:Producto[]
  claveBusqueda!:string
  ngOnInit():void{
    this.servicioProductos.getProductosSucursal(this.getSucursal(),this.getRolDB()).subscribe(data=>{
      this.productos=data;
      this.productosT=data;
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
  searchProducto(clave: string) {
    this.productos = clave === "" ? this.productosT : this.buscarProductos(clave, this.productosT);
  }
  

  buscarProductos(clave: string, productos: Producto[]): Producto[] {
    const claveNormalizada = clave.toLowerCase();
    
    return productos.filter(producto => {
      return (
        producto.nombre.toLowerCase().includes(claveNormalizada) || 
        producto.codigo.toString().includes(clave)
      );
    });
  }

}
