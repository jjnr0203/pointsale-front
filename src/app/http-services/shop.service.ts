import { Injectable } from '@angular/core';
import { LoginHttpService } from './login-http.service';
import { HttpClient } from '@angular/common/http';
import { ResponseModel } from '../models/response.model';
import { ShopHttpService } from './shop-http.service';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  shop:any;
  shops:any;
  constructor(private shopHttpService:ShopHttpService, private httpClient:HttpClient) {
   }

   getShop() {
    const shop = JSON.parse(sessionStorage.getItem('shop')!)
    return shop
  }   
 
}
