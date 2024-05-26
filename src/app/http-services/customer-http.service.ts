import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomerHttpService {

  constructor(private httpClient: HttpClient) { }
  url:string = "http://localhost:3000/customers";

  findAll(){
    return this.httpClient.get(this.url);
  }
}
