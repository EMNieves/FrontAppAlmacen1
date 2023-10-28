import { Component, OnInit  } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  opc: MenuItem[] = [];
  ngOnInit(): void {
    this.opc = [
      {
        label: 'Clientes',
        icon: 'pi pi-fw pi-users',
        
        items: [
           {
             label: 'Mostrar Clientes',
             icon: 'pi pi-fw pi-note',
             routerLink: '/clientes',
           },
           {
             label: 'Agregar Clientes',
             icon: 'pi pi-fw pi-note',
             routerLink: '/addclientes',
           },
           {
             label: 'Actualizar Clientes',
             icon: 'pi pi-fw pi-note',
             routerLink: '/clientes/edit/:id',
           },
           {
             label: 'Eliminar Clientes',
             icon: 'pi pi-fw pi-note',
             routerLink: '/deleteclientes/:id',
           }
         ]
      },
      //----------------------------------------------//
      {
        label: 'TipoProductos',
        icon: 'pi pi-shopping-cart',

        items:[

          {
            label: 'Mostrar Tipo Productos',
            icon : 'pi pi-shopping-cart',
            routerLink: 'TipoProductos'
          },

          {
            label: 'Agregar Tipo Productos',
            icon : 'pi pi-shopping-cart',
            routerLink: 'addTipoProductos'
          },

          {
            label: 'Actualizar Tipo Productos',
            icon : 'pi pi-shopping-cart',
            routerLink: 'TipoProductos/edit/:id'
          },

          {
            label: 'Eliminar Tipo Productos',
            icon : 'pi pi-shopping-cart',
            routerLink: 'deleteTipoProductos/:id'
          },
        ],

        //-------------------------------------

      },
      

      {
        label: 'Productos',
        icon: 'pi pi-shopping-bag',
        items:[

          {
            label: 'Mostrar Productos',
            icon : 'pi pi-shopping-bag',
            routerLink: 'Productos'
          },

          {
            label: 'Agregar Productos',
            icon : 'pi pi-shopping-bag',
            routerLink: 'addproductos'
          },

          {
            label: 'Actualizar  Productos',
            icon : 'pi pi-shopping-bag',
            routerLink: 'productos/edit/:id'
          },

          {
            label: 'Eliminar Productos',
            icon : 'pi pi-shopping-bag',
            routerLink: 'deleteproductos/:id'
          }
        ]
      },

      {
        label: 'Ventas',
        icon: 'pi pi-credit-card',
        items:[

          {
            label: 'Mostrar Ventas',
            icon : 'pi pi-credit-card',
            routerLink: 'ventas'
          },

          {
            label: 'Agregar Ventas',
            icon : 'pi pi-credit-card',
            routerLink: 'addventas'
          },

          {
            label: 'Actualizar  Ventas',
            icon : 'pi pi-credit-card',
            routerLink: 'ventas/edit/:id'
          },

          {
            label: 'Eliminar Ventas',
            icon : 'pi pi-credit-card',
            routerLink: 'deleteventas/:id'
          }
        ]
      },
     

    ];
  }

}
