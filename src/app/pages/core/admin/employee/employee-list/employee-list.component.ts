import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EmployeeHttpService } from '../../../../../http-services/employee-http.service';
import { catchError, of } from 'rxjs';
import { UserDeleteModel } from '../../../../../models/user.model';
import { ShopService } from '../../../../../http-services/shop.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class EmployeeListComponent implements OnInit{
  employees: any = [];
  filteredEmployees: any = [];
  searchTerm: string = '';
  currentShop:any;

  constructor(private employeeHttpService: EmployeeHttpService,
    private shopService:ShopService
  ) { 
    this.currentShop = this.shopService.getShop()
  }
  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.employeeHttpService.findEmployeeByShop(this.currentShop.id).subscribe(response => {
      this.employees = response.data;
      this.filteredEmployees = response;
    });
  }

  filterEmployees() {
    if (this.searchTerm) {
      this.filteredEmployees = this.employees.filter((employee: any) =>
        employee.user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        employee.user.email.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredEmployees = this.employees;
    }
  }

  deleteEmployee(employee: UserDeleteModel) {
    this.employeeHttpService.delete(employee.id).pipe(
      catchError(error => {
        console.error('Error deleting user:', error);
        return of(null);
      })
    ).subscribe(() => {
      this.findAll();
    });
  }
}