import { Component } from '@angular/core';
import { EmployeeHttpService } from '../../../../../http-services/employee-http.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent {

  products: any = [
    {
      name: 'Arroz',
      price: '0.50',
      unit: '2'

    },
    {
      name: 'Papas',
      price: '0.25',
      unit: '3'
    },
    {
      name: 'Cebolla',
      price: '0.15',
      unit: '5'
    }
  ];
  constructor(private employeeHttpService: EmployeeHttpService) {
    this.findAll()
  }

  findAll() {
    return this.employeeHttpService.findAll().subscribe(response => { this.products = response })
  }


}

