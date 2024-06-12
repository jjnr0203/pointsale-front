import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ShopModel } from "../models/shop.model";
import { ResponseModel } from "../models/response.model";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
    providedIn:'root'
})

export class ShopHttpService{
    create(shopData: any) {
      throw new Error('Method not implemented.');
    }
    constructor(private httpClient:HttpClient){}
    url:string = "http://localhost:3000/shops";


    findAll():Observable<ShopModel[]>{
        return this.httpClient.get<ShopModel[]>(`${this.url}`);
    }


    findOneShop(id:string){
        return this.httpClient.get<ShopModel>(`${this.url}/${id}`)
    }

    createShop(shop: ShopModel){
        return this.httpClient.post<ShopModel>(`${this.url}`, shop)

    }

    updateShop(id:string, shop:ShopModel):Observable<ShopModel>{
        return this.httpClient.put<ShopModel>(`${this.url}/${id}`, shop)
    }

    deleteShop(id:string){
        return this.httpClient.delete(`${this.url}/${id}`);
    }
}