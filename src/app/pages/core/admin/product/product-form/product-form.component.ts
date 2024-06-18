import { Component } from '@angular/core';
import { ProductsHttpService } from '../../../../../http-services/products-http.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductModel } from '../../../../../models/product.model';
import { ShopService } from '../../../../../http-services/shop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {
  product:FormGroup;
  products: ProductModel[]= [];
  currentShop: any;
  result: number = 0;


  constructor (
    private shopService:ShopService,
    private productsHttpService:ProductsHttpService,
    private formBuilder:FormBuilder,
    private router: Router
    
  ){
    this.currentShop = this.shopService.getShop()
    this.product = this.productForm();
  }

  productForm(){
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      unit: [null, [Validators.required, Validators.minLength(1)]],
      price: [null, [Validators.required]],
      cost: [null, [Validators.required]],
      shops: [[this.currentShop], [Validators.required]]
    })
  }

  onSubmit(){
    if (this.product.valid) {
      const productData = this.product.value;
      this.productsHttpService.createProduct(productData).subscribe(
        response => {
          this.products.push(response);
          alert('Producto creado exitosamente');
          this.router.navigateByUrl('/core/admin/product/product-list');
          this.product.reset();
          this.products
          console.log(this.products)
        },
        (error: any) => {
          console.error('Error al crear el producto:', error);
          alert('Error al crear el producto');
        }
        
      )
    } else {
      this.product.markAllAsTouched()
      alert('El formulario no es valido');
    }
  }
  

   updateProduct(){
    const unit = this.product.controls['unit'].value;
    const price = this.product.controls['price'].value;
    this.result = unit * price;
  }


  get nameField(): AbstractControl{
    return this.product.controls['name'];
  }
  get unitField(): AbstractControl{
    return this.product.controls['unit'];
  }
  get priceField(): AbstractControl{
    return this.product.controls['price'];
  }
  get costField(): AbstractControl{
    return this.product.controls['cost'];
  }
}


