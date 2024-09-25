import { Component } from '@angular/core';
import { ClientesService } from 'src/app/Service/clientes.service';
import { SolicitudesModificacionCliente } from 'src/app/Modelo/SolicitudesModificacionCliente';
import { Usuario } from 'src/app/Modelo/Usuario';
import { data, error } from 'jquery';

@Component({
  selector: 'app-modificacion-clientes-solicitudes',
  templateUrl: './modificacion-clientes-solicitudes.component.html',
  styleUrls: ['./modificacion-clientes-solicitudes.component.css']
})
export class ModificacionClientesSolicitudesComponent {
  constructor(private servicioClientes:ClientesService){}

  solicitudes!:SolicitudesModificacionCliente[]
  solicitudesT!:SolicitudesModificacionCliente[]
  claveBusquedaSolicitud!:string
  ngOnInit():void{
    this.llamarSolicitudes();
  }
  llamarSolicitudes(){
    this.servicioClientes.getTodasSolicitudesClientesModificacion(this.getRolDB()).subscribe(data=>{
      this.solicitudes=data;
      this.solicitudesT=data;
      console.log(data)
    })
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
        s.aprobacion.toString().includes(claveNormalizada)||
        s.usuario.toString().includes(claveNormalizada)||
        s.n_usuario.toLowerCase().includes(claveNormalizada)||
        s.n_sucursal.toLowerCase().includes(claveNormalizada)
        
      );
    });
  }
  getEstadoSolicitud(aprobacion:boolean):string{
    return aprobacion? "APROBADA": "NO APROBADA";
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

  aprobarSolicitudModificacion(idS:number, idC:number){
    if(confirm("Aprobar la solicitud para modificar cliente No."+idC)){
      this.servicioClientes.putSolicitudesClientesModificacionliente(idS,this.getRolDB()).subscribe(data=>{
        console.log(data)
        alert("Se ha aprobado al solicitud")
        this.ngOnInit();
      }, error=>{
        console.log(error)
        alert("Error al aprobar la solicitud")
      })
    }
  }
}
