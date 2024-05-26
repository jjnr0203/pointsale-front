import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminHttpService {

  constructor(private httpClient: HttpClient) { }
  url:string = "http://localhost:3000/users";

  findAll(){
    return this.httpClient.get(this.url);
  }
}
