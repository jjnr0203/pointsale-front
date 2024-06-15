import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '../models/response.model';
import { Observable } from 'rxjs';
import { UserModel } from '../models/shop.model';

@Injectable({
  providedIn: 'root',
})
export class AdminHttpService {
  constructor(private httpClient: HttpClient) {}
  url: string = 'http://localhost:3000/users';

  findAll() {
    return this.httpClient.get<ResponseModel>(this.url);
  }

  delete(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }

  createAdmin(admin:UserModel){
    return this.httpClient.post<ResponseModel>(this.url,admin);
  }

  findUserByRole(role:string){
    return this.httpClient.get<ResponseModel>(`${this.url}/${role}`)
  }
}
