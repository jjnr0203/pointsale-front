import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  encapsulation:ViewEncapsulation.None
})
export class NavBarComponent {
  constructor(private router:Router){}
  activeOptions=false
  toggleMenu(item:any){
    this.activeOptions = !this.activeOptions
    item.activeSubmenu = !item.activeSubmenu
  }
  items = [
    { icon: 'pi pi-shop', label: 'Tiendas' },
    { 
      icon: 'pi pi-users', 
      label: 'Empleados', 
      activeSubmenu: false,
      submenu: [
        { label: 'My link' },
        { label: 'My link 2' }
      ]
    },
    { icon: 'pi pi-truck', label: 'Proveedores',activeSubmenu: false,
      submenu: [
        { label: 'My link' },
        { label: 'My link 2' }
      ] },
    { icon: 'pi pi-list-check', label: 'Productos' },
    { icon: 'pi pi-credit-card', label: 'Punto de venta' }
  ];
}

