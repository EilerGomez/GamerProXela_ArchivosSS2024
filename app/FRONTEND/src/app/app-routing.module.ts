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


const routes: Routes = [

  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: ManagerHomepageComponent },
  {
    path: 'areaAdministrador', component: AreaAdministradorComponent,
    children: [
      {path:'listarUsuarios',component:ListarUsuariosComponent}
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
