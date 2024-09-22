import { Component } from '@angular/core';
import { Cajas } from 'src/app/Modelo/Cajas';
import { CajasService } from 'src/app/Service/cajas.service';
import { Usuario } from 'src/app/Modelo/Usuario';
import { data, error } from 'jquery';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cajas',
  templateUrl: './cajas.component.html',
  styleUrls: ['./cajas.component.css']
})
export class CajasComponent {
  constructor(private servicioCajas:CajasService){}
  mostrarNuevaCaja:boolean=false
  cajas!:Cajas[]
  usuarios!:Usuario[]

  idSucursal!:number
  idUser!:number

  ngOnInit():void{
    this.servicioCajas.getCajas(this.getRolDB()).subscribe(data=>{
      this.cajas=data;
    },error=>{
      console.log(error)
    })
    
  }

  getRolDB():number{
    let stringUser = localStorage.getItem('usuario');
    let usuario:Usuario = stringUser? JSON.parse(stringUser):null;
    let rol = usuario? usuario.rol:0;
    return rol;
  }

  llamarUsuariosCajas(sucursalForm:NgForm){
    console.log(this.idSucursal)
    this.servicioCajas.getUsuariosNoAsignadosACajas(this.getRolDB(),this.idSucursal).subscribe(data=>{
      this.usuarios=data;
      console.log(data)
    }, error=>{
      this.usuarios=[];
      console.log(error);
      alert("La sucursal que has seleccionado no tiene ningun usuario cajero disponible")
    })
  }

  guardarCaja(){
    console.log(this.idUser+", " + this.idSucursal);
    let c = new Cajas(1,"",this.idUser,"",this.idSucursal);
    this.servicioCajas.postCaja(c,this.getRolDB()).subscribe(data=>{
      alert("Se ha agregado la nueva Caja con exito!");
      this.usuarios=[];
      this.mostrarNuevaCaja=false;
      this.ngOnInit();
    }, error=>{
      console.log(error)
    })
  }
}
