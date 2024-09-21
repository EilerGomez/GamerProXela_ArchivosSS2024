import { Component } from '@angular/core';
import { Producto } from 'src/app/Modelo/Producto';
import { ProductosService } from 'src/app/Service/productos.service';
import { Usuario } from 'src/app/Modelo/Usuario';
import { NgForm } from '@angular/forms';
import { data, error } from 'jquery';
@Component({
  selector: 'app-trasladar-productos',
  templateUrl: './trasladar-productos.component.html',
  styleUrls: ['./trasladar-productos.component.css']
})
export class TrasladarProductosComponent {

  constructor(private servicioProductos:ProductosService){}

  productoPasanteStanteria!:Producto
  productos!:Producto[]
  mostrarTrasladar:boolean=false
  claveBusqueda!:string
  productosT!:Producto[]

  pasilloEstanteria!:number
  cantidadPrEstanteria!:number

  ngOnInit():void{
    this.servicioProductos.getProductosSucursal(this.getSucursal(),this.getRolDB()).subscribe(data=>{
      this.productos=data;
      this.productosT=data;
    })
  }
  getRolDB(){
    let stringUser = localStorage.getItem('usuario');
    let usuario:Usuario = stringUser? JSON.parse(stringUser):null;
    let rol = usuario? usuario.rol:0;
    return rol;
  }
  getSucursal(){
    let stringUser = localStorage.getItem('usuario');
    let usuario:Usuario = stringUser? JSON.parse(stringUser):null;
    let suc = usuario? usuario.sucursal:0;
    return suc;
  }


  addEstanteria(p:Producto){
    this.productoPasanteStanteria=p;
    this.mostrarTrasladar=true
    this.pasilloEstanteria=p.pasillo_estanteria
  }

  agregarProductoEstanteria(agregarEstanteria:NgForm){
    console.log(this.productoPasanteStanteria);
    let p = new Producto(this.productoPasanteStanteria.codigo,this.productoPasanteStanteria.nombre,
      0.1,this.productoPasanteStanteria.sucursal,this.productoPasanteStanteria.cantidad_bodega,
      this.productoPasanteStanteria.pasillo_bodega
    );
    p.setPasilloEstanteria(this.pasilloEstanteria);
    p.setCantidadEstanteria(this.cantidadPrEstanteria);
    p.setSucursal(this.getSucursal().toString())
    console.log(p);
    //metodo para actualizar valores
    this.servicioProductos.pasarProductosBodegaAEstanteria(p,this.getRolDB()).subscribe(data=>{
      agregarEstanteria.resetForm();
      alert("Se ha pasado productos a estanterias correctamente");
      this.mostrarTrasladar=false;
      this.ngOnInit();
    }, error=>{
      console.log(error);
      alert("Error al pasar productos a estanterias revise si la cantidad que desee pasar esceda del que esta en bodegas!!")
    })
    //agregarEstanteria.resetForm();
  }

  searchProducto(clave: string) {
    this.productos = clave === "" ? this.productosT : this.buscarProductos(clave, this.productosT);
  }
  

  buscarProductos(clave: string, productos: Producto[]): Producto[] {
    const claveNormalizada = clave.toLowerCase();
    
    return productos.filter(producto => {
      return (
        producto.nombre.toLowerCase().includes(claveNormalizada) || 
        producto.codigo.toString().includes(clave)||
        producto.precio_unitario_venta.toString().includes(clave)
      );
    });
  }
  
}
