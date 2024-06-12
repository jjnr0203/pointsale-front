import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CreateCustomerModel, CustomerModel} from "../models/customer.model";
import {ResponseModel} from "../models/response.model";

@Injectable({
  providedIn: 'root'
})
export class CustomersHttpService {

  constructor(private httpClient: HttpClient) { }
  url:string = "http://localhost:3000/customers";

  findAll(){
    return this.httpClient.get<ResponseModel>(this.url);
  }

  findOne(){
    return this.httpClient.get<ResponseModel>(this.url)
  }

  create(customer:CreateCustomerModel){
    return this.httpClient.post<ResponseModel>(this.url, customer);
  }
}
