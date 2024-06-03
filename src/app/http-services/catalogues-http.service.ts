import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class CataloguesHttpService {

  constructor(private httpClient:HttpClient) { }
  url:string = "http://localhost:3000/catalogues";

  getByPayment(type:string){
    return this.httpClient.get<ResponseModel>(`${this.url}?type=${type}`)
  }

}
