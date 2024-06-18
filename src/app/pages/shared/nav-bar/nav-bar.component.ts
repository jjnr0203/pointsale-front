import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ShopService } from '../../../http-services/shop.service';
import { LoginHttpService } from '../../../http-services/login-http.service';
import { ShopHttpService } from '../../../http-services/shop-http.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class NavBarComponent implements OnInit {
  shops: any;
  user: any;
  filteredItems: any;
  constructor(
    private router: Router,
    private shopService: ShopService,
    private loginHttpService: LoginHttpService,
    private shopHttpService: ShopHttpService
  ) {
    this.user = this.loginHttpService.getUser();
  }

  ngOnInit(): void {
    this.shopHttpService
      .findShopsByUser(this.user.sub)
      .subscribe((response) => {
        this.shops = response.data;
      });
    this.filteredItems = this.filterItems();
  }

  activeOptions = false;
  toggleMenu(item: any) {
    this.activeOptions = !this.activeOptions;
    item.activeSubmenu = !item.activeSubmenu;
  }

  activeShopOptions = false;
  toggleMenuShops() {
    this.activeShopOptions = !this.activeShopOptions;
  }

  selectShop(item: any) {
    sessionStorage.setItem('shop', JSON.stringify(item));
    this.activeShopOptions = !this.activeShopOptions;
    window.location.reload();
  }

  filterItems() {
    const items = this.items.filter((item) =>
      item.codes?.includes(this.user.role.code)
    );
    return items;
  }

  items = [
    {
      icon: 'pi pi-home',
      label: 'Inicio',
      activeSubmenu: false,
      submenu: [{ label: 'Inicio', route:'/core/home' }],
      codes: [1,2,3,4,5]
    },
    {
      icon: 'pi pi-users',
      label: 'Empleados',
      activeSubmenu: false,
      submenu: [{ label: 'Formulario', route:'/core/admin/employee/employee-form/0' }, { label: 'Listado',route:'/core/admin/employee/employee-list' }],
      codes: [1]
    },
    {
      icon: 'pi pi-truck',
      label: 'Repartidores',
      activeSubmenu: false,
      submenu: [{ label: 'Formulario de nuevo repartidor', route:'/core/supplier/shipper-form' }, { label: 'Lista de repartidores',route:'/core/supplier/shipper-list' }],
      codes: [4]
    },
    {
      icon: 'pi pi-shopping-cart',
      label: 'Ventas',
      activeSubmenu: false,
      submenu: [{ label: 'Nueva orden', route:'/core/admin/sales' }],
      codes: [1,3]
    },
    {
      icon: 'pi pi-key',
      label: 'Super administrador',
      activeSubmenu: false,
      submenu: [{ label: 'Lista de administradores',route:'/core/super-admin/admin-list' }],
      codes: [2]
    },
    {
      icon: 'pi pi-users',
      label: 'Shipper',
      activeSubmenu: false,
      submenu: [{ label: 'Lista de Transportista', route:'/core/admin/shipper/shipper-list' }, { label: 'Lista de Transportista', route:'core/admin/shipper/shipper-list' }],
      codes: [5]
    },
    {
      icon: 'pi pi-users',
      label: 'Transportista',
      activeSubmenu: false,
      submenu: [{ label: 'Formulario de Transportista', route:'/core/admin/shipper/shipper-form' }, { label: 'Formulario de Transportista', route:'/core/admin/shipper/shipper-form' }],
      codes: [5]
    },
    {
      icon: 'pi pi-inbox',
      label: 'SUPPLIER',
      activeSubmenu: false,
      submenu: [{ label: 'Formulario del Proveedor', route:'/core/admin/supplier/supplier-form/:id' }, { label: 'Listado',route:'/core/admin/supplier/supplier-list'}],
      codes: [1]
    },
    {
      icon: 'pi-address-book',
      label: 'Repartidor',
      activeSubmenu: false,
      submenu: [{ label: 'Informacion del proveedor', route:'/core/shipper/supplier-information' }],
      codes: [5]
    },
    {
      icon: 'pi pi-shop',
      label: 'Tiendas',
      activeSubmenu: false,
      submenu: [{ label: 'Formulario de tiendas', route:'/core/admin/shop/shop-form/:id' }, { label: 'Listado',route:'/core/admin/shop/shop-list'}],
      codes: [1]
    },
    {
      icon: 'pi pi-tags',
      label: 'Producto',
      activeSubmenu: false,
      submenu: [{ label: 'Formulario de Productos', route:'/core/admin/product/product-form/:id' }, { label: 'Listado',route:'/core/admin/product/product-list'}],
      codes: [1]
    },
  ];
}
