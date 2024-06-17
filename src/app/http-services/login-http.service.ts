import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '../models/response.model';
import { LoginFormModel } from '../models/user.model';
import { map, retry, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginHttpService {
  constructor(private httpClient: HttpClient) {}
  url: string = 'http://localhost:3000/auth';
  user: any;
  shop: any;

  login(login: LoginFormModel) {
    return this.httpClient.post<ResponseModel>(`${this.url}/login`, login).pipe(
      map((response) => {
        this.setShopByUser(response.data.user.sub);
        sessionStorage.setItem('user', JSON.stringify(response.data));
        this.getUser()
      })
    );
  }

  getUser() {
    const user = JSON.parse(sessionStorage.getItem('user')!)
    if(!user){
      return {}
    }
    return user.user
  }

  setShopByUser(id: string) {
    this.httpClient
      .get<ResponseModel>(`http://localhost:3000/shops/${id}/user`)
      .subscribe((response) => {
        sessionStorage.setItem('shop', JSON.stringify(response.data[0]));
      });
  }
}
