import { Component } from '@angular/core';
import { Cliente } from 'src/app/Modelo/Cliente';
import { ClientesService } from 'src/app/Service/clientes.service';
import { Usuario } from 'src/app/Modelo/Usuario';
import { data, error } from 'jquery';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  constructor(private servicioClientes:ClientesService){}
  mostrarNuevoCliente:boolean=false;
  clientes!:Cliente[]
  clientesT!:Cliente[]
  claveBusqueda!:string

  nombreCliente!:string
  telefonoCliente!:number
  nitCliente!:string

  ngOnInit():void{
    this.servicioClientes.getClientes(this.getRolDB()).subscribe(data=>{
      this.clientes=data;
      this.clientesT=data;
    }, error=>{
      console.log(error)
    })
  }
  crearNuevoCliente(nuevoClienteForm:NgForm){
    let c = new Cliente(1,this.nombreCliente,this.telefonoCliente,this.nitCliente);
    console.log(c);
    this.servicioClientes.postCliente(c,this.getRolDB()).subscribe(data=>{
      alert("Se ha agregado el cliente con exito");
      nuevoClienteForm.resetForm();
      this.mostrarNuevoCliente=false;
      this.ngOnInit()
    })
   
  }
  NuevoCliente(){
    this.mostrarNuevoCliente=true
  }

  searchProducto(clave: string) {
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

  getRolDB(){
    let stringUser = localStorage.getItem('usuario');
    let usuario:Usuario = stringUser? JSON.parse(stringUser):null;
    let rol = usuario? usuario.rol:0;
    return rol;
  }
}
