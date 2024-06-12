import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '../models/response.model';
import { EmployeeModule } from '../pages/core/admin/employee/employee.module';

@Injectable({
  providedIn: 'root'
})
export class EmployeeHttpService {

  constructor(private httpClient: HttpClient) { }
  url:string = "http://localhost:3000/employes";

  findAll(){
    return this.httpClient.get<ResponseModel>(this.url);
  }

  create(employee:EmployeeModule){
    return this.httpClient.post<ResponseModel>(this.url, employee);
  }

  delete(id: string) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  findOne(id: string){
    return this.httpClient.get<ResponseModel>(`${this.url}/${id}`)
  }
}
