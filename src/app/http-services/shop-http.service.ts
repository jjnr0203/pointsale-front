import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ShopModel } from "../models/shop.model";

@Injectable({
    providedIn:'root'
})

export class ShopHttpService{
    constructor(private httpClient:HttpClient){}
    url:string = "http://localhost:3000/shops";


    async findAll(){
        return await this.httpClient.get(`${this.url}`);
    }


    async findOneShop(id:string){
        return await this.httpClient.get<ShopModel>(`${this.url}/${id}`)
    }

    async createShop(shop: ShopModel){
        return await this.httpClient.post(`${this.url}`, shop)

    }

    async updateShop(id:string, shop:ShopModel){
        return await this.httpClient.put<ShopModel>(`${this.url}/${id}`, shop)
    }

    async deleteShop(id:string){
        return await this.httpClient.delete(`${this.url}/${id}`);
    }
}