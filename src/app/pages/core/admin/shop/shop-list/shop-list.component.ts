import { Component, OnInit } from '@angular/core';
import { ShopHttpService } from '../../../../../http-services/shop-http.service';
import { ShopModel } from '../../../../../models/shop.model';
import { LoginHttpService } from '../../../../../http-services/login-http.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrl: './shop-list.component.scss'
})
export class ShopListComponent implements OnInit {
  shops: any;
  filteredShops: any = [];
  searchTerm: string = '';
  user: any;

  constructor(
    private shopHttpService: ShopHttpService,
    private loginHttpService: LoginHttpService,
    
  ) {
    this.user = this.loginHttpService.getUser();
    // this.findAll();
    console.log(this.user)
  }
  ngOnInit(): void {
    this.shopHttpService
      .findShopsByUser(this.user.sub)
      .subscribe((response) => {
        this.shops = response.data;
        this.filteredShops= this.shops;
        console.log(this.shops)
      });
  }

 /*  findAll(){
    this.shopHttpService.findAll().subscribe(response =>{
      this.shops = response;
      console.log(this.shops)
    })
  }
 */
  filterShops() {
    if (this.searchTerm) {
      this.filteredShops = this.shops.filter((shop: any) =>
        shop.user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        shop.user.email.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredShops = this.shops;
    }
  }

  //createShop(shop: ShopModel){
    //this.shopHttpService.createShop(shop).subscribe(response =>{
      //console.log(response);
    //})
  //}

  /* findOneShop(id:string){
    this.shopHttpService.findOneShop(id).subscribe(response =>{
      this.shops = response;
    })
  } */

  //updateShop(id:string, shop:ShopModel){
    ////console.log(response)
    //})
  //}

  deleteShop(id:string){
    this.shopHttpService.deleteShop(id).subscribe(response =>{
      console.log(response)
    })
  }
}
