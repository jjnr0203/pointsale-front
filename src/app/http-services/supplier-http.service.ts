import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SupplierModel } from "../models/supplier.model";

@Injectable({
    providedIn:'any'
})

export class SupplierHttpService{
    constructor(private httpClient:HttpClient){}
    url:string = "http://localhost:3000/suppliers";

    

    async findAll(){
        return await this.httpClient.get(`${this.url}`);
    }

    async finOneShupplier(id:string){
        return await this.httpClient.get(`${this.url}/${id}`);
    }

    async createSupplier(supplier: SupplierModel){
        return await this.httpClient.post(`${this.url}`, supplier);
    }

    async updateSupplier(id:string, supplier:SupplierModel){
        return await this.httpClient.put<SupplierModel>(`${this.url}/${id}`, supplier)
    }

    async deleteSupplier(id:string){
        return await this.httpClient.delete(`${this.url}/${id}`);
    }
}