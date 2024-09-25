import { Component } from '@angular/core';
import { Cliente } from 'src/app/Modelo/Cliente';
import { Usuario } from 'src/app/Modelo/Usuario';
import { ReportesService } from 'src/app/Service/reportes.service';

@Component({
  selector: 'app-top10-clientes-mayor-gasto',
  templateUrl: './top10-clientes-mayor-gasto.component.html',
  styleUrls: ['./top10-clientes-mayor-gasto.component.css']
})
export class Top10ClientesMayorGastoComponent {
  constructor(private servicioReportes:ReportesService){}

  clientes!:Cliente[]
  ngOnInit():void{
    this.servicioReportes.get10ClientesCMasGasto(this.getRolDB()).subscribe(data=>{
      this.clientes=data;
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
