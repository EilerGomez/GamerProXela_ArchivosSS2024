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
import { TarjetasDescuentoComponent } from './area-cajero/tarjetas-descuento/tarjetas-descuento.component';
import { SolicitudTarjetasComponent } from './area-cajero/solicitud-tarjetas/solicitud-tarjetas.component';
import { SolicitudTarjetasAdminComponent } from './area-administrador/solicitud-tarjetas-admin/solicitud-tarjetas-admin.component';
import { HistorialDescuentosComponent } from './area-administrador/reportes/historial-descuentos/historial-descuentos.component';
import { Top10ventasIntervaloTiempoComponent } from './area-administrador/reportes/top10ventas-intervalo-tiempo/top10ventas-intervalo-tiempo.component';
import { Top2sucursalesMayorIngresoComponent } from './area-administrador/reportes/top2sucursales-mayor-ingreso/top2sucursales-mayor-ingreso.component';
import { Top10ProductosMasVendidosComponent } from './area-administrador/reportes/top10-productos-mas-vendidos/top10-productos-mas-vendidos.component';
import { Top10ClientesMayorGastoComponent } from './area-administrador/reportes/top10-clientes-mayor-gasto/top10-clientes-mayor-gasto.component';

const routes: Routes = [

  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: ManagerHomepageComponent },
  {
    path: 'areaAdministrador', component: AreaAdministradorComponent,
    children: [
      {path:'listarUsuarios',component:ListarUsuariosComponent},
      {path:'cajas',component:CajasComponent},
      {path:'modificacionesClienteSolicitudes',component:ModificacionClientesSolicitudesComponent},
      {path:'solicitudesTarjetasAdmin',component:SolicitudTarjetasAdminComponent},
      {path:'historialDescuentos',component:HistorialDescuentosComponent},
      {path:'top10VentasMasGrandesXTiempo',component:Top10ventasIntervaloTiempoComponent},
      {path:'top2SucursalesMasIngreso', component:Top2sucursalesMayorIngresoComponent},
      {path:'top10ProductosMasVendidos',component:Top10ProductosMasVendidosComponent},
      {path:'top10ClientesConMasGasto', component:Top10ClientesMayorGastoComponent}
    ]
  },
  { path: 'login', component: LoginComponent },

  {path:'areaBodega',component:AreaBodegaComponent,
    children:[
      {path:'compras', component:ComprasComponent},
      {path:'addProductoBodega',component:AddProductosBodegaComponent},
      {path:'todosProductos',component:TodosProductosComponent},
      {path:'infoSucursal',component:InfoSucursalComponent}
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
      {path:'infoSucursal',component:InfoSucursalComponent},
      {path:'todasTarjetas',component:TarjetasDescuentoComponent},
      {path:'solicitudesTarjetas',component:SolicitudTarjetasComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
