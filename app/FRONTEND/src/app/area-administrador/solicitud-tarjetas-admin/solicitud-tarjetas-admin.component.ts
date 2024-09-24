import { Component } from '@angular/core';
import { SolicitudesTarjetas } from 'src/app/Modelo/SolicitudesTarjetas';
import { SolicitudesTarjetasService } from 'src/app/Service/solicitudes-tarjetas.service';
import { TarjetasService } from 'src/app/Service/tarjetas.service';
import { TarjetasDescuento } from 'src/app/Modelo/TarjetasDescuento';
import { Usuario } from 'src/app/Modelo/Usuario';
import { data, error } from 'jquery';

@Component({
  selector: 'app-solicitud-tarjetas-admin',
  templateUrl: './solicitud-tarjetas-admin.component.html',
  styleUrls: ['./solicitud-tarjetas-admin.component.css']
})
export class SolicitudTarjetasAdminComponent {

  constructor(private servicioSolicitud:SolicitudesTarjetasService,
    private servicioTarjetas:TarjetasService
  ){}

  mostrarInfoTarjeta:boolean=false

  solicitudes!:SolicitudesTarjetas[]
  solicitudesT!:SolicitudesTarjetas[]
  claveBusqueda!:string
  tarjetas!:TarjetasDescuento[]
  tarjetaDetalles!:TarjetasDescuento

  ngOnInit():void{
    this.servicioSolicitud.getSolicitudesTarjetas(this.getRolDB()).subscribe(data=>{
      this.solicitudes=data;
      this.solicitudesT=data;
      this.getTarjetasDescuento();
    },error=>{
      console.log(error)
    })
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



  getTarjetasDescuento(){
    this.servicioTarjetas.getTarjetas(this.getRolDB()).subscribe(data=>{
      this.tarjetas=data;
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

  aceptarSolicitud(s:SolicitudesTarjetas){
    //logica para ver si aprueba el cambio o no
    this.tarjetaDetalles=this.getTarjetaDescuento(this.tarjetas,s.cliente);
    let solicitud:number = s.codigo;
    let cliente:number = this.tarjetaDetalles.cliente;
    let motivo:string = s.motivo;
    let fechamod:string= (this.tarjetaDetalles.fecha_mod).substring(0,10);
    this.servicioSolicitud.cambiarTipoTarjeta(this.getRolDB(),solicitud,cliente,motivo,fechamod).subscribe(data=>{
      if(data.cambiartipotarjeta=="RECHAZADA"){
        alert("La tarjeta no puede ser cambiada debido a que el cliente: " + s.n_cliente + ", no cumple con el minimo de compras para el cambio !!!");
      }else{
        alert("LA TARJETA HA SIDO CAMBIADA A " +  this.getTipo(s.motivo.substring(1,2)));
      }
      this.ngOnInit();
    }, error=>{
      console.log(error)
    })
  }

  verDetalles(s:SolicitudesTarjetas){
    this.tarjetaDetalles=this.getTarjetaDescuento(this.tarjetas,s.cliente);
    this.mostrarInfoTarjeta=true
  }

  getTarjetaDescuento(td:TarjetasDescuento[], idCliente:number):TarjetasDescuento{
    let tr = new TarjetasDescuento(0,"",12,"",12,2,2,"");
    td.forEach(t => {
      if(t.cliente==idCliente){
        tr=t;
        return;
      }
    });
    return tr;
  }

  getPuntos(p:number):number{
    return Math.floor(p);
  }

}
