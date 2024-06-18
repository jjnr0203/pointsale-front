import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { SupplierModel } from "../models/supplier.model";
import { Observable } from "rxjs";
import { ResponseModel } from "../models/response.model";

@Injectable({
    providedIn:'root'
})

export class SupplierHttpService{
    constructor(private readonly httpClient:HttpClient){}
    url:string = "http://localhost:3000/suppliers";

    findAll(shopID:string){
        return this.httpClient.get<ResponseModel>(`${this.url}/${shopID}/shop`);
        
    }

    findSupplierByUser(id:string){
        return this.httpClient.get<ResponseModel>(`${this.url}/${id}/user`);
    }

    findOne(id:string){
        return this.httpClient.get<ResponseModel>(`${this.url}/${id}`);
    }

    finOneSupplier(id:string){
        return this.httpClient.get<SupplierModel>(`${this.url}/${id}`);
    }

    createSupplier(supplier: any){
        return this.httpClient.post(`${this.url}`, supplier);
    }

    updateSupplier(id:string, supplier:SupplierModel){
        return this.httpClient.put<SupplierModel>(`${this.url}/${id}`, supplier)
    }

    deleteSupplier(id:string){
        return this.httpClient.delete(`${this.url}/${id}`);
    }
}