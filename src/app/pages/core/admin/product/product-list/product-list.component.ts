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

  constructor(private productsHttpService: ProductsHttpService) {
    this.findAll();
  }

  findAll(){
    this.productsHttpService.findAll().subscribe(response => {
      this.products = response;
      console.log(this.products);
    })
  }

  //createProduct(product: ProductModel){
    ////this.products = response;
    //})
  //}

  findOneProduct(id:string){
    this.productsHttpService.findOneProduct(id).subscribe(response =>{
      this.products = response;
    })
  }

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
