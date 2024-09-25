import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Service/login.service';
import { Usuario } from '../Modelo/Usuario';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router, private service: LoginService) { }


  email:String = "";
  userLoggedIn() {
    return localStorage.getItem('usuario') ? true : false;
  }
  getSucursal(){
    let stringUser = localStorage.getItem('usuario');
    let usuario:Usuario = stringUser? JSON.parse(stringUser):null;
    let suc = usuario? usuario.sucursal:0;
    return suc;
  }
  mostrarSucursal(){
    switch (this.getSucursal()) {
      case 1:
        return 'Sucursal Parque';
      case 2:
        return 'Sucursal Centro1';
      case 3:
        return 'Sucursal Centro2';
      default:
        return 'desconocido';
    }
  }

  logOut() {
    localStorage.removeItem('usuario');
    if(localStorage.getItem('area')==='4'){
      localStorage.removeItem('codigocaja');
    }
    localStorage.removeItem('area');
    this.router.navigate(['/homepage']);
    this.service.putCerrarConexionDB("a").subscribe(data=>{
      console.log(data)
    }, error=>{console.log(error)});
  }

  getUserEmail() {
    let stringUser = localStorage.getItem('usuario');
    let area = localStorage.getItem('area'); 
    let user:Usuario = stringUser? JSON.parse(stringUser):null;
    this.email=user.nombre;
    return this.email;

  }

}
