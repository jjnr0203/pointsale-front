import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShipperModel } from '../models/customer.model';
import { ResponseModel } from '../models/response.model';
import { ShipperFormModel } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShipperHttpService {

  constructor(private httpClient: HttpClient) { }
  url:string = "http://localhost:3000/shipper";

  findAll(){
    return this.httpClient.get(this.url);
  }

  findShipperBySupplier(supplier:string){
    return this.httpClient.get<ResponseModel>(`${this.url}/${supplier}/supplier`);
  }

  findShipperBySupplierUserId(userId: string) {
    return this.httpClient.get<ResponseModel>(`${this.url}/${userId}/user`);
  }

  findOne(id: string){
    return this.httpClient.get<ResponseModel>(`${this.url}/${id}`)
  }

  create(shipper:ShipperFormModel){
    return this.httpClient.post<ResponseModel>(this.url, shipper);
  }

  delete(id: string) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

}
