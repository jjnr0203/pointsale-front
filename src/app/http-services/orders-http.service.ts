import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ResponseModel} from "../models/response.model";
import {OrderModel} from "../models/order.model";

@Injectable({
  providedIn: 'root'
})
export class OrdersHttpService {

  constructor(private httpClient:HttpClient) { }
  url:string = "http://localhost:3000/orders";

  create(order: OrderModel) {
    return this.httpClient.post<ResponseModel>(this.url,order);
  }
}
