import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './Service/login.service';
import { AreaAdministradorComponent } from './area-administrador/area-administrador.component';
import { EspacioAdminComponent } from './area-administrador/espacio-admin/espacio-admin.component';
import { ManagerHomepageComponent } from './manager-homepage/manager-homepage.component';
import { NavbarComponent } from './navbar/navbar.component'
import { ListarUsuariosComponent } from './area-administrador/listar-usuarios/listar-usuarios.component'
import { UsuariosService } from './Service/usuarios.service';
import { SucursalesService } from './Service/sucursales.service';
import { AreaBodegaComponent } from './area-bodega/area-bodega.component';
import { EspacioBodegaComponent } from './area-bodega/espacio-bodega/espacio-bodega.component';
import { ComprasComponent } from './area-bodega/compras/compras.component';
import { ComprasService } from './Service/compras.service';
import { ProductosService } from './Service/productos.service';
import { AddProductosBodegaComponent } from './area-bodega/add-productos-bodega/add-productos-bodega.component';
import { AreaInventarioComponent } from './area-inventario/area-inventario.component';
import { EspacioInventarioComponent } from './area-inventario/espacio-inventario/espacio-inventario.component';
import { TodosProductosComponent } from './area-bodega/todos-productos/todos-productos.component';
import { TrasladarProductosComponent } from './area-inventario/trasladar-productos/trasladar-productos.component';
import { ConsultarProductosComponent } from './area-inventario/consultar-productos/consultar-productos.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AreaAdministradorComponent,
    EspacioAdminComponent,
    ManagerHomepageComponent,
    NavbarComponent,
    ListarUsuariosComponent,
    AreaBodegaComponent,
    EspacioBodegaComponent,
    ComprasComponent,
    AddProductosBodegaComponent,
    AreaInventarioComponent,
    EspacioInventarioComponent,
    TodosProductosComponent,
    TrasladarProductosComponent,
    ConsultarProductosComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ LoginService,SucursalesService,
  UsuariosService, ComprasService,ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
