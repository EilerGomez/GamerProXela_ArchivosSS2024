import { Component } from '@angular/core';
import { ReportesService } from 'src/app/Service/reportes.service';
import { Usuario } from 'src/app/Modelo/Usuario';
import { Venta } from 'src/app/Modelo/Venta';
@Component({
  selector: 'app-historial-descuentos',
  templateUrl: './historial-descuentos.component.html',
  styleUrls: ['./historial-descuentos.component.css']
})
export class HistorialDescuentosComponent {
  constructor(private servicioReportes:ReportesService){}
  de!:string
  hasta!:string

  descuentos!:Venta[]
  ngOnInit():void{
    this.servicioReportes.getDescuentosXTiempo(this.getRolDB(),this.obtenerFechaActual(),this.obtenerFechaActual()).subscribe(data=>{
      this.descuentos=data;
    },error=>{
      console.log(error)
    })
  }

  obtenerFechaActual(): string {
    const hoy = new Date();
    const año = hoy.getFullYear();
    const mes = ('0' + (hoy.getMonth() + 1)).slice(-2); // Sumar 1 porque los meses son 0 indexados
    const dia = ('0' + hoy.getDate()).slice(-2);
    
    return `${año}-${mes}-${dia}`;
  }

  buscarDescuentos(){
    this.servicioReportes.getDescuentosXTiempo(this.getRolDB(),this.de,this.hasta).subscribe(data=>{
      this.descuentos=data;
    },error=>{
      console.log(error)
    })
  }



  getRolDB(){
    let stringUser = localStorage.getItem('usuario');
    let usuario:Usuario = stringUser? JSON.parse(stringUser):null;
    let rol = usuario? usuario.rol:0;
    return rol;
  }
}
