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
import { AreaCajeroComponent } from './area-cajero/area-cajero.component';
import { EspacioCajeroComponent } from './area-cajero/espacio-cajero/espacio-cajero.component';
import { CajasComponent } from './area-administrador/cajas/cajas.component';
import { CajasService } from './Service/cajas.service';
import { ClientesComponent } from './area-cajero/clientes/clientes.component';
import { SolicitudesModificacionClienteComponent } from './area-cajero/solicitudes-modificacion-cliente/solicitudes-modificacion-cliente.component';
import { ClientesService } from './Service/clientes.service';
import { ModificacionClientesSolicitudesComponent } from './area-administrador/modificacion-clientes-solicitudes/modificacion-clientes-solicitudes.component';
import { ProductosCajerosComponent } from './area-cajero/productos-cajeros/productos-cajeros.component';
import { VentasComponent } from './area-cajero/ventas/ventas.component';
import { VentasService } from './Service/ventas.service';
import { InfoSucursalComponent } from './area-cajero/info-sucursal/info-sucursal.component';
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
    ConsultarProductosComponent,
    AreaCajeroComponent,
    EspacioCajeroComponent,
    CajasComponent,
    ClientesComponent,
    SolicitudesModificacionClienteComponent,
    ModificacionClientesSolicitudesComponent,
    ProductosCajerosComponent,
    VentasComponent,
    InfoSucursalComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ LoginService,SucursalesService,
  UsuariosService, ComprasService,ProductosService,CajasService,ClientesService,
  VentasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
