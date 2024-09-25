import { Component } from '@angular/core';
import { Producto } from 'src/app/Modelo/Producto';
import { Usuario } from 'src/app/Modelo/Usuario';
import { ReportesService } from 'src/app/Service/reportes.service';

@Component({
  selector: 'app-top10-productos-mas-vendidos',
  templateUrl: './top10-productos-mas-vendidos.component.html',
  styleUrls: ['./top10-productos-mas-vendidos.component.css']
})
export class Top10ProductosMasVendidosComponent {

  constructor(private servicioReportes:ReportesService){}

  productos!:Producto[]
  ngOnInit():void{
    this.servicioReportes.get10ArticulosMasVendidos(this.getRolDB()).subscribe(data=>{
      this.productos=data;
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
