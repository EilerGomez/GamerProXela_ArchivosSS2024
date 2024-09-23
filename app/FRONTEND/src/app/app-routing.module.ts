import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaAdministradorComponent } from './area-administrador/area-administrador.component'
import { LoginComponent } from './login/login.component'
import { ManagerHomepageComponent } from './manager-homepage/manager-homepage.component'
import { ListarUsuariosComponent } from './area-administrador/listar-usuarios/listar-usuarios.component'
import { AreaBodegaComponent } from './area-bodega/area-bodega.component';
import { ComprasComponent } from './area-bodega/compras/compras.component';
import { AddProductosBodegaComponent } from './area-bodega/add-productos-bodega/add-productos-bodega.component';
import { AreaInventarioComponent } from './area-inventario/area-inventario.component';
import { EspacioInventarioComponent } from './area-inventario/espacio-inventario/espacio-inventario.component';
import { TodosProductosComponent } from './area-bodega/todos-productos/todos-productos.component';
import { TrasladarProductosComponent } from './area-inventario/trasladar-productos/trasladar-productos.component';
import { ConsultarProductosComponent } from './area-inventario/consultar-productos/consultar-productos.component';
import { EspacioCajeroComponent } from './area-cajero/espacio-cajero/espacio-cajero.component';
import { AreaCajeroComponent } from './area-cajero/area-cajero.component';
import { CajasComponent } from './area-administrador/cajas/cajas.component';
import { ClientesComponent } from './area-cajero/clientes/clientes.component';
import { SolicitudesModificacionClienteComponent } from './area-cajero/solicitudes-modificacion-cliente/solicitudes-modificacion-cliente.component';
import { ModificacionClientesSolicitudesComponent } from './area-administrador/modificacion-clientes-solicitudes/modificacion-clientes-solicitudes.component';
import { ProductosCajerosComponent } from './area-cajero/productos-cajeros/productos-cajeros.component';
import { VentasComponent } from './area-cajero/ventas/ventas.component';
import { InfoSucursalComponent } from './area-cajero/info-sucursal/info-sucursal.component';

const routes: Routes = [

  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: ManagerHomepageComponent },
  {
    path: 'areaAdministrador', component: AreaAdministradorComponent,
    children: [
      {path:'listarUsuarios',component:ListarUsuariosComponent},
      {path:'cajas',component:CajasComponent},
      {path:'modificacionesClienteSolicitudes',component:ModificacionClientesSolicitudesComponent}
    ]
  },
  { path: 'login', component: LoginComponent },

  {path:'areaBodega',component:AreaBodegaComponent,
    children:[
      {path:'compras', component:ComprasComponent},
      {path:'addProductoBodega',component:AddProductosBodegaComponent},
      {path:'todosProductos',component:TodosProductosComponent}
    ]
  },
  {
    path:'areaInventario', component:AreaInventarioComponent,
    children:[
      {path:'trasladarProductos',component:TrasladarProductosComponent},
      {path:'consultarProductos',component:ConsultarProductosComponent}
    ]
  },
  {
    path:'areaCajero',component:AreaCajeroComponent,
    children:[
      {path:'clientes',component:ClientesComponent},
      {path:'solicitudesModificacionCliente',component:SolicitudesModificacionClienteComponent},
      {path:'productosCajero',component:ProductosCajerosComponent},
      {path:'ventas',component:VentasComponent},
      {path:'infoSucursal',component:InfoSucursalComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
