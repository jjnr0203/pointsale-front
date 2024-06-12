import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '../models/response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminHttpService {

  constructor(private httpClient: HttpClient) { }
  url:string = "http://localhost:3000/users";

  findAll(){
    return this.httpClient.get<ResponseModel>(this.url);
  }
  /* delete(id:string){
    return this.httpClient.delete(`${this.url}/${id}`)
  } */

  delete(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }
}
