import { Component } from '@angular/core';
import { SolicitudesTarjetas } from 'src/app/Modelo/SolicitudesTarjetas';
import { TarjetasDescuento } from 'src/app/Modelo/TarjetasDescuento';
import { SolicitudesTarjetasService } from 'src/app/Service/solicitudes-tarjetas.service';
import { TarjetasService } from 'src/app/Service/tarjetas.service';
import { Usuario } from 'src/app/Modelo/Usuario';
import { data, error } from 'jquery';
import { NgFor } from '@angular/common';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-solicitud-tarjetas',
  templateUrl: './solicitud-tarjetas.component.html',
  styleUrls: ['./solicitud-tarjetas.component.css']
})
export class SolicitudTarjetasComponent {

  constructor(private servicioSolicitud:SolicitudesTarjetasService,
    private servicioTarjetas:TarjetasService
  ){}

  ngOnInit():void{
    this.servicioSolicitud.getSolicitudesTarjetas(this.getRolDB()).subscribe(data=>{
      this.solicitudes=data;
      this.solicitudesT=data;
      this.getTarjetasDescuento();
    },error=>{
      console.log(error)
    })
  }

  idCliente!:number

  tarjetas!:TarjetasDescuento[]
  tarjetasT!:TarjetasDescuento[]
  solicitudes!:SolicitudesTarjetas[]
  solicitudesT!:SolicitudesTarjetas[]
  mostrarAgregarNuevaSolicitud:boolean=false;

  claveBusqueda!:string
  
  motivoCambio!:string
  descripcion!:string

  getTipo(t:string):string{
    switch (t) {
      case "C":
        return "Comun";
        break;
      case "O": return "Oro"
        break
      case "P": return "Platino"
        break
      default:
        return "Diamante"
        break;
    }
  }

  getTarjetasDescuento(){
    this.servicioTarjetas.getTarjetas(this.getRolDB()).subscribe(data=>{
      this.tarjetas=data;
      this.tarjetasT=data;
    },error=>{
      console.log(error)
    })
  }

 

  searchSolicitud(clave:string){
    this.solicitudes = clave === "" ? this.solicitudesT : this.buscarSolicitudes(clave, this.solicitudesT);

  }

  buscarSolicitudes(clave: string, st: SolicitudesTarjetas[]):SolicitudesTarjetas[]{
    const claveNormalizada = clave.toLowerCase();
    
    return st.filter(s => {
      return (
        s.codigo.toString().toLowerCase().includes(claveNormalizada)||
        s.n_cliente.toLowerCase().includes(claveNormalizada)
      );
    });
  }

  getRolDB(){
    let stringUser = localStorage.getItem('usuario');
    let usuario:Usuario = stringUser? JSON.parse(stringUser):null;
    let rol = usuario? usuario.rol:0;
    return rol;
  }

  searchTarjeta(clave: string) {
    this.tarjetas = clave === "" ? this.tarjetasT : this.buscarTarjetas(clave, this.tarjetasT);
  }
  

  buscarTarjetas(clave: string, tr: TarjetasDescuento[]): TarjetasDescuento[] {
    const claveNormalizada = clave.toLowerCase();
    
    return tr.filter(t => {
      return (
        t.codigo.toString().toLowerCase().includes(claveNormalizada)||
        t.tipo.toString().toLowerCase().includes(claveNormalizada)||
        t.cliente.toString().toLowerCase().includes(claveNormalizada)
      );
    });
  }

  dejarDeMostrarNuevaSolicitud(nuevaSolicitudForm:NgForm){
    nuevaSolicitudForm.resetForm();
    this.mostrarAgregarNuevaSolicitud=false
  }

  agregarSolicitud(form:NgForm){
    //agregar solicitud
    this.claveBusqueda=""
    let st = new SolicitudesTarjetas(1,"",this.idCliente,"",this.motivoCambio,this.descripcion);
    this.servicioSolicitud.postSolicitudesTarjetas(this.getRolDB(),st).subscribe(data=>{
      alert("Solicitud enviada");
      form.resetForm();
      this.mostrarAgregarNuevaSolicitud=false;
      this.ngOnInit();
    },error=>{
      console.log(error)
    })
  }

  mostrarNuevaSolicitud(){
    this.mostrarAgregarNuevaSolicitud=true;
    this.claveBusqueda=""
  }
}
