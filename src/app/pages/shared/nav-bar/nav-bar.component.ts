import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ShopService } from '../../../http-services/shop.service';
import { LoginHttpService } from '../../../http-services/login-http.service';
import { ShopHttpService } from '../../../http-services/shop-http.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  encapsulation:ViewEncapsulation.None
})
export class NavBarComponent implements OnInit{
  shops:any;
  user:any;
  constructor(private router:Router, private shopService:ShopService,private loginHttpService:LoginHttpService,
    private shopHttpService:ShopHttpService
  ){
    this.user = this.loginHttpService.getUser()
    console.log(this.user)
  }
  
  
  ngOnInit(): void {
    this.shopHttpService.findShopsByUser(this.user.sub).subscribe(
      response => {
        this.shops = response.data
  })
  }

  activeOptions=false
  toggleMenu(item:any){
    this.activeOptions = !this.activeOptions
    item.activeSubmenu = !item.activeSubmenu
  }
  
  activeShopOptions=false
  toggleMenuShops(){
    this.activeShopOptions = !this.activeShopOptions 
  }

  selectShop(item:any) {
    sessionStorage.setItem('shop', JSON.stringify(item));
    this.activeShopOptions = !this.activeShopOptions;
    window.location.reload(); 
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
        { label: 'My link test' },
        { label: 'My link 2' }
      ] },
    { icon: 'pi pi-list-check', label: 'Productos' },
    { icon: 'pi pi-credit-card', label: 'Punto de venta' }
  ];
}

