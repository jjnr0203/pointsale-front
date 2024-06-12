import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SupplierModel } from "../models/supplier.model";

@Injectable({
    providedIn:'root'
})

export class SupplierHttpService{
    constructor(private httpClient:HttpClient){}
    url:string = "http://localhost:3000/suppliers";

    findAll(){
        return this.httpClient.get<SupplierModel>(`${this.url}`);
    }

    finOneShupplier(id:string){
        return this.httpClient.get<SupplierModel>(`${this.url}/${id}`);
    }

    createSupplier(supplier: SupplierModel){
        return this.httpClient.post<SupplierModel>(`${this.url}`, supplier);
    }

    updateSupplier(id:string, supplier:SupplierModel){
        return this.httpClient.put<SupplierModel>(`${this.url}/${id}`, supplier)
    }

    deleteSupplier(id:string){
        return this.httpClient.delete(`${this.url}/${id}`);
    }
}