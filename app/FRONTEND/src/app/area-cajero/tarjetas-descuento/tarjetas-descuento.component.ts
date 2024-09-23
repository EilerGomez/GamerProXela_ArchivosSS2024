import { Component } from '@angular/core';
import { Cliente } from 'src/app/Modelo/Cliente';
import { TarjetasDescuento } from 'src/app/Modelo/TarjetasDescuento';
import { ClientesService } from 'src/app/Service/clientes.service';
import { TarjetasService } from 'src/app/Service/tarjetas.service';
import { Usuario } from 'src/app/Modelo/Usuario';
import { NgForm } from '@angular/forms';
import { data, error } from 'jquery';
import * as e from 'cors';
@Component({
  selector: 'app-tarjetas-descuento',
  templateUrl: './tarjetas-descuento.component.html',
  styleUrls: ['./tarjetas-descuento.component.css']
})
export class TarjetasDescuentoComponent {

  constructor(private servicioTarjetas:TarjetasService,private servicioClientes:ClientesService){}
  ngOnInit():void{
    this.servicioTarjetas.getTarjetas(this.getRolDB()).subscribe(data=>{
      this.tarjetas=data;
      this.tarjetasT=data;
      this.getClientes();
    },error=>{
      console.log(error)
      this.getClientes();
    })
  }
  
  clientes!:Cliente[]
  mostrarAgregarTarjeta:boolean=false
  claveBusqueda!:string
  tarjetas!:TarjetasDescuento[]
  tarjetasT!:TarjetasDescuento[]

  idCliente!:number;

 
  searchTarjeta(clave: string) {
    this.tarjetas = clave === "" ? this.tarjetasT : this.buscarTarjetas(clave, this.tarjetasT);
  }
  

  buscarTarjetas(clave: string, tr: TarjetasDescuento[]): TarjetasDescuento[] {
    const claveNormalizada = clave.toLowerCase();
    
    return tr.filter(t => {
      return (
        t.codigo.toString().toLowerCase().includes(claveNormalizada)||
        t.tipo.toString().toLowerCase().includes(claveNormalizada)||
        t.cliente.toString().toLowerCase().includes(claveNormalizada)||
        t.n_cliente.toLowerCase().includes(claveNormalizada)||
        t.total_puntos.toString().toLowerCase().includes(claveNormalizada)||
        t.fecha_mod.toLowerCase().includes(claveNormalizada)
      );
    });
  }

  getClientes(){
    this.servicioClientes.getClientes(this.getRolDB()).subscribe(data=>{
      this.clientes=data;
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

  agregarTarjeta(nuevaTarjetaForm:NgForm){
    this.servicioTarjetas.nuevaTarjeta(this.idCliente,this.getRolDB()).subscribe(data=>{
      alert("Se ha agregado la tarjeta al cliente: " + this.idCliente);
      nuevaTarjetaForm.resetForm();
      this.mostrarAgregarTarjeta=false;
      this.ngOnInit();
    }, error=>{
      console.log(error);
      alert("El usuario ya cuenta con una tarjeta");
    })
  }

  dejarDeMostrarNuevaTarjeta(nuevaTarjetaForm:NgForm){
    this.mostrarAgregarTarjeta=false;
    nuevaTarjetaForm.resetForm();
  }

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

  getPuntos(p:number):number{
    return Math.floor(p);
  }
}
