import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductModel } from "../models/product.model";

@Injectable({
    providedIn:'root'
})
export class ProductsHttpService{
    constructor(private httpClient:HttpClient){}
    url:string = "http://localhost:3000/products";

    async findAll(){
        return await this.httpClient.get(`${this.url}`);
    }

    async findOneProduct(id:string){
        return await this.httpClient.get<ProductModel>(`${this.url}/${id}`)
    }

    async createProduct(product: ProductModel) {
        return await this.httpClient.post(`${this.url}`, product);
    }

    async updateProduct(id:string,product: ProductModel){
        return await this.httpClient.put<ProductModel>(`${this.url}/${id}`, product);

    }
    
    async deleteProduct(id: string){
        return await this.httpClient.delete(`${this.url}/${id}`);
    }
}