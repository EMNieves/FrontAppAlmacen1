import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostrarClientesComponent } from './components/Clientes/mostrar-clientes/mostrar-clientes.component'
import { ActualizarClientesComponent } from './components/Clientes/actualizar-clientes/actualizar-clientes.component';
import { EliminarClientesComponent } from './components/Clientes/eliminar-clientes/eliminar-clientes.component';
import { CrearclientesComponent } from './components/Clientes/crearclientes/crearclientes.component';
import { MostrarVentasComponent } from './components/Ventas/mostrar-ventas/mostrar-ventas.component';
import { AgregarVentasComponent } from './components/Ventas/agregar-ventas/agregar-ventas.component';
import { ActualizarVentasComponent } from './components/Ventas/actualizar-ventas/actualizar-ventas.component';
import { EliminarVentasComponent } from './components/Ventas/eliminar-ventas/eliminar-ventas.component';
import { MostrarTipoProductosComponent } from './components/TipoProductos/mostrar-tipo-productos/mostrar-tipo-productos.component';
import { AgregarTipoProductosComponent } from './components/TipoProductos/agregar-tipo-productos/agregar-tipo-productos.component';
import { EliminarTipoProductosComponent } from './components/TipoProductos/eliminar-tipo-productos/eliminar-tipo-productos.component';
import { ActualizarTipoProductosComponent } from './components/TipoProductos/actualizar-tipo-productos/actualizar-tipo-productos.component';
import { MostrarProductosComponent } from './components/Productos/mostrar-productos/mostrar-productos.component';
import { AgregarProductosComponent } from './components/Productos/agregar-productos/agregar-productos.component';
import { ActualizarProductosComponent } from './components/Productos/actualizar-productos/actualizar-productos.component';
import { EliminarProductosComponent } from './components/Productos/eliminar-productos/eliminar-productos.component';


const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/', 
    pathMatch: 'full' 
  },
  {
    path: "clientes",
    component: MostrarClientesComponent
  },
  {
    path: "addclientes",
    component: CrearclientesComponent
  },
  {
    path: "clientes/edit/:id",
    component: ActualizarClientesComponent
  },
  {
    path: "deleteclientes/:id",
    component: EliminarClientesComponent
  },


  //--------------------------------------------------//
  {
    path: "ventas",
    component: MostrarVentasComponent
  },
  {
    path: "addventas",
    component: AgregarVentasComponent
  },
  {
    path: "ventas/edit/:id",
    component: ActualizarVentasComponent
  },
  {
    path: "deleteventas/:id",
    component: EliminarVentasComponent
  },

  //-----------------------------------------------------------//

  {
    path: "TipoProductos",
    component: MostrarTipoProductosComponent
  },
  {
    path: "addTipoProductos",
    component: AgregarTipoProductosComponent
  },
  {
    path: "TipoProductos/edit/:id",
    component: ActualizarTipoProductosComponent
  },
  {
    path: "deleteTipoProductos/:id",
    component: EliminarTipoProductosComponent
  },

  //---------------------------------------------------------//

  {
    path: "Productos",
    component: MostrarProductosComponent
  },
  {
    path: "addproductos",
    component: AgregarProductosComponent
  },
  {
    path: "productos/edit/:id",
    component: ActualizarProductosComponent
  },
  {
    path: "deleteproductos/:id",
    component: EliminarProductosComponent
  },



];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
