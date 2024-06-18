import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { ShopModel } from '../../../../../models/shop.model';
import { ShopHttpService } from '../../../../../http-services/shop-http.service';
import { LoginHttpService } from '../../../../../http-services/login-http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shop-form',
  templateUrl: './shop-form.component.html',
  styleUrl: './shop-form.component.scss'
})
export class ShopFormComponent {
  
  shop:FormGroup;
  shops: ShopModel[]= [];
  result: number = 0;
  user:any
  userStorage: any;

  constructor(
    private activatedRoute:ActivatedRoute,
    private shopHttpService: ShopHttpService,
    private formBuilder:FormBuilder,
    private loginHttpService:LoginHttpService,
    private router: Router
  ){
    const idSnapshot= this.activatedRoute.snapshot.params['id']
    if(idSnapshot && idSnapshot !== '0'){
      this.user = idSnapshot
    }else if(idSnapshot && idSnapshot == '0'){
      this.userStorage = this.loginHttpService.getUser()
      this.user = this.userStorage.sub
    }
    this.shop = this.formShop()
  }
  
  formShop(): FormGroup{
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      ruc: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      address: ['',[Validators.required]],
      phone:['',[Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      email:['',[Validators.required, Validators.email, Validators.pattern(/^.+@gmail\.com$/)]],
      user:[this.user,[Validators.required]]
    })
  }

    onSubmit(){
        this.shopHttpService.createShop(this.shop.value).subscribe(
          response => {
           
            alert('Tienda creada exitosamente');
            this.router.navigateByUrl('/core/admin/shop/shop-list');
            this.loginHttpService.setShopByUser(this.user)
            this.shopHttpService.findShopsByUser(this.user)
            console.log(response)
          },
          (error: any) => {
            this.shop.markAllAsTouched()
            console.error('Error al crear la tienda:', error);
            alert('Error al crear la tienda');
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
