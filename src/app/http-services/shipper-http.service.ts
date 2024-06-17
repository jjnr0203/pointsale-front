import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShipperModel } from '../models/customer.model';
import { ResponseModel } from '../models/response.model';
import { ShipperFormModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ShipperHttpService {

  constructor(private httpClient: HttpClient) { }
  url:string = "http://localhost:3000/users";

  findAll(){
    return this.httpClient.get(this.url);
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
