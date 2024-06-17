import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { ShopModel } from '../../../../../models/shop.model';
import { ShopHttpService } from '../../../../../http-services/shop-http.service';

@Component({
  selector: 'app-shop-form',
  templateUrl: './shop-form.component.html',
  styleUrl: './shop-form.component.scss'
})
export class ShopFormComponent {
  shop:FormGroup;
  shops: ShopModel[]= [];
  result: number = 0;


  constructor(
    private shopsHttpService: ShopHttpService,
    private formBuilder:FormBuilder
  ){
    this.shop = this.formShop()
  }

  formShop(): FormGroup{
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      ruc: ['',[Validators.required,Validators.maxLength(13), Validators.minLength(13)]],
      address: ['',[Validators.required]],
      phone:['',[Validators.required, Validators.maxLength, Validators.minLength(10)]],
      email:['',[Validators.required, Validators.email]],
      idUser:['', Validators.required]
    })
  }

  onSubmit(){
    if (this.shop.valid) {
      const shopData = this.shop.value;
      this.shopsHttpService.createShop(shopData).subscribe(
        response => {
          this.shops.push(response);
          alert('Tienda creada exitosamente');
          this.shop.reset();
          this.shops
          console.log(this.shop)
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

  updateShop(){
    const name = this.shop.controls['name'].value;
    const address = this.shop.controls['address'].value;
    this.result = name * address;
  }

  get nameField(): AbstractControl{
    return this.shop.controls['name'];
  }
  get rucField(): AbstractControl{
    return this.shop.controls['ruc'];
  }
  get addressField(): AbstractControl{
    return this.shop.controls['address'];
  }
  get phoneField(): AbstractControl{
    return this.shop.controls['phone'];
  }
  get emailField(): AbstractControl{
    return this.shop.controls['email'];
  }
  get idUserField(): AbstractControl{
    return this.shop.controls['idUser'];
  }
}
