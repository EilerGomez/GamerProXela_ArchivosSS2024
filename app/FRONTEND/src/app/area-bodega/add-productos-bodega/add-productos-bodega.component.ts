import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { data } from 'jquery';
import { Producto } from 'src/app/Modelo/Producto';
import { Usuario } from 'src/app/Modelo/Usuario';
import { ProductosService } from 'src/app/Service/productos.service';
import { ProductosSucursales } from 'src/app/Modelo/ProductosSucursales';

@Component({
  selector: 'app-add-productos-bodega',
  templateUrl: './add-productos-bodega.component.html',
  styleUrls: ['./add-productos-bodega.component.css']
})
export class AddProductosBodegaComponent {
  constructor(private servicioProductos:ProductosService){}
  mostrarNuevoIncluido:boolean=false
  mostrarNuevo:boolean=false
  productos!:Producto[]
  productosT!:Producto[]

  pasillobodega!:number
  idProductoIncluido!:number

  nombreNuevoProducto!:string
  precioventaNuevoProducto!:number

  claveBusqueda!:string

  ngOnInit():void{
    this.servicioProductos.getProductosNoInlcuidos(this.getSucursal(),this.getRolDB()).subscribe(data=>{
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

  dejarDeMostrarNuevoIncluido(){
    this.mostrarNuevoIncluido=false;
  }

  agregarNuevoIncluido(nuevoIncluidoForm:NgForm){
    let ps = new ProductosSucursales(this.idProductoIncluido,this.getSucursal(),0,0,this.pasillobodega,0);
    console.log(ps)
    this.servicioProductos.nuevoProductoSucursal(ps,this.getRolDB()).subscribe(data=>{
      alert("Se ha incluido el producto al sucursal");
      this.ngOnInit();
      nuevoIncluidoForm.resetForm();
      this.mostrarNuevoIncluido=false
    })
   
  }

  dejarDeMostrarNuevo(){
    this.mostrarNuevo=false
  }

  agregarNuevoProducto(nuevoProducto:NgForm){
    let p = new Producto(0,this.nombreNuevoProducto,this.precioventaNuevoProducto,"",0,1);
    this.servicioProductos.nuevoProducto(p,this.getRolDB()).subscribe(data=>{
      alert("Se ha agregado un nuevo producto al sistema")
      nuevoProducto.resetForm()
      this.ngOnInit();
    })
    
  }

  addIncluido(p:Producto){
    this.mostrarNuevoIncluido=true;
    this.idProductoIncluido=p.codigo;
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
