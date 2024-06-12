import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductModel } from "../models/product.model";
import { ResponseModel } from "../models/response.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class ProductsHttpService{
    constructor(private httpClient:HttpClient,
    ){
    }
    url:string = "http://localhost:3000/products";

    findAll():Observable<ProductModel[]>{
        return this.httpClient.get<ProductModel[]>(`${this.url}`);
    }

    findOneProduct(id:string){
        return this.httpClient.get<ProductModel>(`${this.url}/${id}`)
    }

    createProduct(product: ProductModel){
        return this.httpClient.post<ProductModel>(`${this.url}`, product);
    }

    updateProduct(id:string,product: ProductModel):Observable<ProductModel>{
        return this.httpClient.put<ProductModel>(`${this.url}/${id}`, product);

    }
    
    deleteProduct(id: string){
        return this.httpClient.delete(`${this.url}/${id}`);
    }
}