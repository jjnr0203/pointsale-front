import { Component } from '@angular/core';
import { ProductsHttpService } from '../../../../../http-services/products-http.service';
import { ProductModel } from '../../../../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products: any = [];
  filteredProducts: any = [];
  searchTerm: string = '';
  confirmOpened: boolean = false; 

  constructor(
    private productsHttpService: ProductsHttpService
  ) {
  }

  findAll(){
    this.productsHttpService.findAll().subscribe(response => {
      this.products = response;
      this.filteredProducts = this.products
      console.log(this.products);
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
