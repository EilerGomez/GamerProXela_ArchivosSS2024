import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { data, error } from 'jquery';
import { Cliente } from 'src/app/Modelo/Cliente';
import { SolicitudesModificacionCliente } from 'src/app/Modelo/SolicitudesModificacionCliente';
import { Usuario } from 'src/app/Modelo/Usuario';
import { ClientesService } from 'src/app/Service/clientes.service';
@Component({
  selector: 'app-solicitudes-modificacion-cliente',
  templateUrl: './solicitudes-modificacion-cliente.component.html',
  styleUrls: ['./solicitudes-modificacion-cliente.component.css']
})
export class SolicitudesModificacionClienteComponent {
  constructor(private servicioClientes:ClientesService){}

  mostrarNuevaSolicitud:boolean=false;
  mostrarEditarSolicitud:boolean=false;
  solicitudes!:SolicitudesModificacionCliente[]
  solicitudesT!:SolicitudesModificacionCliente[]
  claveBusqueda!:string
  claveBusquedaSolicitud!:string
  clientes!:Cliente[]
  clientesT!:Cliente[]

  clienteEdit!:Cliente;

  cliente!:number
  descripcion!:string

  idSolicitudEdit!:number

  ngOnInit():void{
    this.servicioClientes.getClientes(this.getRolDB()).subscribe(data=>{
      this.clientes=data;
      this.clientesT=data;
      this.llamarSolicitudes();
    }, error=>{
      console.log(error)
    })
  }

  llamarSolicitudes(){
    this.servicioClientes.getSolicitudesClientesModificacion(this.getRolDB(),this.getIdUser()).subscribe(data=>{
      this.solicitudes=data;
      this.solicitudesT=data;
      console.log(data)
    })
  }


  guardarNuevaSolicitud(solicitudModificacionClienteForm:NgForm){
    let s = new SolicitudesModificacionCliente(1,this.getIdUser(),"","","",this.getSucursal(),this.cliente,this.descripcion,false,false);
    this.servicioClientes.postSolicitudesClientesModificacionliente(s,this.getRolDB()).subscribe(data=>{
      alert("Se ha enviado la solicitud con exito!!!");
      this.mostrarNuevaSolicitud=false;
      solicitudModificacionClienteForm.resetForm();
      this.ngOnInit();

    },error=>{
      console.log(error);
      alert("Error al enviar la solicitud")
    })
  }

  NuevaSolicitud(){
    this.mostrarNuevaSolicitud=true
  }

  getEstadoSolicitud(aprobacion:boolean):string{
    return aprobacion? "APROBADA": "NO APROBADA";
  }

  searchSolicitudes(clave: string) {
    this.solicitudes = clave === "" ? this.solicitudesT : this.buscarSolicitudes(clave, this.solicitudesT);
  }
  buscarSolicitudes(clave: string, solicitudes: SolicitudesModificacionCliente[]): SolicitudesModificacionCliente[] {
    const claveNormalizada = clave.toLowerCase();
    
    return solicitudes.filter(s => {
      return (
        s.id.toString().includes(claveNormalizada) || 
        s.cliente.toString().includes(claveNormalizada)||
        s.n_cliente.toLowerCase().includes(claveNormalizada)||
        s.descripcion.toLowerCase().includes(clave)||
        s.aprobacion.toString().includes(claveNormalizada)
      );
    });
  }

  searchClientes(clave: string) {
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

  getIdUser():number{
    let stringUser = localStorage.getItem('usuario');
    let usuario:Usuario = stringUser? JSON.parse(stringUser):null;
    let id=usuario? usuario.identificacion:0;
    return id;
  }
  getSucursal(){
    let stringUser = localStorage.getItem('usuario');
    let usuario:Usuario = stringUser? JSON.parse(stringUser):null;
    let suc = usuario? usuario.sucursal:0;
    return suc;
  }


  editarCliente(editClienteForm:NgForm){
    console.log(this.clienteEdit)
    this.servicioClientes.putCliente(this.clienteEdit,this.getRolDB()).subscribe(data=>{
      console.log(data)
      alert("Se ha modificado el cliente correctamente");
      this.mostrarEditarSolicitud=false
      this.modificarEdicionSolicitud();
      this.ngOnInit()
      editClienteForm.resetForm();
    }, error=>{
      console.log(error)
    })
  }

  modificarEdicionSolicitud(){
    this.servicioClientes.putConfirmClienteEditado(this.idSolicitudEdit,this.getRolDB()).subscribe(data=>{

    }, error=>{console.log(error)})
  }

  mostrarEditarCliente(idCliente:number, idSolicitud:number){
    this.idSolicitudEdit=idSolicitud;
    this.mostrarEditarSolicitud=true;
    this.clienteEdit=this.getClienteParaEditar(idCliente)
  
  }

  getClienteParaEditar(idCliente: number): Cliente {
    const cliente = this.clientesT.find(cliente => cliente.identificacion === idCliente);
    if (!cliente) {
      throw new Error(`Cliente con ID ${idCliente} no encontrado`);
    }
    return cliente;
  }
  
  
  
}
