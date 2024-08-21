import { Component,OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/Service/usuarios.service';
import { SucursalesService } from 'src/app/Service/sucursales.service';
import { Usuario } from 'src/app/Modelo/Usuario';
import { data, error } from 'jquery';
import { Sucursal } from 'src/app/Modelo/Sucursal';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent {
  constructor(private servicioUser:UsuariosService, private servicioSucursal:SucursalesService){}
  mostrarEditar: boolean = false;
  mostrarNuevoUsuario: boolean = false;
  usuarios!:Usuario[]
  sucursales!:Sucursal[]
  usuarioEdit!:Usuario
  nuevoUsuario!:Usuario

  /*para nuevo usuario */
  nombreUsuario: string = '';
  rolUsuario: string  = '';
  sucursalUsuario: string  = '';
  password: string = '';
  confirmPassword: string = '';

  getRolDB():number{
    let stringUser = localStorage.getItem('usuario');
    let usuario:Usuario = stringUser? JSON.parse(stringUser):null;
    let rol = usuario? usuario.rol:0;
    return rol;
  }
  ngOnInit():void{
    let stringUser = localStorage.getItem('usuario');
    let usuario:Usuario = stringUser? JSON.parse(stringUser):null;
    let rol = usuario? usuario.rol:0;
    this.servicioUser.getUsuarios(rol).subscribe(data => {
      this.traerSucursales(rol)
      this.usuarios = data;
      
    })
    
  }
  traerSucursales(rol:number){
    this.servicioSucursal.getSucursales(rol).subscribe(data=>{
      this.sucursales=data;
    },error=>{console.log(error)})
  }
  obtenerRol(rol: number): string {
    switch (rol) {
      case 1:
        return 'Administrador';
      case 2:
        return 'De inventario';
      case 3:
        return 'Bodeguero';
      case 4:
        return 'Cajero';
      default:
        return 'Desconocido';
    }
  }

  obtenerSucursal(sucursal:number):string{
    switch (sucursal) {
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

  veificarRol(usuario:Usuario):Usuario{
    if(usuario.rol==0) usuario.rol=this.usuarioEdit.rol;
    return usuario;
  }
  actualizarUsuario(id:number,nombre:String,pass:String,rol:string,sucural:string){
    const userAct= new Usuario(id,nombre,pass,parseInt(rol),parseInt(sucural))
    this.servicioUser.putUsuario(this.veificarRol(userAct),this.getRolDB()).subscribe(data=>{
      console.log(data)
      this.ngOnInit();
      alert('El usuario ' + userAct.identificacion + ' ha sido actualizado');
      
      this.usuarioEdit=userAct;
    }, error=>{
      alert('Error al actualizar los datos del usuario '+userAct.identificacion);
      this.ngOnInit();
    })
    this.mostrarEditar=false
    
  }
  mostrarActualizar(usuario:Usuario){
    this.usuarioEdit=new Usuario(usuario.identificacion,usuario.nombre,usuario.pass,usuario.rol,usuario.sucursal);
    this.usuarioEdit=usuario;
    this.mostrarEditar=true;
    this.mostrarNuevoUsuario=false
  }

  eliminarUser(usuario:Usuario){
    const confirmacion = confirm("¿Estás seguro de que deseas eliminar el usuario: "+usuario.identificacion + " - "+usuario.nombre  + "?");
    if(confirmacion){
      this.servicioUser.deleteUsuario(usuario,this.getRolDB()).subscribe(data=>{
        this.ngOnInit();
        alert("Se ha eliminado correctamente el usuario")
      })
    }
  }

  crearNuevoUsuario(){
    const userAct= new Usuario(10,this.nombreUsuario,this.confirmPassword,parseInt(this.rolUsuario),parseInt(this.sucursalUsuario))
    this.servicioUser.postUsuario(userAct,this.getRolDB()).subscribe(data=>{
      alert("Se ha creado el nuevo usuario!")
      this.mostrarNuevoUsuario=false;
      this.ngOnInit()
    },error=>{
      alert("Error al guardar el nuevo usuario!")
      this.ngOnInit()
    })
  }
}
