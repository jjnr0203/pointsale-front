import { Component, OnInit } from '@angular/core';
import { ProductsHttpService } from '../../../../../http-services/products-http.service';
import { ProductModel } from '../../../../../models/product.model';
import { LoginHttpService } from '../../../../../http-services/login-http.service';
import { ShopService } from '../../../../../http-services/shop.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  products: any = [];
  filteredProducts: any = [];
  searchTerm: string = '';
  confirmOpened: boolean = false; 
  user: any;
  curretnShop:any;
  constructor(
    // private loginHttpService:LoginHttpService,
    private productsHttpService: ProductsHttpService,
    private shopService:ShopService
  ) {
    // this.user = this.loginHttpService.getUser()
    this.curretnShop = this.shopService.getShop()
  }
  ngOnInit(): void {
    this.findAll(this.curretnShop.id)
  }

  findAll(shopid:string){
    this.productsHttpService.findByShop(shopid).subscribe(response => {
      this.products = response.data;
      this.filteredProducts = this.products
      console.log(response);
    })
  }

  filterProducts() {
    if (this.searchTerm) {
      this.filteredProducts = this.products.filter((product: any) =>
        product.user.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredProducts = this.products;
    }
  }

  /* findOneProduct(id:string){
    this.productsHttpService.findOneProduct(id).subscribe(response =>{
      this.products = response;
    })
  } */

  //updateProduct(id:string,product: ProductModel){
    ////console.log(response);
    //})
  //}

  deleteProduct(id: string){
    this.productsHttpService.deleteProduct(id).subscribe(response =>{
      console.log(response)
    })
  }

}
