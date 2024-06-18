import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { ShopModel } from '../../../../../models/shop.model';
import { ShopHttpService } from '../../../../../http-services/shop-http.service';
import { LoginHttpService } from '../../../../../http-services/login-http.service';

@Component({
  selector: 'app-shop-form',
  templateUrl: './shop-form.component.html',
  styleUrl: './shop-form.component.scss'
})
export class ShopFormComponent {
  shop:FormGroup;
  shops: ShopModel[]= [];
  result: number = 0;
  user: any;

  constructor(
    private shopsHttpService: ShopHttpService,
    private formBuilder:FormBuilder,
    private loginHttpService:LoginHttpService
  ){
    this.user = this.loginHttpService.getUser()
    this.shop = this.formShop()
    console.log(this.user)
  }

  formShop(): FormGroup{
    return this.formBuilder.group({
      name: ['', [Validators.required]],
      ruc: ['',[Validators.required]],
      address: ['',[Validators.required]],
      phone:['',[Validators.required]],
      email:['',[Validators.required]],
      user:[this.user.sub,[Validators.required]]
    })
  }

    onSubmit(){
        this.shopsHttpService.createShop(this.shop.value).subscribe(
          response => {console.log(response)
          },
          (error: any) => {
            console.error('Error', error)
          }
        )
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
  get userField(): AbstractControl{
    return this.shop.controls['user'];
  }

}
