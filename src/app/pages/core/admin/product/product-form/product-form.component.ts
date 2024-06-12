import { Component } from '@angular/core';
import { ProductsHttpService } from '../../../../../http-services/products-http.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductModel } from '../../../../../models/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {
  product:FormGroup;
  products: ProductModel[]= [];
  result: number = 0;

  constructor (
    private productsHttpService:ProductsHttpService,
    private formBuilder:FormBuilder

  ){
    this.product = this.productForm();
  }

  productForm(){
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      unit: [0, [Validators.required, Validators.minLength(1)]],
      price: [0, [Validators.required]],
      cost: [0, [Validators.required]]
    })
  }

  onSubmit(){
    if (this.product.valid) {
      const productData = this.product.value;
      this.productsHttpService.createProduct(productData).subscribe(
        response => {
          this.products.push(response);
          alert('Tienda creada exitosamente');
          this.product.reset();
          this.products
        },
        (error: any) => {
          console.error('Error al crear la tienda:', error);
          alert('Error al crear la tienda');
        }
      )
    } else {
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
