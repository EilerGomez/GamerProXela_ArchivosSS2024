import { Component } from '@angular/core';
import { Venta } from 'src/app/Modelo/Venta';
import { VentasService } from 'src/app/Service/ventas.service';
import { ProductosService } from 'src/app/Service/productos.service';
import { Producto } from 'src/app/Modelo/Producto';
import { Usuario } from 'src/app/Modelo/Usuario';
import { data, error } from 'jquery';
import { NgForm } from '@angular/forms';
import { ClientesService } from 'src/app/Service/clientes.service';
import { Cliente } from 'src/app/Modelo/Cliente';
import { ProdcutosVenta } from 'src/app/Modelo/ProductosVenta';
@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent {

  constructor(private servicioVentas:VentasService, private servicioProductos:ProductosService,
    private servicioClientes:ClientesService
  ){}
  ngOnInit():void{
    this.servicioVentas.getVentas(this.getRolDB(),this.getSucursal()).subscribe(data=>{
      this.ventas=data;
      this.traerProductos();
      this.getClientes();
    },error=>{
      console.log(error)
      this.traerProductos();
      this.getClientes();
    })
  }

  productosNuevaVenta!:ProdcutosVenta[]

  mostrarPago:boolean=false;
  aplicarChekDescuento:boolean=false

  ventaDetalle!:Venta
  totalNuevaVenta:number=0
  productos!:Producto[]
  productosT!:Producto[]
  mostrarDetalles:boolean=false
  mostrarNuevaVenta:boolean=false
  mostrarSeleccionarCliente:boolean=false;
  
  clientes!:Cliente[]
  clientesT!:Cliente[]

  ventas!:Venta[]
  precioVentaProducto!:number
  idProductoSeleccionado!:number
  productoSeleccionado:Producto = new Producto(1,"",0,"",12,1,);
  idCliente!:number

  claveBusqueda!:string

  cantidadProducto!:number
  codigoNuevaVenta!:number


  traerProductosNuevaVenta(){
    this.servicioProductos.getProductosNuevaVenta(this.codigoNuevaVenta,this.getRolDB()).subscribe(data=>{
      this.productosNuevaVenta=data;
    }, error=>{
      console.log(error)
    })
  }
  verDetalles(v:Venta){
    this.ventaDetalle=v;
    this.servicioProductos.getProductosNuevaVenta(v.codigo,this.getRolDB()).subscribe(data=>{
      this.productosNuevaVenta=data;
      this.mostrarDetalles=true;
    })
  }

  nuevaVenta(){
    //generar la nueva venta
    this.productosNuevaVenta=[]
    this.totalNuevaVenta=0;
    this.mostrarNuevaVenta=true;
    let v = new Venta(1,this.getIDUser(),"",this.getSucursal(),"",this.idCliente,"","",0,0,"",this.getCaja(),0)
    console.log(v);
    this.servicioVentas.NuevaVenta(v,this.getRolDB()).subscribe(data=>{
      this.codigoNuevaVenta=data.codido_venta
    })
  }
  mostrarInfoProducto(){
    console.log("Mostrar info de producto")
    this.productoSeleccionado = this.getProducto(this.productos,(this.idProductoSeleccionado));
    
  }
  dejarDeMostrarNuevaVenta(){
    if(this.totalNuevaVenta==0){
      this.mostrarNuevaVenta=false;
      this.servicioVentas.deleteVenta(this.getRolDB(),this.codigoNuevaVenta).subscribe(data=>{
        console.log("Venta eliminada al no tener nada")
        this.ngOnInit();
      })
     
      
    }else{
      alert("Debe haber un pago en la venta")
    }
  }
  traerProductos(){
    this.servicioProductos.getProductosSucursal(this.getSucursal(),this.getRolDB()).subscribe(data=>{
      this.productos=data;
      this.productosT=data;
      //console.log(this.productos)
    }, error=>{
      console.log(error)
    })
  }
  agregarProductoAVenta(nuevaVentaForm:NgForm){
    let pv = new ProdcutosVenta(this.codigoNuevaVenta,this.productoSeleccionado.codigo,this.cantidadProducto,this.productoSeleccionado.precio_unitario_venta)
    this.servicioProductos.nuevoProductoVenta(pv,this.getRolDB()).subscribe(data=>{
      alert("Se ha vendido un nuevo producto!!!");
      this.traerProductosNuevaVenta();
      this.traerProductos();
      this.totalNuevaVenta=this.totalNuevaVenta+(pv.cantidad*pv.precio_unitario);
      nuevaVentaForm.resetForm();
    })
    
    //insertar productos a la venta
  }

  getRolDB(){
    let stringUser = localStorage.getItem('usuario');
    let usuario:Usuario = stringUser? JSON.parse(stringUser):null;
    let rol = usuario? usuario.rol:0;
    return rol;
  }
  getCaja(){
    let stringUser = localStorage.getItem('codigocaja');
    let caja:number = parseInt(stringUser? JSON.parse(stringUser):"");
    return caja;
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

  getProducto(productos: Producto[], idp: number): Producto {
    let pr:Producto=new Producto(1,"",0,"",0,4)
    productos.forEach(p => {
      if(p.codigo==idp){
        pr=p;
      }
      
    });
    return pr;
  }

  getClientes(){
    this.servicioClientes.getClientes(this.getRolDB()).subscribe(data=>{
      this.clientes=data;
      console
      .log(this.clientes)
    }, error=>{
      console.log(error)
    })
  }
  

  searchCliente(clave: string) {
    this.clientes = clave === "" ? this.clientesT : this.buscarClientes(clave, this.clientesT);
  }
  

  buscarClientes(clave: string, clientes: Cliente[]): Cliente[] {
    const claveNormalizada = clave.toLowerCase();
    
    return clientes.filter(cliente => {
      return (
        cliente.identificacion.toString().includes(claveNormalizada) || 
        cliente.nombre.toLowerCase().includes(claveNormalizada)||
        cliente.nit.toLowerCase().includes(claveNormalizada)||
        cliente.telefono.toString().includes(claveNormalizada)
      );
    });
  }

  seleccionarCliente(idC:number){
    this.idCliente=idC;
    this.mostrarSeleccionarCliente=false;
    this.productosNuevaVenta=[]
    this.totalNuevaVenta=0;
    this.mostrarNuevaVenta=true;
    let v = new Venta(1,this.getIDUser(),"",this.getSucursal(),"",this.idCliente,"","",0,0,"",this.getCaja(),0)
    console.log(v);
    this.servicioVentas.NuevaVenta(v,this.getRolDB()).subscribe(data=>{
      this.codigoNuevaVenta=data.codigo_venta
    },error=>{
      console.log(error)
    })
  }

  hacerPago(){
    this.mostrarPago=true
  }

  pagarVenta(){
    //aqui logica si aplico descuento y realizar el pago
    if(this.aplicarChekDescuento){
      alert("Aplicar la logica del descuento!!!!!");
    }else{
      alert("Pago realizado!!!!!");
      this.servicioVentas.putDineroCobroSinDescuento(this.codigoNuevaVenta,this.getSucursal(),this.getRolDB()).subscribe(data=>{
        this.mostrarNuevaVenta=false;
        this.ngOnInit();
      },error=>{
        console.log("No se pudo hacer el pago \n"+error)
      })
      
    }
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
