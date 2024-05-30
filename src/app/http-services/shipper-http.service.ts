import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShipperModel } from '../models/customer.model';
import { ResponseModel } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class ShipperHttpService {

  constructor(private httpClient: HttpClient) { }
  url:string = "http://localhost:3000/users";

  findAll(){
    return this.httpClient.get(this.url);
  }

  create(shipper:ShipperModel){
    return this.httpClient.post<ResponseModel>(this.url, shipper);
  }
}
