import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ContentComponent } from './components/layout/content/content.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { AsideComponent } from './components/layout/aside/aside.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MostrarClientesComponent } from './components/Clientes/mostrar-clientes/mostrar-clientes.component';
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
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    AsideComponent,
    MostrarClientesComponent,
    ActualizarClientesComponent,
    EliminarClientesComponent,
    CrearclientesComponent,
    MostrarVentasComponent,
    AgregarVentasComponent,
    ActualizarVentasComponent,
    EliminarVentasComponent,
    MostrarTipoProductosComponent,
    AgregarTipoProductosComponent,
    EliminarTipoProductosComponent,
    ActualizarTipoProductosComponent,
    MostrarProductosComponent,
    AgregarProductosComponent,
    ActualizarProductosComponent,
    EliminarProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelMenuModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
