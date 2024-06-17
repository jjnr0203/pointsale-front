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

    findAll():Observable<SupplierModel[]>{
        return this.httpClient.get<SupplierModel[]>(`${this.url}`);
        
    }

    findSupplierByUser(id:string){
        return this.httpClient.get<ResponseModel>(`${this.url}/${id}/user`);
    }

    findOne(id:string){
        return this.httpClient.get<ResponseModel>(`${this.url}/${id}`);
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