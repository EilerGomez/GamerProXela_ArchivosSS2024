import { Component } from '@angular/core';
import { Sucursal } from 'src/app/Modelo/Sucursal';
import { SucursalesService } from 'src/app/Service/sucursales.service';
import { Usuario } from 'src/app/Modelo/Usuario';
import { data, error } from 'jquery';
@Component({
  selector: 'app-info-sucursal',
  templateUrl: './info-sucursal.component.html',
  styleUrls: ['./info-sucursal.component.css']
})
export class InfoSucursalComponent {
  constructor(private servicioSucursales:SucursalesService){}
  sucursal!:Sucursal

  ngOnInit():void{
    this.servicioSucursales.getSucursal(this.getRolDB(),this.getSucursal()).subscribe(data=>{
      this.sucursal=data
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
  getIDUser(){
    let stringUser = localStorage.getItem('usuario');
    let usuario:Usuario = stringUser? JSON.parse(stringUser):null;
    let rol = usuario? usuario.identificacion:0;
    return rol;
  }
  getSucursal(){
    let stringUser = localStorage.getItem('usuario');
    let usuario:Usuario = stringUser? JSON.parse(stringUser):null;
    let suc = usuario? usuario.sucursal:0;
    return suc;
  }
    
}
