import { Component, OnInit } from '@angular/core';
import { Compra } from 'src/app/Modelo/Compra';
import { ComprasService } from 'src/app/Service/compras.service';
import { Usuario } from 'src/app/Modelo/Usuario';
import { data, error } from 'jquery';
@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent {
  constructor(private servicioCompras:ComprasService){}
  compras!:Compra[]

  ngOnInit():void{
    this.servicioCompras.getCompras(this.getRolDB()).subscribe(data=>{
      this.compras=data;
    }, error=>{
      console.log(error)
    })
  }
  verDetalles(compra:Compra){

  }

  filtrarCompras(filtro:string){
    console.log("filtro: " + filtro)
  }

  getRolDB(){
    let stringUser = localStorage.getItem('usuario');
    let usuario:Usuario = stringUser? JSON.parse(stringUser):null;
    let rol = usuario? usuario.rol:0;
    return rol;
  }
}
