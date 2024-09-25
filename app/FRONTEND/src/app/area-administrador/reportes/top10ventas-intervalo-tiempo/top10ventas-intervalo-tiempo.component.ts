import { Component } from '@angular/core';
import { Usuario } from 'src/app/Modelo/Usuario';
import { Venta } from 'src/app/Modelo/Venta';
import { ReportesService } from 'src/app/Service/reportes.service';
@Component({
  selector: 'app-top10ventas-intervalo-tiempo',
  templateUrl: './top10ventas-intervalo-tiempo.component.html',
  styleUrls: ['./top10ventas-intervalo-tiempo.component.css']
})
export class Top10ventasIntervaloTiempoComponent {

  constructor(private servicioReportes:ReportesService){}
  de!:string
  hasta!:string

  ventas!:Venta[]
  ngOnInit():void{
    this.servicioReportes.get10VentasMasGrandesXTiempo(this.getRolDB(),this.obtenerFechaActual(),this.obtenerFechaActual()).subscribe(data=>{
      this.ventas=data;
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

  buscarVentas(){
    this.servicioReportes.getDescuentosXTiempo(this.getRolDB(),this.de,this.hasta).subscribe(data=>{
      this.ventas=data;
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
