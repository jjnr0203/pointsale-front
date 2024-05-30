import { Component, OnInit } from '@angular/core';
import { AdminHttpService } from '../../../../http-services/admin-http.service';
import { ResponseModel } from '../../../../models/response.model';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrl: './admin-list.component.scss'
})
export class AdminListComponent {
  users: any = [];
  
  constructor(private adminHttpService:AdminHttpService){
    this.findAll()
  }
  
  findAll(){
    return this.adminHttpService.findAll().subscribe(response => {this.users = response});
  }
}


