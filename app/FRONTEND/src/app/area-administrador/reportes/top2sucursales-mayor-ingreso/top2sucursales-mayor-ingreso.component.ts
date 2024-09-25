import { Component } from '@angular/core';
import { Sucursal } from 'src/app/Modelo/Sucursal';
import { Usuario } from 'src/app/Modelo/Usuario';
import { ReportesService } from 'src/app/Service/reportes.service';

@Component({
  selector: 'app-top2sucursales-mayor-ingreso',
  templateUrl: './top2sucursales-mayor-ingreso.component.html',
  styleUrls: ['./top2sucursales-mayor-ingreso.component.css']
})
export class Top2sucursalesMayorIngresoComponent {
  constructor(private servicioReportes:ReportesService){}

  sucursales!:Sucursal[]
  ngOnInit():void{
    this.servicioReportes.get2SucursalesCMasIngreso(this.getRolDB()).subscribe(data=>{
      this.sucursales=data;
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
