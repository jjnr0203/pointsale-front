/* import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '../models/response.model';
import { Observable } from 'rxjs/internal/Observable';
import { UserModel } from '../models/shop.model';
import { LoginFormModel } from '../models/user.model';
import { map, retry, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginHttpService {
  constructor(private httpClient: HttpClient) {}
  url: string = 'http://localhost:3000/auth';

  login(login: LoginFormModel) {
    return this.httpClient.post<ResponseModel>(`${this.url}/login`, login).pipe(
      map((response) => {
        sessionStorage.setItem("user", JSON.stringify(response.data))
      })
    );
  }

  getProfile(): Observable<any> {
    const user = JSON.parse(sessionStorage.getItem("user")!)
    return user.user
  }


}
 */